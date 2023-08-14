import { RiErrorWarningLine } from "react-icons/ri";

export const NoImageFromApi = () => {
	return (
		<div className='flex items-center justify-center gap-2 w-96 sm:w-52 bg-gray-400/20 h-32 uppercase text-gray-600'>
			<RiErrorWarningLine className='text-md' />{" "}
			<span className='text-xs'>no image</span>
		</div>
	);
};
