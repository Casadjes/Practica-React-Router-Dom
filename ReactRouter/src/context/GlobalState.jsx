import { useState } from "react";
import { counterContext } from "./counterContext";
import PropTypes from "prop-types";

export const GlobalState = ({ children }) => {
	const [user, setUser] = useState(false);
	const [isClickedSearch, setIsClickedSearch] = useState(false);
	const [searchBarInputValue, setSearchBarInputValue] = useState("");

	function login() {
		setUser(!user);
	}
	function handleSetSearchBar() {
		setIsClickedSearch(!isClickedSearch);
	}

	return (
		<counterContext.Provider
			value={{
				user,
				login,
				isClickedSearch,
				handleSetSearchBar,
				searchBarInputValue,
				setSearchBarInputValue
			}}>
			{children}
		</counterContext.Provider>
	);
};

GlobalState.propTypes = {
	children: PropTypes.any.isRequired
};
