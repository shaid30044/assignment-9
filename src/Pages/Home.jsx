import Carousel from "../Components/Carousel";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import EventsCorner from "../Components/EventsCorner";

const Home = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-10">
        <div className="absolute z-10 w-full">
          <Navbar />
        </div>
      </div>
      <Carousel />
      <Services />
      <EventsCorner />
      <Footer />
    </div>
  );
};

export default Home;
