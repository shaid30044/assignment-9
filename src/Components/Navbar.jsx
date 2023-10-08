import { Link, NavLink } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleEvents = () => {
    setEventsOpen(!eventsOpen);
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
                    to="/dashboard"
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
                  <div className="relative">
                    {eventsOpen ? (
                      <div>
                        <button
                          onClick={toggleEvents}
                          className="flex items-center gap-1"
                        >
                          Events <MdKeyboardArrowLeft />
                        </button>
                        <ul className="absolute left-20 top-0 bg-black/80 rounded-xl space-y-4 w-52 px-6 py-6">
                          <li>
                            <NavLink
                              to="/games"
                              className={({ isActive, isPending }) =>
                                isPending
                                  ? "pending"
                                  : isActive
                                  ? "underline underline-offset-8 decoration-4 text-color1"
                                  : ""
                              }
                            >
                              Games
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/tech_conferences"
                              className={({ isActive, isPending }) =>
                                isPending
                                  ? "pending"
                                  : isActive
                                  ? "underline underline-offset-8 decoration-4 text-color1"
                                  : ""
                              }
                            >
                              Tech Conferences and Expos
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/gaming_conventions"
                              className={({ isActive, isPending }) =>
                                isPending
                                  ? "pending"
                                  : isActive
                                  ? "underline underline-offset-8 decoration-4 text-color1"
                                  : ""
                              }
                            >
                              Gaming Conventions
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/hackathon"
                              className={({ isActive, isPending }) =>
                                isPending
                                  ? "pending"
                                  : isActive
                                  ? "underline underline-offset-8 decoration-4 text-color1"
                                  : ""
                              }
                            >
                              Hackathon
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/networking"
                              className={({ isActive, isPending }) =>
                                isPending
                                  ? "pending"
                                  : isActive
                                  ? "underline underline-offset-8 decoration-4 text-color1"
                                  : ""
                              }
                            >
                              Networking
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/bootcamps"
                              className={({ isActive, isPending }) =>
                                isPending
                                  ? "pending"
                                  : isActive
                                  ? "underline underline-offset-8 decoration-4 text-color1"
                                  : ""
                              }
                            >
                              Bootcamps
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/robot&ai"
                              className={({ isActive, isPending }) =>
                                isPending
                                  ? "pending"
                                  : isActive
                                  ? "underline underline-offset-8 decoration-4 text-color1"
                                  : ""
                              }
                            >
                              Robotics and AI
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <button
                        onClick={toggleEvents}
                        className="flex items-center gap-1"
                      >
                        Events <MdKeyboardArrowRight />
                      </button>
                    )}
                  </div>
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
              to="/dashboard"
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
            <div className="relative">
              {eventsOpen ? (
                <div>
                  <button
                    onClick={toggleEvents}
                    className="flex items-center gap-1"
                  >
                    Events <MdKeyboardArrowUp />
                  </button>
                  <ul className="absolute bg-black/60 rounded-xl space-y-4 w-60 lg:w-64 px-6 py-6 mt-5 lg:mt-6">
                    <li>
                      <NavLink
                        to="/games"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "underline underline-offset-8 decoration-4 text-color1"
                            : ""
                        }
                      >
                        Games
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/tech_conferences"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "underline underline-offset-8 decoration-4 text-color1"
                            : ""
                        }
                      >
                        Tech Conferences and Expos
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/gaming_conventions"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "underline underline-offset-8 decoration-4 text-color1"
                            : ""
                        }
                      >
                        Gaming Conventions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/hackathon"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "underline underline-offset-8 decoration-4 text-color1"
                            : ""
                        }
                      >
                        Hackathon
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/networking"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "underline underline-offset-8 decoration-4 text-color1"
                            : ""
                        }
                      >
                        Networking
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/bootcamps"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "underline underline-offset-8 decoration-4 text-color1"
                            : ""
                        }
                      >
                        Bootcamps
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/robot&ai"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "underline underline-offset-8 decoration-4 text-color1"
                            : ""
                        }
                      >
                        Robotics and AI
                      </NavLink>
                    </li>
                  </ul>
                </div>
              ) : (
                <button
                  onClick={toggleEvents}
                  className="flex items-center gap-1"
                >
                  Events <MdKeyboardArrowDown />
                </button>
              )}
            </div>
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
      <Link>
        <button className="hidden md:flex items-center btn btn-ghost normal-case rounded-lg lg:text-lg text-white bg-color1 hover:bg-color2">
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
  );
};

export default Navbar;
