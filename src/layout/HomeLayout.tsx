import { Outlet } from "react-router-dom";
import { Footer, Header } from "../Components";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
