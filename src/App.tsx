import { RouterProvider } from "react-router-dom";
import { DesktopRouter } from "./Routes/MainRoutes";

const App = () => {
  return (
    <div>
      <RouterProvider router={DesktopRouter} />
    </div>
  );
};

export default App;
