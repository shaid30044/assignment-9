import { Link } from "react-router-dom";
import logo from "../assets/footer-logo.png";
import { BsFacebook, BsInstagram, BsYoutube, BsLinkedin } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-black/90 text-center md:text-start pt-20 px-4 md:px-10 lg:px-20 lg:pt-32 pb-6 md:pb-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 border-b border-dark3 pb-10 md:pb-16 lg:pb-20">
        <Link
          to="/"
          className="flex justify-center md:justify-start items-center gap-4 order-first pb-16 md:pb-20 lg:pb-0"
        >
          <img className="h-[70px]" src={logo} alt="" />
          <h1 className="text-4xl font-extrabold text-color1">
            XPO <p className="text-color2">2023</p>
          </h1>
        </Link>
        <div className="pb-16 md:pb-0">
          <h3 className="text-white text-xl font-medium pb-6">Services</h3>
          <div className="space-y-3.5">
            <p>
              <span className="text-dark4 hover:text-color1 font-medium hover:underline underline-offset-8 decoration-2 duration-300">
                <Link to="/">Gaming</Link>
              </span>
            </p>
            <p>
              <span className="text-dark4 hover:text-color1 font-medium hover:underline underline-offset-8 decoration-2 duration-300">
                <Link to="/">Tech Conferences and Expos</Link>
              </span>
            </p>
            <p>
              <span className="text-dark4 hover:text-color1 font-medium hover:underline underline-offset-8 decoration-2 duration-300">
                <Link to="/">Gaming Conventions</Link>
              </span>
            </p>
            <p>
              <span className="text-dark4 hover:text-color1 font-medium hover:underline underline-offset-8 decoration-2 duration-300">
                <Link to="/">Hackathon</Link>
              </span>
            </p>
            <p>
              <span className="text-dark4 hover:text-color1 font-medium hover:underline underline-offset-8 decoration-2 duration-300">
                <Link to="/">Tech Networking</Link>
              </span>
            </p>
            <p>
              <span className="text-dark4 hover:text-color1 font-medium hover:underline underline-offset-8 decoration-2 duration-300">
                <Link to="/">Tech Bootcamps</Link>
              </span>
            </p>
            <p>
              <span className="text-dark4 hover:text-color1 font-medium hover:underline underline-offset-8 decoration-2 duration-300">
                <Link to="/">Robotics and AI</Link>
              </span>
            </p>
          </div>
        </div>
        <div className="pb-16 md:pb-0">
          <h3 className="text-white text-xl font-medium pb-6">Contact</h3>
          <div className="space-y-3.5">
            <p className="flex flex-col text-dark4 font-medium">
              <span>77 Baker Street</span>
              <span>Bondowoso. 87655</span>
              <span>Indonesia</span>
            </p>
            <p className="text-dark4 font-medium">Call Us: +62 81 334 61 00</p>
          </div>
        </div>
        <div className="md:-order-1 lg:order-last">
          <h3 className="text-white text-xl font-medium pb-6">Social</h3>
          <div className="flex justify-center md:justify-start items-center gap-4 text-2xl text-black/90">
            <a className="bg-white hover:bg-color1 duration-300 cursor-pointer rounded-full p-2">
              <BsFacebook />
            </a>
            <a className="bg-white hover:bg-color1 duration-300 cursor-pointer rounded-full p-2">
              <RiTwitterXFill />
            </a>
            <a className="bg-white hover:bg-color1 duration-300 cursor-pointer rounded-full p-2">
              <BsInstagram />
            </a>
            <a className="bg-white hover:bg-color1 duration-300 cursor-pointer rounded-full p-2">
              <BsLinkedin />
            </a>
            <a className="bg-white hover:bg-color1 duration-300 cursor-pointer rounded-full p-2">
              <BsYoutube />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-sm text-dark3 pt-10 md:pt-16 lg:pt-20">
          Copyright © 2023 - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
