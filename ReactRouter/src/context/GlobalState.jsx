import { useState } from "react";
import { counterContext } from "./counterContext";

export const GlobalState = ({ children }) => {
	const [user, setUser] = useState(false);

	function login() {
		setUser(!user);
	}

	return (
		<counterContext.Provider value={{ user, login }}>
			{children}
		</counterContext.Provider>
	);
};
