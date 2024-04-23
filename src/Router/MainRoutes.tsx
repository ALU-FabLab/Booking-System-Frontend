import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
// import HomeLayout from "../layout/HomeLayout";
import SigninLayout from "../layout/SigninLayout";
import SignupLayout from "../layout/SignupLayout";
import HomeLayout from "../layout/HomeLayout";

const HomeComp = lazy(() => import("../Pages/Homepage/HomeComp"));
const Signup = lazy(() => import("../Pages/Auth/Signup"));
const Signin = lazy(() => import("../Pages/Auth/Signin"));

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeComp />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SigninLayout />,
    children: [
      {
        index: true,
        element: <Signin />,
      },
    ],
  },

  {
    path: "/signup",
    element: <SignupLayout />,
    children: [
      {
        index: true,
        element: <Signup />,
      },
    ],
  },
]);
