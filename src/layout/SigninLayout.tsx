import { Outlet } from "react-router-dom";
import { Header } from "../Components";

const SigninLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default SigninLayout;
