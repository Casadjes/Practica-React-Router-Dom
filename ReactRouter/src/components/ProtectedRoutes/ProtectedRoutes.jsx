import { Navigate } from "react-router-dom";
import { counterContext } from "../../context/counterContext";
import { useContext } from "react";

export const ProtectedRoutes = ({ children }) => {
	const { user } = useContext(counterContext);
	if (!user) {
		return <Navigate to={"/"} />;
	}

	return children;
};
