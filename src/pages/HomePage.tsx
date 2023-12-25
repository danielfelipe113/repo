
import { Link } from 'react-router-dom';
import './HomePage.css'; // Make sure you have this CSS file

const HomePage = () => {
  

	return (
		<div className="home">
			<header className="home__header">
				<h1>Welcome to Hot Chili Library</h1>
			</header>

			<div className="home__content">
				<div className="home__link-card">
					<Link className="home__link-card__link" to="/">Home</Link>
				</div>
				<div className="home__link-card home__link-card--danger">
					<Link className="home__link-card__link" to="/books">Books</Link>
				</div>
				<div className="home__link-card">
					<Link className="home__link-card__link" to="/contact">Contact</Link>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
