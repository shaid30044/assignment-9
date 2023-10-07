import { useLoaderData } from "react-router-dom";
import Service from "./Service";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { LuSearchX } from "react-icons/lu";

const Services = () => {
  const services = useLoaderData();

  const [searchOpen, setSearchOpen] = useState(false);
  const [showMore, setShowMore] = useState(6);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleShowMore = () => {
    setShowMore(showMore + 6);
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-color1 pb-10">
        Our Services
      </h1>
      <div className="flex justify-center mb-10">
        <input
          type="search"
          name="search"
          placeholder="Search your Category here..."
          className="rounded-l-full bg-dark6 text-sm md:text-base text-dark2 focus:outline-none w-60 md:w-[400px] px-4 py-2 md:px-6"
        />
        <button className="bg-color1 hover:bg-color1 hover:text-dark2 md:text-lg md:font-medium text-white rounded-r-full focus:outline-none px-2.5 md:px-3 lg:px-4 py-2">
          Search
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-6 md:gap-5 lg:gap-8">
        {services.slice(0, showMore).map((service, idx) => (
          <Service key={idx} service={service} />
        ))}
      </div>
      {showMore < services.length && (
        <button
          onClick={handleShowMore}
          className="btn btn-ghost normal-case flex rounded-lg bg-color1 hover:bg-color1 hover:text-dark2 text-lg text-white px-6 mt-10 m-auto"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default Services;
