import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Providers/AuthProvider";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const accepted = form.get("terms");

    try {
      if (password.length < 6) {
        throw new Error("Password should be at least 6 characters");
      }

      if (!/[A-Z]/.test(password)) {
        throw new Error(
          "Password should have at least one uppercase character"
        );
      }

      if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
        throw new Error("Password should have at least one special character");
      }

      if (!accepted) {
        throw new Error("Please accept our terms and conditions");
      }

      const userCredential = await createUser(email, password);

      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photo,
      });

      toast.success("Registration successfully!");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setRegisterError(error.message);
      toast.error(error.message);
    }
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
          <h2 className="text-3xl font-semibold text-color1 text-center pb-10">
            Registration
          </h2>
          <form onSubmit={handleRegister} className="flex flex-col gap-6 pb-10">
            <input
              className="rounded-lg font-medium px-4 py-2 w-72 md:w-80"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="rounded-lg font-medium px-4 py-2 w-72 md:w-80"
              type="text"
              name="photo"
              placeholder="Photo URL"
              required
            />
            <input
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
            <div className="flex items-center gap-3">
              <input
                className="h-4 w-4"
                type="checkbox"
                name="terms"
                id="terms"
                required
              />
              <label htmlFor="terms">
                Accept our{" "}
                <Link className="hover:text-color1 hover:underline underline-offset-4 cursor-pointer">
                  Terms & Conditions
                </Link>
                .
              </label>
            </div>
            <input
              className="btn normal-case bg-color1 hover:bg-color2 text-white text-xl rounded-lg duration-300 px-4 py-2"
              type="submit"
              name="submit"
            />
          </form>
          <div className="text-center">
            {registerError && (
              <p className="text-lg text-red-600">{registerError}</p>
            )}
          </div>
          <p className="text-center text-lg font-medium">
            Already have an account?{" "}
            <Link
              className="underline underline-offset-2 text-color1 hover:text-color2 duration-300"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Registration;
