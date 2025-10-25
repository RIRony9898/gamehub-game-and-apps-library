import { createBrowserRouter } from "react-router";
import PasswordChange from "../Components/ProfilePage/PasswordChange";
import ProfileUpdate from "../Components/ProfilePage/ProfileUpdate";
import RootLayout from "../Layouts/RootLayout";
import AppsDetails from "../Pages/AppsDetails";
import AppsPage from "../Pages/AppsPage";
import ErrorPage from "../Pages/ErrorPage";
import GameDetails from "../Pages/GameDetails";
import GamePage from "../Pages/GamePage";
import Home from "../Pages/Home";
import InstalledPage from "../Pages/InstalledPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UserProfile from "../Pages/UserProfile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/games",
        element: <GamePage />,
      },
      {
        path: "/game/:id",
        element: (
          <PrivateRoute>
            <GameDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/apps",
        element: <AppsPage />,
      },
      {
        path: "/apps/:id",
        element: (
          <PrivateRoute>
            <AppsDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/installed",
        element: (
          <PrivateRoute>
            <InstalledPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/passwordChange",
        element: (
          <PrivateRoute>
            <PasswordChange />
          </PrivateRoute>
        ),
      },
      {
        path: "/profileUpdate",
        element: (
          <PrivateRoute>
            <ProfileUpdate />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
