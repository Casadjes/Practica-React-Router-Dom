import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function Layout({ user, login, logout }) {
	return (
		<>
			<Header user={user} login={login} logout={logout} />
			<main className='w-full h-screen bg-[#f9f9f9]'>
				<Suspense fallback={<p>loading...</p>}>
					<Outlet />
				</Suspense>
			</main>
			<Footer />
		</>
	);
}

export default Layout;
