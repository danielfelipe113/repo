
import { Link } from 'react-router-dom';
import './HomePage.css'; // Make sure you have this CSS file

const HomePage = () => {
  

	return (
		<div className="home">
			<header className="home__header">
				<h1>Welcome to Hot Chili Library</h1>
			</header>

			<div className="flex justify-center">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/books">Books</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>

			</div>
			
		</div>
	);
};

export default HomePage;
