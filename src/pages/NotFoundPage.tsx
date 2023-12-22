import { Link } from "react-router-dom";

interface LayoutProps {

}

const NotFoundPage = ({}: LayoutProps) => {
	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<div className="text-center">
				<h1 className="text-6xl font-bold text-gray-800">404</h1>
				<p className="my-6 text-xl text-gray-600">Page not found</p>
				<Link to="/" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Go Home
				</Link>
			</div>
		</div>
	);
}
export default NotFoundPage;