import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { HiLocationMarker, HiCalendar } from "react-icons/hi";
import { MdGeneratingTokens, MdTimer } from "react-icons/md";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { IoMdPricetags } from "react-icons/io";
import Navbar from "../Components/Navbar";

const Details = () => {
  const service = useLoaderData();
  const { id } = useParams();

  const selectedService = service.find((item) => item.id == id);

  const {
    name,
    img,
    description,
    index_title,
    index_info,
    info_1_title,
    info_2_title,
    info_3_title,
    info_4_title,
    info_5_title,
    info_1,
    info_2,
    info_3,
    info_4,
    info_5,
    ticket,
    location,
    event,
    conclusion,
    update,
    price,
    place,
    date,
    duration,
    category,
    rating,
  } = selectedService || {};

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div className="relative">
      <div className="sticky top-0 z-10">
        <div className="absolute z-10 w-full">
          <Navbar />
        </div>
      </div>
      <div className="bg-dark7 px-4 md:px-10 lg:px-56 py-20 md:py-28 lg:py-40">
        <div className="bg-white rounded-3xl p-5 md:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
            <img
              className="w-full lg:w-[700px] rounded-2xl md:rounded-3xl"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-dark2">
                {name}
              </h1>
              <p className="text-[10px] text-dark4 pt-2 pb-6">
                <span className="bg-dark7 rounded-[5px] px-2 py-1">
                  #{category}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <HiLocationMarker className="text-xl md:text-2xl text-color1" />
                <span className="text-dark3 font-medium">{place}</span>
              </p>
              <p className="flex items-center gap-2 py-4">
                <HiCalendar className="text-xl md:text-2xl text-color1" />
                <span className="text-dark3 font-medium">{date}</span>
              </p>
              <p className="flex items-center gap-2 pb-4">
                <IoMdPricetags className="text-xl md:text-2xl text-color1" />
                <span className="text-dark3 font-medium">
                  {price === 0 ? "Free" : <span>${price}</span>}
                </span>
              </p>
              <p className="flex items-center gap-2 pb-4">
                <MdTimer className="text-xl md:text-2xl text-color1" />
                <span className="text-dark3 font-medium">{duration}</span>
              </p>
              <div className="flex items-center gap-2">
                <MdGeneratingTokens className="text-xl md:text-2xl text-color1" />
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
                <p className="text-dark3">
                  {rating === 4 ? (
                    <span>{rating}.0</span>
                  ) : (
                    <span>{rating}</span>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="text-dark3 leading-6 pt-10 lg:pt-6">
            <p className="indent-14 text-lg">
              <span className="text-4xl font-medium text-color1">
                {description[0]}
              </span>
              {description.substring(1)}
            </p>
            <p className="text-xl font-semibold text-color1 pt-6 pb-2">
              {index_title}
            </p>
            <p>{index_info}</p>
            <ul className="list-disc text-color2 ml-3.5">
              <li className="py-4">
                <span className="text-lg font-medium text-color2">
                  {info_1_title}
                </span>{" "}
                <span className="text-dark3">{info_1}</span>
              </li>
              <li>
                <span className="text-lg font-medium text-color2">
                  {info_2_title}
                </span>{" "}
                <span className="text-dark3">{info_2}</span>
              </li>
              <li className="py-4">
                <span className="text-lg font-medium text-color2">
                  {info_3_title}
                </span>{" "}
                <span className="text-dark3">{info_3}</span>
              </li>
              <li>
                <span className="text-lg font-medium text-color2">
                  {info_4_title}
                </span>{" "}
                <span className="text-dark3">{info_4}</span>
              </li>
              <li className="pt-4">
                <span className="text-lg font-medium text-color2">
                  {info_5_title}
                </span>{" "}
                <span className="text-dark3">{info_5}</span>
              </li>
            </ul>
            <p className="text-xl font-semibold text-color1 pt-6 pb-2">
              Ticket Information
            </p>
            <p>{ticket}</p>
            <p className="text-xl font-semibold text-color1 pt-6 pb-2">
              Location
            </p>
            <p>{location}</p>
            <p className="text-xl font-semibold text-color1 pt-6 pb-2">
              Event Date
            </p>
            <p>{event}</p>
            <p className="text-xl font-semibold text-color1 1 pt-6 pb-2">
              Conclusion
            </p>
            <p>{conclusion}</p>
            <p className="text-xl font-semibold text-color1 pt-6 pb-2">
              {update}
            </p>
            <ul className="list-disc list-inside text-color2 space-y-1">
              <li>
                <span className="font-medium">Price: </span>
                {price === 0 ? (
                  <span className="text-dark3">Free</span>
                ) : (
                  <span className="text-dark3">${price}</span>
                )}
              </li>
              <li className="font-medium">
                Rating:{" "}
                <span className="font-normal text-dark3">
                  {rating === 4 ? (
                    <span>{rating}.0</span>
                  ) : (
                    <span>{rating}</span>
                  )}
                </span>
              </li>
            </ul>
          </div>
          <button
            onClick={handleNavigate}
            className="btn btn-ghost normal-case flex rounded-lg bg-color1 hover:bg-color2 text-[16px] text-white px-6 mt-10 m-auto"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;