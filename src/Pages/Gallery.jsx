import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLoaderData } from "react-router-dom";

const Gallery = () => {
  const services = useLoaderData();

  return (
    <div>
      <div className="relative">
        <div className="sticky top-0 z-10">
          <div className="absolute z-10 w-full">
            <Navbar />
          </div>
        </div>
        <div className="grid grid-cols-2 justify-between gap-10 bg-dark7 px-4 md:px-10 lg:px-20 py-40">
          {services.map((service, idx) => (
            <div key={idx} className="group relative">
              <img className="rounded-2xl h-full" src={service.img} alt="" />
              <div className="absolute inset-0 rounded-2xl bg-black/40 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-end justify-center text-lg font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 pb-2">
                {service.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
