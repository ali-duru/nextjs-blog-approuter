'use client';

import { useState } from 'react';

export default function ContactForm() {
	const [submitStatus, setSumbitStatus] = useState(false);
	const [responseMessage, setResponseMessage] = useState('');
	const [alertColor, setAlertColor] = useState('bg-green-500');

	const handleSubmit = async (event) => {
		event.preventDefault();

		const data = {
			firstName: event.target.firstName.value,
			email: event.target.email.value,
			message: event.target.message.value,
		};

		const jsonData = JSON.stringify(data);

		const response = await fetch('/api/form', {
			method: 'POST',
			body: jsonData,
		});

		const result = await response.json();

		setSumbitStatus(true);
		setResponseMessage(result.message);

		if (!response.ok) {
			setAlertColor('bg-red-500');
		} else {
			setAlertColor('bg-green-500');
		}
	};

	return (
		<section>
			<div className="container mx-auto lg:max-w-4xl">
				<h1 className="text-4xl text-center text-slate-700 py-8">
					İletişime Geçin
				</h1>
				<form className="contact-form" onSubmit={handleSubmit}>
					<label htmlFor="firstName">İsim Soyisim:</label>
					<input type="text" id="firstName" name="firstName" />

					<label htmlFor="email">E-mail:</label>
					<input type="email" id="email" name="email" />

					<label htmlFor="message">Mesajınız</label>
					<textarea name="message" id="message"></textarea>

					<button type="submit">Gönder</button>
				</form>
				{submitStatus ? (
					<SubmissionAlert
						message={responseMessage}
						alertColor={alertColor}
					/>
				) : null}
			</div>
		</section>
	);
}

const SubmissionAlert = ({ message, alertColor }) => {
	return (
		<div
			className={`${alertColor} py-2 px-4 mt-4 text-slate-100 rounded-md`}
		>
			{message}
		</div>
	);
};
