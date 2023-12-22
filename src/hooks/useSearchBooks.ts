import { useEffect, useState } from "react"
import { Book } from "../Models/Book.model"

const useSearchBooks = () => {

	const [books, setBooks] = useState<Book[]>([])
	const [allBooks, setAllBooks] = useState<Book[]>([])
	const [genres, setGenres] = useState<string[]>([])

	useEffect(() => {
		fetch("/books.json")
		.then((data => data.json()))
		.then(result => {
			setBooks(result.books)
			setAllBooks(result.books)
			extractGenres(result.books)
		})
	}, [])

	const extractGenres = (books: Book[]):void => {
		const genresSet = new Set<string>();
	
		books.forEach(book => {
			if (book.genre) {
				genresSet.add(book.genre);
			}
		});
	
		setGenres(Array.from(genresSet))
	}

	const getById = (id: number): Book | undefined => {
		return allBooks.find((b: Book) => b.id === id);
	}

	const getIdxById = (id: number): number => {
		return allBooks.findIndex((b: Book) => b.id === id);
	}

	const rent = (id: number): boolean => {
		const bookIdx = getIdxById(id);
		if(bookIdx !== -1) {
			const updatedBooks = allBooks.map((book, index) => {
				if (index === bookIdx) {
					return { ...book, rented: true };
				}
				return book;
			});
			setAllBooks(updatedBooks);
			return true;
		}
		return false;
	}

	const filter = (searchTerm: string):void  => {
		const lowerCaseSearchTerm = searchTerm.toLowerCase();
		const filteredBooks = allBooks.filter(book => {
			return JSON.stringify(book).toLowerCase().includes(lowerCaseSearchTerm)
		});
		setBooks(filteredBooks)
		extractGenres(books)
	}

	const reset = ():void => {
		setBooks(allBooks)
	}

	return {
		books,
		filter,
		reset,
		genres,
		getById,
		rent
	}
}

export default useSearchBooks