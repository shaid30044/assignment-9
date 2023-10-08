import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Favorites = () => {
  return (
    <div>
      <div className="relative">
        <div className="sticky top-0 z-10">
          <div className="absolute z-10 w-full">
            <Navbar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
