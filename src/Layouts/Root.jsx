import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div className="font-poppins">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
