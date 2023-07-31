import { NavLink, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { counterContext } from "../../context/counterContext";
import profileImg from "../../assets/profileImg.webp";

export const Navbar = () => {
	const [isOpen, setisOpen] = useState(false);
	const [isOver, setIsOver] = useState(false);
	const { user, login } = useContext(counterContext);

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
						className={`absolute top-[74px] shadow-md inset-x-0 z-20 w-full px-6 py-6 transition-all duration-300 ease-in-out bg-white lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
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
								className=' font-bold text-xl px-3 py-1 mx-3 mt-2 text-[#00144e]  transition-colors duration-300 transform rounded-md lg:hidden hover:bg-gray-100 hover:text-[#00144e] '>
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
							<div className='relative flex items-center mt-5 lg:mt-0'>
								<button
									className='hidden w-10 h-10 rounded-full lg:block lg:ml-4'
									onClick={() => setIsOver(!isOver)}>
									<img
										className='w-full h-full object-cover rounded-full'
										src={profileImg}
										alt='profile'
									/>
								</button>

								{/* boton mobile */}
								<button
									className='px-4 py-1  bg-blue-500 rounded-lg lg:hidden'
									onClick={login}>
									<span className='text-white font-semibold text-lg'>
										LogOut
									</span>
								</button>

								<div
									className={`${
										isOver ? "visible" : "invisible"
									} hidden lg:block fixed  w-64  top-16 right-0 rounded-md bg-white border p-4 shadow-md `}>
									{/* user img */}
									<div className='grid place-content-center place-items-center h-1/2 mb-5'>
										<img
											src={profileImg}
											className='w-20 h-20 rounded-full object-cover'
											alt='userImg'
										/>
										<p>Lucas L.</p>
									</div>

									{/* navegation*/}
									<div className='h-1/2 w-full flex flex-col'>
										<p className='text-gray-700 w-full px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer'>
											Settings
										</p>
										<NavLink
											to={"/profile"}
											className='text-gray-700 w-full px-4 py-2  rounded-md hover:bg-gray-100'>
											Profile
										</NavLink>

										<i className='w-[93%] h-[1px] mx-auto border block my-2'></i>
										<p
											onClick={login}
											className='text-gray-700 w-full px-4 py-2  rounded-md hover:bg-gray-100 cursor-pointer'>
											LogOut
										</p>
									</div>
								</div>
							</div>
						) : (
							<button
								className='px-4 py-1 mt-5 bg-blue-500 rounded-lg lg:mt-0 lg:ml-4'
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
