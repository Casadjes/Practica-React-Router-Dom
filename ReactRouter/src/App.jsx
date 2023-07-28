import Layout from "./Layout/Layout";
import { lazy, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Live = lazy(() => import("./pages/Live"));
const News = lazy(() => import("./pages/News"));
const Weather = lazy(() => import("./pages/Weather"));
const Sports = lazy(() => import("./pages/Sports"));
const UserProfile = lazy(() => import("./pages/UserProfile"));

// import { Home } from "./pages/Home";
// import { Live } from "./pages/Live";
// import { News } from "./pages/News";
// import { Weather } from "./pages/Weather";
// import { Sports } from "./pages/Sports";
// import { UserProfile } from "./pages/UserProfile";
import { ProtectedRoutes } from "./components/ProtectedRoutes/ProtectedRoutes";

function App() {
	const [user, setUser] = useState(null);

	const routes = createBrowserRouter([
		{
			path: "/",
			element: <Layout user={user} login={login} logout={logout} />,
			children: [
				{ index: true, element: <Home /> },
				{
					path: "/live",
					element: <Live />
				},
				{
					path: "/news",
					element: <News />
				},
				{
					path: "/weather",
					element: <Weather />
				},
				{
					path: "/sports",
					element: <Sports />
				},
				{
					path: "/profile",
					element: (
						<ProtectedRoutes user={user}>
							<UserProfile />
						</ProtectedRoutes>
					)
				}
			]
		}
	]);

	function login() {
		setUser(true);
	}

	function logout() {
		setUser(null);
	}

	return (
		<>
			<RouterProvider router={routes} />
		</>
	);
}

export default App;
