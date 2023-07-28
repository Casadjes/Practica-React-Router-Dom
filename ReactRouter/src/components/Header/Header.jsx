import { Navbar } from "../Navbar/Navbar";

export const Header = ({ user, login, logout }) => {
	return <Navbar user={user} login={login} logout={logout} />;
};
