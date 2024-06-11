'use client';
import { useState } from 'react';

export default function CommentForm({ postId }) {
	const [submitStatus, setSubmitStatus] = useState(false);
	const [responseMessage, setResponseMessage] = useState('');
	const [alertColor, setAlertColor] = useState('');

	const handleSubmit = async function (event) {
		event.preventDefault();

		setSubmitStatus(true);
		setResponseMessage('Yorumunuz gönderildi...');
		setAlertColor('bg-yellow-500');

		let data = {
			author: event.target.author.value,
			authorEmail: event.target.authorEmail.value,
			content: event.target.content.value.replace(/\n/g, '\\n'),
			postId: event.target.postId.value,
		};

		const jsonData = JSON.stringify(data);

		const response = await fetch('/api/comment', {
			method: 'POST',
			body: jsonData,
		});

		const result = await response.json();

		console.log(result);

		setSubmitStatus(true);
		setResponseMessage(result.message);

		if (response.ok) {
			setAlertColor('bg-green-500');
		} else {
			setAlertColor('bg-red-500');
		}
	};
	return (
		<>
			<h3 className="text-2xl pb-4 mb-4 border-b">
				Düşüncenizi Paylaşın:
			</h3>
			<form className="comment-form" onSubmit={handleSubmit}>
				<label htmlFor="author">İsim Soyisim:</label>
				<input type="text" id="author" name="author" />

				<label htmlFor="authorEmail">E-mail:</label>
				<input type="email" id="authorEmail" name="authorEmail" />

				<label htmlFor="content">Mesajınız:</label>
				<textarea name="content" id="content"></textarea>

				<input type="hidden" name="postId" id="postId" value={postId} />

				<button type="submit">Gönder</button>
			</form>

			{submitStatus && (
				<div
					className={`${alertColor} py-2 px-4 mt-4 text-slate-100 rounded-md`}
				>
					{responseMessage}
				</div>
			)}
		</>
	);
}
