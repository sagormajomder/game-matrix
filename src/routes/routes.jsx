import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import GamesPage from "../pages/GamesPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ProfileUpdatePage from "./../pages/ProfileUpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: async () => fetch("../games.json"),
      },
      {
        path: "/games",
        Component: GamesPage,
      },
      {
        path: "/game-details/:id",
        Component: GamesPage,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/update-profile",
        element: <ProfileUpdatePage />,
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
