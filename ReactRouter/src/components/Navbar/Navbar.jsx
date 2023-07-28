import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = ({ user, login, logout }) => {
	const [isOpen, setisOpen] = useState(false);

	return (
		<nav className='relative bg-[#00144e] shadow'>
			<div className='container px-6 py-4 mx-auto'>
				<div className='lg:flex lg:items-center lg:justify-between'>
					<div className='flex items-center justify-between'>
						<Link to={"/"}>
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
						</Link>
						{/* <!-- Mobile menu button --> */}
						<div className='flex lg:hidden'>
							<button
								type='button'
								className='text-[#f3f3f3]  hover:text-gray-300  focus:outline-none'
								onClick={() => setisOpen(!isOpen)}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth='2'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M4 8h16M4 16h16'
									/>
								</svg>

								<svg
									xmlns='http://www.w3.org/2000/svg'
									className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth='2'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>
					</div>

					{/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
					<div
						className={`absolute top-[74px] shadow-md inset-x-0 z-20 w-full px-6 py-6 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
							isOpen ? "translate-x-0" : "-translate-x-full"
						}`}>
						<div className='flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8'>
							<NavLink
								to={"/live"}
								className='font-bold text-xl px-3 py-1 mx-3 mt-2 text-[#00144e] lg:text-[#f3f3f3] transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100 hover:text-[#00144e]'>
								Live
							</NavLink>
							<NavLink
								to={"/news"}
								className='font-bold text-xl px-3 py-1 mx-3 mt-2 text-[#00144e] lg:text-[#f3f3f3] transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 hover:text-[#00144e]'>
								News
							</NavLink>
							<NavLink
								to={"/weather"}
								className='font-bold text-xl px-3 py-1 mx-3 mt-2 text-[#00144e] lg:text-[#f3f3f3] transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 hover:text-[#00144e]'>
								Weather
							</NavLink>
							<NavLink
								to={"/sports"}
								className='font-bold text-xl px-3 py-1 mx-3 mt-2 text-[#00144e] lg:text-[#f3f3f3] transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 hover:text-[#00144e] '>
								Sports
							</NavLink>
							<NavLink
								to={"/profile"}
								className='font-bold text-xl px-3 py-1 mx-3 mt-2 text-[#00144e] lg:text-[#f3f3f3] transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 hover:text-[#00144e] '>
								Profile
							</NavLink>
						</div>

						{/* input */}

						<div className='relative mt-4 md:mt-0'>
							<span className='absolute inset-y-0 left-0 flex items-center pl-3'>
								<svg
									className='w-5 h-5 text-gray-400'
									viewBox='0 0 24 24'
									fill='none'>
									<path
										d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'></path>
								</svg>
							</span>

							<input
								type='text'
								className='w-full py-2 pl-10 pr-4 text-gray-700 bg-[#f3f3f3] border rounded-lg  focus:border-blue-200  focus:outline-none focus:ring focus:ring-opacity-45 focus:ring-blue-300'
								placeholder='Search'
							/>
						</div>

						{/* user status and profile */}
						{user ? (
							<button
								className='px-4 py-1  bg-blue-500 rounded-lg lg:ml-4'
								onClick={logout}>
								<span className='text-white font-semibold text-lg'>LogOut</span>
							</button>
						) : (
							<button
								className='px-4 py-1  bg-blue-500 rounded-lg lg:ml-4'
								onClick={login}>
								<span className='text-white font-semibold text-lg'>LogIn</span>
							</button>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};
