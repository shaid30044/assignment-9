import { Link, NavLink } from "react-router-dom";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleUserInfoClick = () => {
    setShowUserInfo(!showUserInfo);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((error) => {
        toast.error("Logout failed. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.error(error);
      });
  };

  return (
    <div className="flex justify-between md:items-center backdrop-blur-md bg-black/10 md:py-2 lg:py-4 px-4 md:px-10 lg:px-32">
      <div className="flex items-center gap-4">
        <div className="md:hidden">
          {menuOpen ? (
            <div className="flex flex-col items-start">
              <button
                onClick={toggleMenu}
                className="btn btn-ghost text-white text-xl hover:text-color1 bg-transparent hover:bg-transparent px-0 py-0"
              >
                <RxCross2 />
              </button>
              <ul className="absolute top-12 flex flex-col gap-4 text-white text-sm font-medium bg-black/80 rounded-lg px-6 py-4">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "underline underline-offset-8 decoration-4 text-color1"
                        : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "underline underline-offset-8 decoration-4 text-color1"
                        : ""
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/favorites"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "underline underline-offset-8 decoration-4 text-color1"
                        : ""
                    }
                  >
                    Favorites
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/gallery"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "underline underline-offset-8 decoration-4 text-color1"
                        : ""
                    }
                  >
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "underline underline-offset-8 decoration-4 text-color1"
                        : ""
                    }
                  >
                    About Us
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <button
              onClick={toggleMenu}
              className="md:hidden btn btn-ghost text-white text-xl hover:text-color1 bg-transparent hover:bg-transparent px-0 py-0"
            >
              <HiOutlineMenuAlt1 />
            </button>
          )}
        </div>
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-white lg:text-lg font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline underline-offset-8 decoration-4 text-color1"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline underline-offset-8 decoration-4 text-color1"
                  : ""
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline underline-offset-8 decoration-4 text-color1"
                  : ""
              }
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline underline-offset-8 decoration-4 text-color1"
                  : ""
              }
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline underline-offset-8 decoration-4 text-color1"
                  : ""
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="relative">
        {user ? (
          <button
            onClick={handleUserInfoClick}
            className="cursor-pointer pt-2 md:pt-0"
          >
            <img
              src={user.photoURL}
              alt={`${user.displayName}'s profile`}
              className="w-8 lg:w-10 h-8 lg:h-10 rounded-full"
            />
          </button>
        ) : (
          <Link to="/login">
            <button className="hidden md:flex items-center btn btn-ghost normal-case rounded-lg lg:text-lg text-white bg-color1 hover:bg-color2 duration-300">
              Login{" "}
              <span className="text-xl lg:text-2xl">
                <BiLogInCircle />
              </span>
            </button>
            <button className="md:hidden btn btn-ghost text-xl text-white hover:text-color1 bg-transparent hover:bg-transparent px-0 py-0">
              <BiLogInCircle />
            </button>
          </Link>
        )}
        {showUserInfo && user && (
          <div className="absolute top-12 md:top-[45px] lg:top-[62px] right-0 bg-black/60 rounded-xl flex flex-col items-start text-white p-6">
            <span className="pb-2">{user.displayName}</span>
            <span>{user.email}</span>
            <button
              onClick={handleLogout}
              className="hidden md:flex items-center btn btn-ghost normal-case rounded-lg lg:text-lg text-white bg-color1 hover:bg-color2 duration-300 w-full mt-4"
            >
              Logout
              <span className="text-xl lg:text-2xl">
                <BiLogOutCircle />
              </span>
            </button>
            <button className="md:hidden btn btn-ghost text-xl text-white hover:text-color1 bg-transparent hover:bg-transparent px-0 py-0">
              <BiLogOutCircle />
            </button>
          </div>
        )}
      </div>
      <div className="absolute">
        <ToastContainer />
      </div>
    </div>
  );
};

export default Navbar;
