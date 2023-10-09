import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { HiLocationMarker, HiCalendar } from "react-icons/hi";
import { MdGeneratingTokens, MdTimer } from "react-icons/md";
import {
  BsBookmarks,
  BsBookmarksFill,
  BsStarFill,
  BsStarHalf,
  BsStar,
} from "react-icons/bs";
import { IoMdPricetags } from "react-icons/io";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [bookmark, setBookmark] = useState([]);
  const [noService, setNoService] = useState(false);
  const [showMore, setShowMore] = useState(4);

  useEffect(() => {
    const bookmarkServices = JSON.parse(
      localStorage.getItem("bookmark_services")
    );

    if (bookmarkServices) {
      setBookmark(bookmarkServices);
    } else {
      setNoService(true);
    }
  }, []);

  const handleShowMore = () => {
    setShowMore(showMore + 4);
  };

  return (
    <div>
      <div className="relative">
        <div className="sticky top-0 z-10">
          <div className="absolute z-10 w-full">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="bg-dark7 px-4 md:px-10 lg:px-20 py-10 md:py-20 lg:py-32">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-color1 pb-10">
          Your Bookmark Services
        </h1>
        {noService ? (
          <div
            className="flex justify-center items-center md:text-3xl 
          font-semibold h-[110vh]"
          >
            No service found. Thank you for visiting!
          </div>
        ) : (
          <div>
            <div className="flex flex-col gap-10">
              {bookmark.slice(0, showMore).map((service, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6">
                  <div className="lg:grid grid-cols-3">
                    <img
                      className="w-full lg:w-[400px] rounded-2xl mb-2 lg:mb-0"
                      src={service.img}
                      alt=""
                    />
                    <div className="w-full">
                      <h1 className="text-2xl md:text-3xl font-semibold text-dark2">
                        {service.name}
                      </h1>
                      <p className="text-xs font-medium text-dark4 pt-2">
                        <span className="bg-dark7 rounded-[5px] px-2 py-1">
                          #{service.category}
                        </span>
                      </p>
                      <p className="flex items-center gap-2 pt-4">
                        <HiLocationMarker className="text-xl md:text-2xl text-color1" />
                        <span className="text-dark3 text-lg font-medium">
                          {service.place}
                        </span>
                      </p>
                      <div className="grid grid-cols-2 gap-y-4 pt-2">
                        <p className="flex items-center gap-2">
                          <HiCalendar className="text-xl md:text-2xl text-color1" />
                          <span className="text-dark3 text-lg font-medium">
                            {service.date}
                          </span>
                        </p>
                        <p className="flex items-center gap-2">
                          <IoMdPricetags className="text-xl md:text-2xl text-color1" />
                          <span className="text-dark3 text-lg font-medium">
                            {service.price === 0 ? (
                              "Free"
                            ) : (
                              <span>${service.price}</span>
                            )}
                          </span>
                        </p>
                        <p className="flex items-center gap-2">
                          <MdTimer className="text-xl md:text-2xl text-color1" />
                          <span className="text-dark3 text-lg font-medium">
                            {service.duration}
                          </span>
                        </p>
                        <div className="flex items-center gap-2">
                          <MdGeneratingTokens className="text-xl md:text-2xl text-color1" />
                          <div className="text-star">
                            {service.rating === 3.5 ? (
                              <div className="flex gap-1">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                                <BsStar />
                              </div>
                            ) : service.rating === 4 ? (
                              <div className="flex gap-1">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStar />
                              </div>
                            ) : (
                              <div className="flex gap-1">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                              </div>
                            )}
                          </div>
                          <p className="text-dark3 text-lg">
                            {service.rating === 4 ? (
                              <span>{service.rating}.0</span>
                            ) : (
                              <span>{service.rating}</span>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link
                      to={`/details/${service.id}`}
                      className="flex justify-center items-center mt-8 lg:mt-0"
                    >
                      <button className="btn btn-ghost normal-case flex rounded-lg bg-color1 hover:bg-color2 text-lg text-white px-6">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {showMore < bookmark.length && (
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
      <Footer />
    </div>
  );
};

export default Favorites;
