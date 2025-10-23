import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import GamePage from "../Pages/GamePage";
import AppsPage from "../Pages/AppsPage";
import InstalledPage from "../Pages/InstalledPage";
import GameDetails from "../Pages/GameDetails";
import AppsDetails from "../Pages/AppsDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/games',
                element: <GamePage/>
            },
            {
                path: '/game/:id',
                element: <GameDetails/>
            },
            {
                path: '/apps',
                element: <AppsPage/>
            },
            {
                path: '/apps/:id', // Add new route for AppsDetails
                element: <AppsDetails/>
            },
            {
                path: '/installed',
                element: <InstalledPage/>
            },
        ]
    }
])

export default router;