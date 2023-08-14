import { NavLink, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { counterContext } from "../../context/counterContext";
import profileImg from "../../assets/profileImg.webp";
import { RiUser3Fill, RiSettings4Fill, RiSearchEyeLine } from "react-icons/ri";

export const Navbar = () => {
	const [isOpen, setisOpen] = useState(false);
	const [isOver, setIsOver] = useState(false);
	const { user, login, handleSetSearchBar } = useContext(counterContext);

	return (
		<nav className='relative z-10 bg-[#00144e] shadow'>
			<div className='container px-6 py-4 mx-auto'>
				<div className='lg:flex lg:items-center '>
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
						className={`absolute top-[74px] flex-1 shadow-md inset-x-0 z-20 w-full px-6 py-6 transition-all duration-300 ease-in-out bg-white lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between ${
							isOpen ? "translate-x-0" : "-translate-x-full"
						}`}>
						<div className='flex flex-1 -mx-6 lg:-mx-0 font-semibold '>
							{/* links */}
							<div className='flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-center'>
								<NavLink
									to={"/news"}
									className=' text-xl px-3 py-1 mx-3 mt-2 text-[#00144e] lg:text-[#f3f3f3] transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 hover:text-[#00144e]'>
									News
								</NavLink>
								<NavLink
									to={"/weather"}
									className=' text-xl px-3 py-1 mx-3 mt-2 text-[#00144e] lg:text-[#f3f3f3] transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 hover:text-[#00144e]'>
									Weather
								</NavLink>
								<NavLink
									to={"/sports"}
									className='text-xl px-3 py-1 mx-3 mt-2 text-[#00144e] lg:text-[#f3f3f3] transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 hover:text-[#00144e] '>
									Sports
								</NavLink>
								<NavLink
									to={"/profile"}
									className='text-xl px-3 py-1 mx-3 mt-2 text-[#00144e]  transition-colors duration-300 transform rounded-md lg:hidden hover:bg-gray-100 hover:text-[#00144e] '>
									Profile
								</NavLink>
							</div>

							{/* search button */}
							<button
								className='hidden mr-0 lg:block lg:mr-8'
								title='search'
								onClick={handleSetSearchBar}>
								<RiSearchEyeLine className='text-[#f3f3f3] text-2xl' />
							</button>
						</div>

						{/* user status and profile */}
						{user ? (
							<div className='relative w-auto flex items-center mt-5  lg:mt-0'>
								{/* user img */}
								<button
									className='hidden w-10 h-10 rounded-full lg:block lg:ml-4'
									onClick={() => setIsOver(!isOver)}
									title='user'>
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
											title='user image'
										/>
										<p title='name'>Lucas L.</p>
									</div>

									{/* navegation*/}
									<div className='h-1/2 w-full flex flex-col'>
										<p className='flex items-center gap-2 text-gray-700 w-full px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer'>
											<RiSettings4Fill />
											Settings
										</p>
										<NavLink
											to={"/profile"}
											className='flex items-center gap-2 text-gray-700 w-full px-4 py-2  rounded-md hover:bg-gray-100'>
											<RiUser3Fill /> Profile
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
