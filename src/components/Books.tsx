import { Book } from "../Models/Book.model";
import BookCard from "./BookCard";

interface LayoutProps {
	books: Book[];
}

const Books = ({books}: LayoutProps) => {
	return (
		<div className="flex flex-wrap justify-center">
			{books.map((book) => (
					<BookCard book={book} key={book.id}/>
			))}
		</div>
	)
}

export default Books
