import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import GameDetailsPage from "../pages/GameDetailsPage";
import GamesPage from "../pages/GamesPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import Loader from "./../components/Loader";
import ProfileUpdatePage from "./../pages/ProfileUpdatePage";
import NoLoggedRoute from "./NoLoggedRoute";
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
        errorElement: <ErrorPage />,
        Component: GameDetailsPage,

        loader: async () => fetch("../games.json"),
      },
      {
        path: "/about",
        errorElement: <ErrorPage />,
        Component: AboutPage,
      },
      {
        path: "/contact",
        errorElement: <ErrorPage />,
        Component: ContactPage,
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
        element: (
          <NoLoggedRoute>
            <RegisterPage />
          </NoLoggedRoute>
        ),
      },
      {
        path: "auth/login",
        element: (
          <NoLoggedRoute>
            <LoginPage />
          </NoLoggedRoute>
        ),
      },
      {
        path: "auth/reset-password",
        element: (
          <NoLoggedRoute>
            <ResetPasswordPage />
          </NoLoggedRoute>
        ),
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;
