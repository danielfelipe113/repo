import React from 'react'
import ReactDOM from 'react-dom/client'
import BooksPage from './pages/BooksPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import Header from './components/Header.tsx';
import './index.css'

import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import BookPage from './pages/BookPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import HomePage from './pages/HomePage.tsx';

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage></HomePage>,
	},
	{
		path: "/book/:bookId",
		element: <BookPage></BookPage>,
	},
	{
		path: "/books",
		element: <BooksPage></BooksPage>,
	},
	{
		path: "/contact",
		element: <ContactPage></ContactPage>,
	},
	{
		path: "*",
		element: <NotFoundPage></NotFoundPage>,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
			<div className="container">
				<Header/>
				<RouterProvider router={router} />
			</div>
		</React.StrictMode>
)
