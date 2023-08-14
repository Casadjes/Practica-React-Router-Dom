import { counterContext } from "../../context/counterContext";
import { useContext } from "react";
import { RiFilter3Line, RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
	const { isClickedSearch, handleSetSearchBar, setSearchBarInputValue } =
		useContext(counterContext);
	const navigate = useNavigate();

	function handleSendDataToApi(event) {
		event.preventDefault();
		const searchInput = event.target.searchInput.value;
		setSearchBarInputValue(searchInput);
		navigate("/");
	}

	return (
		<>
			<form
				className={`absolute transition-all -translate-y-full w-full flex justify-around bg-white shadow-lg shadow-gray-500/10 py-3 ${
					isClickedSearch ? "translate-y-0" : ""
				}`}
				onSubmit={handleSendDataToApi}>
				<i
					className='absolute top-1/2  right-3 transform  -translate-y-1/2 text-gray-700 text-2xl cursor-pointer'
					onClick={handleSetSearchBar}>
					<RiCloseLine />
				</i>
				{/* Filter */}
				<div className='flex gap-1 px-5 py-1 bg-stone-400/25  font-semibold rounded-lg text-gray-700'>
					<RiFilter3Line className='text-2xl' />
					<span>Filter</span>
				</div>

				{/* searchBar */}
				<div className='flex gap-3'>
					<input
						type='text'
						className='block placeholder-gray-400/70 rounded-lg border border-gray-200 bg-[#f3f3f3] px-5 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
						name='searchInput'
					/>
					<button className='px-5 py-1 bg-blue-500 font-semibold rounded-lg text-[#f3f3f3]'>
						search
					</button>
				</div>
			</form>
		</>
	);
};
