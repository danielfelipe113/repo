import { Link } from "react-router-dom";
import { Book } from "../Models/Book.model";
import RentedIndicator from "./RentedIndicator";
import Genre from "./Genre";

interface LayoutProps {
	book: Book;
}
function BookCard({ book }: LayoutProps) {
	return (
		<div className="px-2 max-w-sm w-1/3 pb-6">
			<div className="rounded overflow-hidden shadow-lg">
				<div className="relative">
					{
						book.rented ?
						<RentedIndicator rentedDaysLeft={book.rentedDaysLeft}></RentedIndicator>
						: ''
					}

					<img className="w-full h-56" src={book.image} alt="Book image" />
				</div>
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">{book.name}</div>
					<i className="font-bold text-xl mb-2">{book.author}</i>
					<p className="text-gray-700 text-base">Published year: {book.publishedYear}</p>
					<p className="text-gray-700 text-base">ISBN 10: {book.isbn10}</p>
					<p className="text-gray-700 text-base">ISBN 13: {book.isbn13}</p>
					<p className="text-gray-700 text-base mt-3">{book.synopsis}</p>
				</div>
				<div className="px-6 pt-4 pb-2">
					<Genre genre={book.genre}/>
				</div>
				<Link to={`/book/${book.id}`} className="h-12 w-full flex justify-center items-center bg-blue-500 text-gray-50 font-semibold uppercase hover:bg-blue-400 hover:text-white">
					View More
				</Link>
			</div>
		</div>
	);
}

export default BookCard;
