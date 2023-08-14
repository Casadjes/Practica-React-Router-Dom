import Layout from "./Layout/Layout";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoutes } from "./components/ProtectedRoutes/ProtectedRoutes";
import { GlobalState } from "./context/GlobalState";
import NotFoundPage from "./pages/NotFoundPage";

const Home = lazy(() => import("./pages/Home"));
const News = lazy(() => import("./pages/News"));
const Weather = lazy(() => import("./pages/Weather"));
const Sports = lazy(() => import("./pages/Sports"));
const UserProfile = lazy(() => import("./pages/UserProfile"));

function App() {
	const routes = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{ index: true, element: <Home /> },
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
						<ProtectedRoutes>
							<UserProfile />
						</ProtectedRoutes>
					)
				},
				{
					path: "*",
					element: <NotFoundPage />
				}
			]
		}
	]);

	return (
		<>
			<GlobalState>
				<RouterProvider router={routes} />
			</GlobalState>
		</>
	);
}

export default App;
