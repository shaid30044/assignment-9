import { useEffect } from "react";

import { useLoaderData } from "react-router-dom";
import Service from "./Service";
import { useState } from "react";

const Services = () => {
  const services = useLoaderData();

  const [showMore, setShowMore] = useState(6);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showNoResults, setShowNoResults] = useState(false);

  const handleShowMore = () => {
    setShowMore(showMore + 6);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowNoResults(false);

    setTimeout(() => {
      const filteredServices = services.filter((service) =>
        service.category.toLowerCase().includes(search.toLowerCase())
      );

      setSearchResults(filteredServices);
      setIsLoading(false);

      if (filteredServices.length === 0) {
        setShowNoResults(true);
      }
    }, 0);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="bg-dark7 px-4 md:px-10 lg:px-20 py-10 md:py-20">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-color1 pb-10">
        Our Services
      </h1>
      <form onSubmit={handleSubmit} className="flex justify-center mb-10">
        <input
          onChange={handleSearch}
          value={search}
          type="search"
          name="search"
          placeholder="Search your Category here..."
          className="rounded-l-full bg-white border-y-2 border-l-2 border-transparent focus:border-color1 text-base font-medium text-color2 focus:outline-none w-60 md:w-[400px] lg:w-[500px] px-4 py-2 lg:py-2.5 md:px-6"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-color1 hover:bg-color2 duration-300 text-lg lg:text-xl md:font-medium text-white rounded-r-full focus:outline-none px-5 lg:px-6 py-2"
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>
      <div>
        {isLoading ? (
          <div className="flex justify-center items-center text-center w-[] md:text-xl font-semibold">
            Loading...
          </div>
        ) : showNoResults ? (
          <div className="flex justify-center items-center text-center w-[] md:text-xl font-semibold">
            No results found for{" "}
            <span className="text-color1 pl-2">{'"' + search + '"'}</span>
          </div>
        ) : searchResults.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-6 md:gap-5 lg:gap-8">
            {searchResults.map((service, idx) => (
              <Service key={idx} service={service} />
            ))}
          </div>
        ) : (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-6 md:gap-5 lg:gap-8">
              {services.slice(0, showMore).map((service, idx) => (
                <Service key={idx} service={service} />
              ))}
            </div>
            {showMore < services.length && (
              <button
                onClick={handleShowMore}
                className="btn btn-ghost normal-case flex rounded-lg bg-color1 hover:bg-color2 text-lg text-white px-6 mt-10 m-auto"
              >
                Show More
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
