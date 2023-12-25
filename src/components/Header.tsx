interface LayoutProps {

}

const Header = ({}: LayoutProps) => {
	return (
		<header className="bg-red-500 py-4 px-2">
			<div className="container mx-auto flex items-center justify-between">
				
				<a href="/"  className="text-white text-2xl font-semibold">
					<span className="text-yellow-300">Hot Chili</span> Library
				</a>
			</div>
		</header>
	);
}

export default Header;