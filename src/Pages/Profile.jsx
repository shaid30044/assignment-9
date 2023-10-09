import { useContext } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="relative">
        <div className="sticky top-0 z-10">
          <div className="absolute z-10 w-full">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="md:flex items-center bg-dark7 gap-10 px-4 md:px-10 lg:px-20 py-40">
        <img
          className="flex md:block m-auto md:m-0 w-80 h-80 rounded-full mb-10 md:pb-0"
          src={user.photoURL}
          alt=""
        />
        <div className="border-t-4 md:border-t-0 md:border-l-4 border-color1 pl-10 py-16">
          <h3 className="text-3xl font-semibold text-dark2">
            {user.displayName}
          </h3>
          <p className="text-xl font-medium text-dark4 pt-4">{user.email}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
