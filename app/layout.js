import '../styles/main.css';
export const metadata = {
	title: 'Bilgi Evde',
	description: 'Eğitim Alanında Bir Numara',
};

export default function RootLayout({ children }) {
	return (
		<html lang="tr">
			<body>{children}</body>
		</html>
	);
}
