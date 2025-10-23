import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import GamePage from "../Pages/GamePage";
import AppsPage from "../Pages/AppsPage";
import InstalledPage from "../Pages/InstalledPage";

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
                path: '/apps',
                element: <AppsPage/>
            },
            {
                path: '/installed',
                element: <InstalledPage/>
            },
        ]
    }
])

export default router;