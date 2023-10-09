import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Service = ({ service }) => {
  const { id, name, img, description, category, rating } = service || {};
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div data-aos="zoom-in">
      <img
        className="rounded-t-xl w-full md:h-[190px] lg:h-[244px]"
        src={img}
        alt=""
      />
      <div className="bg-white rounded-b-xl p-5">
        <p className="text-xs font-medium text-dark4">
          <span className="bg-dark7 rounded-[5px] px-2 py-1">#{category}</span>
        </p>
        <h1 className="text-2xl md:text-xl lg:text-2xl font-bold text-dark2 pt-3">
          {name}
        </h1>
        <p className="text-dark3 text-lg font-medium pt-2">
          {description.length > 60
            ? `${description.slice(0, 60)}...`
            : description}
        </p>
        <div className="flex justify-between items-center pt-6">
          <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
            <div className="text-star text-lg md:text-base lg:text-lg">
              {rating === 3.5 ? (
                <div className="flex gap-1">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                  <BsStar />
                </div>
              ) : rating === 4 ? (
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
            <p className="text-lg md:text-base lg:text-lg font-medium text-dark4">
              {rating === 4 ? <span>{rating}.0</span> : <span>{rating}</span>}
            </p>
          </div>
          <Link to={`/details/${id}`}>
            <button className="btn btn-ghost normal-case flex rounded-lg bg-color1 hover:bg-color2 text-lg text-white px-6">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
