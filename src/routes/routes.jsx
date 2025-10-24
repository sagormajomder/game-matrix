import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import GameDetailsPage from "../pages/GameDetailsPage";
import GamesPage from "../pages/GamesPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import Loader from "./../components/Loader";
import ProfileUpdatePage from "./../pages/ProfileUpdatePage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <Loader />,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: async () => fetch("../games.json"),
      },
      {
        path: "/games",
        Component: GamesPage,
        loader: async () => fetch("../games.json"),
      },
      {
        path: "/game-details/:id",
        element: (
          <PrivateRoute>
            <GameDetailsPage />
          </PrivateRoute>
        ),

        loader: async () => fetch("../games.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <ProfileUpdatePage />
          </PrivateRoute>
        ),
      },
      // Auth
      {
        path: "auth/register",
        Component: RegisterPage,
      },
      {
        path: "auth/login",
        Component: LoginPage,
      },
      {
        path: "auth/reset-password",
        Component: ResetPasswordPage,
      },
    ],
  },
]);

export default router;
