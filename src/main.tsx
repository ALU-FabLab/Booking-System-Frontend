import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { element } from "./Router/MainRoutes";
import IsLoading from "./Pages/isLoading/IsLoading";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<IsLoading />}>
      <RouterProvider router={element} />
    </Suspense>
  </React.StrictMode>
);
