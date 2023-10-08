import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Service = ({ service }) => {
  const { id, name, img, description, category, rating } = service || {};

  return (
    <div>
      <img
        className="rounded-t-xl w-full md:h-[190px] lg:h-[244px]"
        src={img}
        alt=""
      />
      <div className="border-x-2 border-b-2 border-dark6 rounded-b-xl p-5">
        <p className="text-[10px] text-dark4">
          <span className="bg-dark6 rounded-[5px] px-2 py-1">#{category}</span>
        </p>
        <h1 className="text-xl font-semibold text-dark2 pt-3">{name}</h1>
        <p className="text-dark3 text-[15px] pt-2">
          {description.length > 70
            ? `${description.slice(0, 70)}...`
            : description}
        </p>
        <div className="flex justify-between items-center pt-6">
          <div className="flex items-center gap-4">
            <div className="text-star">
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
            <p className="text-dark4">
              {rating === 4 ? <span>{rating}.0</span> : <span>{rating}</span>}
            </p>
          </div>
          <Link to={`/details/${id}`}>
            <button className="btn btn-ghost normal-case flex rounded-lg bg-color1 hover:bg-color2 text-[16px] text-white px-6">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
