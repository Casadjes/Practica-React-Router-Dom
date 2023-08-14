export const Footer = () => {
	return (
		<>
			<footer className='bg-[#00144e] '>
				<div className='container px-6 py-12 mx-auto'>
					<div className='md:flex md:-mx-3 md:items-center md:justify-between'>
						<h1 className='text-xl font-semibold tracking-tight text-[#f3f3f3] md:mx-3 xl:text-2xl '>
							Subscribe our newsletter to get update.
						</h1>

						<div className='mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto'>
							<a className='inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-blue-500 rounded-lg gap-x-3 hover:bg-blue-600 focus:ring focus:ring-gray-300 focus:ring-opacity-80'>
								<span>Sign Up Now</span>

								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='w-5 h-5'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
									/>
								</svg>
							</a>
						</div>
					</div>

					<hr className='my-6 border-gray-200 md:my-10 ' />

					<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
						<div>
							<p className='font-semibold text-[#f3f3f3] '>Quick Link</p>

							<div className='flex flex-col items-start mt-5 space-y-2'>
								<a className='text-[#f3f3f3] transition-colors duration-300  hover:underline hover:text-blue-300'>
									Home
								</a>
								<a className='text-[#f3f3f3] transition-colors duration-300  hover:underline hover:text-blue-300'>
									Who We Are
								</a>
								<a className='text-[#f3f3f3] transition-colors duration-300  hover:underline hover:text-blue-300'>
									Our Philosophy
								</a>
							</div>
						</div>

						<div>
							<p className='font-semibold text-[#f3f3f3] '>Industries</p>

							<div className='flex flex-col items-start mt-5 space-y-2'>
								<a className='text-[#f3f3f3] transition-colors duration-300  hover:underline hover:text-blue-300'>
									Retail & E-Commerce
								</a>
								<a className='text-[#f3f3f3] transition-colors duration-300  hover:underline hover:text-blue-300'>
									Information Technology
								</a>
								<a className='text-[#f3f3f3] transition-colors duration-300  hover:underline hover:text-blue-300'>
									Finance & Insurance
								</a>
							</div>
						</div>

						<div>
							<p className='font-semibold text-[#f3f3f3] '>Services</p>

							<div className='flex flex-col items-start mt-5 space-y-2'>
								<a className='text-[#f3f3f3] transition-colors duration-300  hover:underline hover:text-blue-300'>
									Translation
								</a>
								<a className='text-[#f3f3f3] transition-colors duration-300  hover:underline hover:text-blue-300'>
									Proofreading & Editing
								</a>
								<a className='text-[#f3f3f3] transition-colors duration-300 -400 hover:underline hover:text-blue-300'>
									Content Creation
								</a>
							</div>
						</div>

						<div>
							<p className='font-semibold text-[#f3f3f3] '>Contact Us</p>

							<div className='flex flex-col items-start mt-5 space-y-2'>
								<a className='text-[#f3f3f3] transition-colors duration-300   hover:underline hover:text-blue-300'>
									+880 768 473 4978
								</a>
								<a className='text-[#f3f3f3] transition-colors duration-300 dark:text-gray-300  hover:underline hover:text-blue-300'>
									breaknews@info.com
								</a>
							</div>
						</div>
					</div>

					<hr className='my-6 border-gray-200 md:my-10' />

					<div className='flex flex-col items-center justify-between sm:flex-row'>
						<div className='flex items-center'>
							<img
								width='60'
								height='60'
								src='https://img.icons8.com/ios-glyphs/60/ffffff/apple-news.png'
								alt='apple-news'
								className='w-10'
							/>
							<h1 className='pl-2 text-2xl text-[#f3f3f3] font-bold'>
								Breaking News
							</h1>
						</div>

						<p className='mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300'>
							© Copyright 2023. All Rights Reserved.
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};
