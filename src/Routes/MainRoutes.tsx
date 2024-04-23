import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Components/Layout/HomeLayout";
import HomeScreen from "../Pages/HomeScreen";

export const DesktopRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);
