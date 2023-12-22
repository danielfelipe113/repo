import { useState, FormEvent } from 'react';
import './ContactPage.css';

const ContactPage = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		// Handle form submission logic here
		console.log({ name, email, message });
	};

	return (
		<div className="contact">
			<form className="contact__form" onSubmit={handleSubmit}>
				<div className="contact__field">
					<label htmlFor="name" className="contact__label">Name:</label>
					<input
						type="text"
						id="name"
						className="contact__input"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="contact__field">
					<label htmlFor="email" className="contact__label">Email:</label>
					<input
						type="email"
						id="email"
						className="contact__input"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="contact__field">
					<label htmlFor="message" className="contact__label">Message:</label>
					<textarea
						id="message"
						className="contact__textarea"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
				<button type="submit" className="contact__submit">Send</button>
			</form>
		</div>
	);
};

export default ContactPage;
