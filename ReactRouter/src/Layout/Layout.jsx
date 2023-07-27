import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Routers } from "../routes/Routers";

export const Layout = () => {
	return (
		<>
			<Header />
			<main className='w-full h-screen'>
				<Routers />
			</main>
			<Footer />
		</>
	);
};
