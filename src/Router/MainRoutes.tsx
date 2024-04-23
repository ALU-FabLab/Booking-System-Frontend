import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
// import HomeLayout from "../layout/HomeLayout";
import SigninLayout from "../layout/SigninLayout";
import SignupLayout from "../layout/SignupLayout";

// const HomeComp = lazy(() => import("../Pages/Homepage/"))
const Signup = lazy(() => import("../Pages/Auth/Signup"));
const Signin = lazy(() => import("../Pages/Auth/Signin"));

export const element = createBrowserRouter([
  {
    path: "/",
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
