import { Outlet } from "react-router-dom";
import { Header } from "../Components";
const SignupLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default SignupLayout;
