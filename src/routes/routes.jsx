import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import GamesPage from "../pages/GamesPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
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
      {
        path: "/games",
        Component: GamesPage,
      },
    ],
  },
]);

export default router;
