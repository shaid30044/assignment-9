import { Link, NavLink } from "react-router-dom";
import { BiSearch, BiLogInCircle } from "react-icons/bi";
import { LuSearchX } from "react-icons/lu";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="flex justify-between md:items-center md:backdrop-blur-md md:bg-black/10 md:py-2 lg:py-4 px-4 md:px-10 lg:px-32">
      <div className="flex items-center gap-4">
        <button className="md:hidden">
          {menuOpen ? (
            <div className="flex flex-col items-start">
              <button
                onClick={toggleMenu}
                className="btn btn-ghost text-white text-xl hover:text-color1 bg-transparent hover:bg-transparent px-0 py-0"
              >
                <RxCross2 />
              </button>
              <ul className="absolute top-12 flex flex-col gap-4 text-white text-sm font-medium backdrop-blur-md bg-white/10 rounded-lg px-6 py-4">
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
                    to="/cart"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "underline underline-offset-8 decoration-4 text-color1"
                        : ""
                    }
                  >
                    Cart
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
        </button>
        <ul className="hidden md:flex items-center gap-10 text-white lg:text-lg font-medium">
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
              to="/cart"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline underline-offset-8 decoration-4 text-color1"
                  : ""
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-3 md:gap-6">
        <div className="text-xl text-white">
          <div className="">
            {searchOpen ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <input
                    type="search"
                    name="search"
                    placeholder="Search your Category here..."
                    className="rounded-l-full backdrop-blur-md bg-white/20 text-white text-sm md:text-base font-light focus:outline-none w-60 md:w-[260px] lg:w-96 px-4 py-1 md:pl-5 lg:px-6 md:py-1.5 lg:py-2"
                  />
                  <button className="text-xl md:text-2xl text-white bg-color1 hover:bg-color1 rounded-r-full focus:outline-none px-2.5 md:px-3 lg:px-4 py-1 md:py-1.5 lg:py-2">
                    <BiSearch />
                  </button>
                </div>
                <button
                  onClick={toggleSearch}
                  className="btn btn-ghost text-xl md:text-2xl text-white hover:text-color1 bg-transparent hover:bg-transparent px-0 py-0"
                >
                  <LuSearchX />
                </button>
              </div>
            ) : (
              <button
                onClick={toggleSearch}
                className=" btn btn-ghost text-xl md:text-2xl text-white hover:text-color1 bg-transparent hover:bg-transparent px-0 py-0"
              >
                <BiSearch />
              </button>
            )}
          </div>
        </div>
        <Link>
          <button className="hidden md:flex items-center btn btn-ghost normal-case rounded-lg lg:text-lg text-white hover:text-black bg-color1 hover:bg-color1">
            Login{" "}
            <span className="text-xl lg:text-2xl">
              <BiLogInCircle />
            </span>
          </button>
          <button className="md:hidden btn btn-ghost text-xl text-white hover:text-color1 bg-transparent hover:bg-transparent px-0 py-0">
            <BiLogInCircle />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
