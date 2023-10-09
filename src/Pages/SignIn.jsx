import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    login(email, password)
      .then((res) => {
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);

        toast.success("Sign In successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(res.user);
      })
      .catch((error) => {
        if (error.message === "Invalid email") {
          toast.error("Invalid email. Please check your email address.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (error.message === "Invalid password") {
          toast.error("Invalid password. Please check your password.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error("Sign In failed. Please check your credentials.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        console.error(error);
      });
  };

  return (
    <div className="relative">
      <div className="sticky top-0 z-10">
        <div className="absolute z-10 w-full">
          <Navbar />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="bg-dark7/70 rounded-2xl p-12 md:p-16">
          <h2 className="text-4xl font-semibold text-color1 text-center pb-10">
            Sign In
          </h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-6 pb-10">
            <input
              ref={emailRef}
              className="rounded-lg font-medium px-4 py-2 w-72 md:w-80"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <div className="relative flex items-center">
              <input
                className="rounded-lg font-medium px-4 py-2 w-72 md:w-80"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-lg cursor-pointer"
              >
                {showPassword ? (
                  <FaRegEyeSlash className="text-color2" />
                ) : (
                  <FaRegEye className="text-color1" />
                )}
              </span>
            </div>
            <p>
              <span className="hover:text-color1 hover:underline underline-offset-4 cursor-pointer">
                Forget password!
              </span>
            </p>
            <input
              className="btn normal-case bg-color1 hover:bg-color2 text-white text-xl rounded-lg duration-300 px-4 py-2"
              type="submit"
              name="submit"
            />
          </form>
          <p className="text-center text-lg font-medium">
            Don&apos;t have an account?{" "}
            <Link
              className="underline underline-offset-2 text-color1 hover:text-color2 duration-300"
              to="/signUp"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
