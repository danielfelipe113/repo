import Books from "./../components/Books";
import NoResults from "./../components/NoResults";
import Filter from "./../components/Filter";
import useSearchBooks from "./../hooks/useSearchBooks";
import { useEffect, useState } from "react";

function BooksPage() {
	const { books, filter } = useSearchBooks();

	const [isRentedOnly, setIsRentedOnly] = useState(false)

	useEffect(() => {
		if(isRentedOnly) {
			filter('"rented":true');
		} else {
			filter('');
		}
	}, [isRentedOnly]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		filter(event.target.value);
	};

	return (
		<div className="flex flex-col">
			<div className="mb-5">
				<Filter handleChange={handleChange} />
				<div className="flex items-center mt-2 select-none">
					<input 
						id="rentedOnly" 
						type="checkbox" 
						checked={isRentedOnly} 
						onChange={(e) => setIsRentedOnly(e.target.checked)}
						className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
					/>
					<label htmlFor="rentedOnly" className="ml-2 block text-sm text-gray-700">
						Rented Only?
					</label>
				</div>
			</div>
			{books.length ? <Books books={books}></Books> : <NoResults/>}
		</div>
	);
}

export default BooksPage;
