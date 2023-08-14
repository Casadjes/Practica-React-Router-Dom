import UserProfileImg from "../assets/profileImg.webp";
import { RiEditBoxFill } from "react-icons/ri";

const UserProfile = () => {
	return (
		<section className='grid w-full min-h-screen grid-cols-4 auto-rows-auto'>
			{/* user side */}
			<div className='col-span-4 md:col-span-1'>
				<div className='w-full h-full bg-stone-400/25 rounded-lg pb-5 px-3 pt-7 md:pt-3 md:pb-0 lg:pt-7 flex flex-col items-center gap-3 lg:px-7 '>
					<img
						src={UserProfileImg}
						className='w-52 h-52 rounded-full object-cover md:rounded-md lg:w-full lg:h-auto lg:max-h-60 '
						alt='userImg'
					/>
					<span className='text-lg font-semibold'>Lucas Lumierre</span>
				</div>
			</div>
			{/* user Information - TITLE */}
			<div className='px-3 col-span-4 md:col-start-2 md:col-span-3 lg:px-7'>
				{/* title + icon */}
				<div className='w-full flex justify-between items-end mb-10'>
					<h3 className='text-5xl font-bold text-gray-800'>My Profile</h3>
					<RiEditBoxFill
						className='text-gray-800 text-xl cursor-pointer'
						title='edit'
					/>
				</div>
				{/* user information - CONTAINER */}
				<form
					className='grid grid-cols-2 gap-5 mb-10 text-gray-700'
					aria-readonly>
					<div className='flex flex-col justify-around gap-y-4'>
						<div>
							<label htmlFor='' className='font-semibold'>
								FIRST NAME
							</label>
							<input
								className='w-full py-2 pl-2 text-lg bg-[#f3f3f3] border rounded-lg cursor-not-allowed'
								type='text'
								value={"Lucas"}
								disabled
							/>
						</div>

						<div>
							<label htmlFor='' className='font-semibold '>
								TIME ZONE
							</label>
							<select
								name=''
								id=''
								disabled
								className='w-full py-2 pl-2 text-lg text-gray-700 bg-[#f3f3f3] border rounded-lg  cursor-not-allowed'>
								<option value='GM10'>+5 GMT</option>
							</select>
						</div>
					</div>

					<div className='flex flex-col justify-around gap-y-4'>
						<div>
							<label htmlFor='' className='font-semibold '>
								LAST NAME
							</label>
							<input
								disabled
								className='w-full py-2 pl-2 bg-[#f3f3f3] border rounded-lg  cursor-not-allowed'
								type='text'
								value={"Lumierre"}
							/>
						</div>

						<div>
							<label htmlFor='' className='font-semibold '>
								PHONE
							</label>
							<input
								className='w-full py-2 pl-2  bg-[#f3f3f3] border rounded-lg  cursor-not-allowed'
								type='text'
								value={"000-000-0000"}
								disabled
							/>
						</div>
					</div>

					{/* email */}
					<div className='grid col-span-2'>
						<label htmlFor='' className='font-semibold '>
							EMAIL
						</label>
						<input
							type='text'
							disabled
							value={"example@gmail.com"}
							className='w-full py-2 pl-2 bg-[#f3f3f3] border rounded-lg  cursor-not-allowed'
						/>
					</div>
				</form>

				{/*  */}
				<section className='w-full flex flex-col gap-10'>
					{/* authentication */}
					<div className='w-full'>
						<h4 className='text-3xl font-semibold text-gray-700 mb-4'>
							Authentication
						</h4>
						{/* info no disponible */}
						<div className='w-full h-40 flex justify-center items-center border-2 rounded-md border-dashed border-blue-500'>
							<h5 className='text-blue-500 uppercase font-semibold'>
								not available
							</h5>
						</div>
					</div>

					{/* danger zone */}
					<div className='w-full'>
						<h4 className='text-3xl font-semibold text-gray-700 mb-4'>
							Danger Zone
						</h4>
						{/* info no disponible */}
						<div className='w-full h-40 flex justify-center items-center border-2 rounded-md border-dashed border-red-500'>
							<h5 className='text-red-500 uppercase font-semibold'>
								not available
							</h5>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};
export default UserProfile;
