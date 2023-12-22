interface LayoutProps {

}

const Header = ({}: LayoutProps) => {
	return (
		<header className="bg-red-500 py-4 px-2">
			<div className="container mx-auto flex items-center justify-between">
				
				<a href="/"  className="text-white text-2xl font-semibold">
					<span className="text-yellow-300">Hot Chili</span> Library
				</a>
				
				
				<nav className="space-x-4">
					<a href="/" className="text-white hover:text-yellow-300 transition duration-300">Home</a>
					<a href="/books" className="text-white hover:text-yellow-300 transition duration-300">Books</a>
					<a href="/contact" className="text-white hover:text-yellow-300 transition duration-300">Contact</a>
				</nav>
			</div>
		</header>
	);
}

export default Header;