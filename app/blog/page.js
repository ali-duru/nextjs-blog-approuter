import { getPostList } from '../../lib/posts';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import PostList from '../../components/PostList';

export const metadata = {
	title: 'Blog',
	description: 'Eğitimde Son Gelişmeleri Okuyun',
};

export default async function BlogHome({ params }) {
	const initialPosts = await getPostList();

	return (
		<>
			<div className="h-[35vh] min-h-[20rem] bg-slate-950 relative">
				<div className="absolute bg-slate-900 inset-0 z-0 opacity-40"></div>

				<div className="container lg:max-w-4xl mx-auto">
					<SiteHeader className="header-blog-home z-10 relative" />
				</div>

				<h1 className="text-6xl text-center text-slate-100 relative z-10 py-8">
					BLOG
				</h1>

				<p className="relative z-10 text-center text-slate-200 text-2xl">
					Son Gelişmelerden Haberdar Olun
				</p>
			</div>
			<PostList initialPosts={initialPosts} />
			<SiteFooter />
		</>
	);
}
