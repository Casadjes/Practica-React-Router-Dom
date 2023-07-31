import { useNewsApi } from "../hooks/useNewsApi";

const News = () => {
	const { data, isLoading } = useNewsApi();

	return (
		<section className='w-full min-h-screen grid grid-cols-4 auto-rows-auto'>
			{" "}
			{/* title */}
			<div className='w-full col-span-4 grid grid-cols-4 pb-6 pr-4 pt-5'>
				<div className='flex justify-between items-end col-start-1 col-span-3'>
					<div>
						<h3 className='text-5xl font-bold py-5 text-gray-800'>News</h3>
						<h4 className='text-xl font-semibold text-gray-700'>
							Latest Local News
						</h4>
					</div>
					<button className='text-xl font-semibold border-2 px-2 p-1 rounded-md text-[#00144e]'>
						View More
					</button>
				</div>
			</div>
			{/* main */}
			<section className=' pb-16 pr-4 col-span-4 lg:col-span-3 row-span-4 flex flex-wrap justify-between gap-y-5'>
				{data?.articles?.slice(0, 13).map((article) => (
					<article
						key={article.title}
						className='w-52 first-of-type:w-full first-of-type:text-4xl first-of-type:mb-8'>
						<img src={article.urlToImage} className='w-full' alt='image' />
						<h3 className=' text-[#00144e] font-semibold hover:underline'>
							<a href={article.url}>{article.title}</a>
						</h3>
					</article>
				))}
			</section>
			{/* aside */}
			<aside className='hidden row-span-4 col-start-4 lg:block'>
				<div className='bg-stone-400/25 flex flex-col gap-5 px-2'>
					<h3 className='text-2xl font-bold text-center text-gray-800'>
						Trending News
					</h3>
					{data?.articles?.slice(12, 20).map((article) => (
						<article
							key={article.title}
							className='flex justify-between gap-1 h-32 truncate break-words whitespace-normal'>
							<img
								src={article.urlToImage}
								className='w-1/2 h-20 border border-gray-500 shadow-md'
								alt='image'
							/>
							<h3 className=' text-[#00144e] font-semibold hover:underline'>
								<a href={article.url}>{article.title}</a>
							</h3>
						</article>
					))}
				</div>
			</aside>
		</section>
	);
};
export default News;
