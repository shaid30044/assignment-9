import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li className="text">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-" : ""
            }
          >
            Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
