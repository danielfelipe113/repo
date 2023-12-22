
import { useParams } from "react-router-dom";
import useSearchBooks from "./../hooks/useSearchBooks";
import { useEffect, useState } from "react";
import { Book } from "../Models/Book.model";
import Critic from "../components/Critic";
import RentedIndicator from "../components/RentedIndicator";
import Genre from "../components/Genre";
import Modal from "../components/Modal";

function BookPage() {
	const { books, getById } = useSearchBooks();
	const { bookId } = useParams();

	const [book, setBook] = useState<Book>(new Book());
	const [days, setDays] = useState(1);
	const [isModalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		const book = getById(Number(bookId));
		if(book) {
			setBook(book);
		}
	}, [books]);
	
	function rent() {
		setBook(prevBook => ({ ...prevBook, rented: true, rentedDaysLeft: prevBook.rented ? prevBook.rentedDaysLeft + days : days }));
		setModalOpen(false);
	}

	return (
		<>
			<div className="px-2 pb-6 mt-4">
				<div className="rounded overflow-hidden shadow-lg">
					<div className="relative">
						{
							book.rented ?
							<RentedIndicator rentedDaysLeft={book.rentedDaysLeft}></RentedIndicator>
							: ''
						}

						<img className="w-full h-72" src={book.image} alt="Book image" />
					</div>
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">{book.name}</div>
						<i className="font-bold text-xl mb-2">{book.author}</i>
						<p className="text-gray-700 text-base">Published year: {book.publishedYear}</p>
						<p className="text-gray-700 text-base">ISBN 10: {book.isbn10}</p>
						<p className="text-gray-700 text-base">ISBN 13: {book.isbn13}</p>
						<p className="text-gray-700 text-base mt-2">{book.synopsis}</p>
					</div>
					<div className="px-6 pt-4 pb-2">
						<Genre genre={book.genre}/>
					</div>
					<div className="px-6 py-4 mt-3">
						<div className="font-bold text-xl mb-2">
							Critics:
						</div>
						<div>
							{book.critics.map((critic) => (
								<Critic critic={critic} key={critic.name}/>
							))}
						</div>
					</div>
					<button className="h-12 w-full flex justify-center items-center bg-red-500 text-gray-50 font-semibold uppercase hover:bg-red-400 hover:text-white" onClick={() => setModalOpen(true)}>
					{
						book.rented ? 'Extend renting' : 'Rent'
					}
					</button>
					
				</div>
			</div>
			<Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
				{
					book.rented
						?
						<h2 className="text-lg font-semibold text-gray-800 mt-4">
							Do you want to extend the renting time for {book.name}?
						</h2>
						:
						<h2 className="text-lg font-semibold text-gray-800">
							Do you want to Rent {book.name}?
						</h2>
				}

				<div className="mt-4">
					<label htmlFor="days" className="block text-sm font-medium text-gray-700">
						How many days?
					</label>
					<input
						id="days"
						className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						value={days}
						onChange={(e) => setDays(Number(e.target.value))}
					/>
				</div>

				<button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700" onClick={rent}>
					Rent
				</button>
				<button className="mt-4 ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-500" onClick={() => setModalOpen(false)}>
					Close
				</button>
			</Modal>
		</>
	);
}

export default BookPage;
