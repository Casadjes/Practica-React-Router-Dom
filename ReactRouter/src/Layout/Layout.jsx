import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<Header />
			<main className='w-full min-h-screen px-4 lg:px-14 bg-[#f9f9f9]'>
				<Suspense fallback={<p>loading...</p>}>
					<Outlet />
				</Suspense>
			</main>
			<Footer />
		</>
	);
}

export default Layout;
