import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import Link from 'next/link';

export const metadata = {
	title: 'Bilgi Evde',
	description: 'Eğitim Alanında Bir Numara',
};

export default function Home() {
	return (
		<>
			{/* bg-[url('/home.jpg')] */}
			<div className="min-h-screen bg-slate-950 relative">
				<div className="absolute bg-slate-900 inset-0 z-0 opacity-40"></div>
				<SiteHeader className="z-10 relative" />
				<main>
					<div className="min-h-[50vh] flex flex-col items-center justify-center z-10 relative">
						<h1 className="text-6xl text-center text-slate-100">
							<span className="text-yellow-400">Bilgi Evde</span>{' '}
							Blog sitesine hoşgeldiniz.
						</h1>
						<div className="mt-20">
							<Link
								href="/blog"
								className="text-2xl text-slate-100 border-slate-100 border-2 rounded-md py-3 px-4 hover:bg-yellow-300 hover:text-slate-800 hover:border-yellow-300 transition"
							>
								Blogları Okuyun
							</Link>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}
