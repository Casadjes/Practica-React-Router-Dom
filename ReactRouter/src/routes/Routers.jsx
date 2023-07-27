import { Routes, Route } from "react-router-dom";
import { Sports } from "../pages/Sports";
import { Home } from "../pages/Home";
import { Live } from "../pages/Live";
import { Weather } from "../pages/Weather";
import { News } from "../pages/News";

export const Routers = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			{/* <Route path='/home' element={<Home />} /> */}
			<Route path='/live' element={<Live />} />
			<Route path='/news' element={<News />} />
			<Route path='/weather' element={<Weather />} />
			<Route path='/sports' element={<Sports />} />
		</Routes>
	);
};
