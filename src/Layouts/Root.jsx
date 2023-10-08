import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-garamond">
      <Outlet />
    </div>
  );
};

export default Root;
