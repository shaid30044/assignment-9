import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Navbar from "./Navbar";

const slider1 = "url(https://i.ibb.co/GMVbSyL/image-3.png)";
const slider2 = "url(https://i.ibb.co/b7Vpvb2/image-4.png)";
const slider3 = "url(https://i.ibb.co/47Chm6L/image-6.png)";
const slider4 = "url(https://i.ibb.co/nbnPX6f/image-5.png)";

const Carousel = () => {
  return (
    <div className="relative">
      <div className="absolute z-10 w-full">
        <Navbar />
      </div>
      <div className="carousel w-full relative">
        {/* slide 1 */}

        <div id="slide1" className="carousel-item relative w-full">
          <div
            style={{
              backgroundImage: slider1,
            }}
            className="w-full bg-no-repeat bg-contain relative"
          >
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute">
              <h1 className="text-4xl text-white"></h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide4"
                className="btn btn-circle border-2 border-transparent backdrop-blur-sm bg-white/30 hover:bg-white/60 hover:border-transparent"
              >
                <MdOutlineArrowBackIos className="text-white text-xl" />
              </a>
              <a
                href="#slide2"
                className="btn btn-circle border-2 border-transparent backdrop-blur-sm bg-white/30 hover:bg-white/60 hover:border-transparent"
              >
                <MdOutlineArrowForwardIos className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* slide 2 */}

        <div id="slide2" className="carousel-item relative w-full">
          <div
            style={{
              backgroundImage: slider2,
            }}
            className="w-full bg-no-repeat bg-contain relative"
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide1"
                className="btn btn-circle border-2 border-transparent backdrop-blur-sm bg-white/30 hover:bg-white/60 hover:border-transparent"
              >
                <MdOutlineArrowBackIos className="text-white text-xl" />
              </a>
              <a
                href="#slide3"
                className="btn btn-circle border-2 border-transparent backdrop-blur-sm bg-white/30 hover:bg-white/60 hover:border-transparent"
              >
                <MdOutlineArrowForwardIos className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* slide 3 */}

        <div id="slide3" className="carousel-item relative w-full">
          <div
            style={{
              backgroundImage: slider3,
            }}
            className="w-full bg-no-repeat bg-contain relative"
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide2"
                className="btn btn-circle border-2 border-transparent backdrop-blur-sm bg-white/30 hover:bg-white/60 hover:border-transparent"
              >
                <MdOutlineArrowBackIos className="text-white text-xl" />
              </a>
              <a
                href="#slide4"
                className="btn btn-circle border-2 border-transparent backdrop-blur-sm bg-white/30 hover:bg-white/60 hover:border-transparent"
              >
                <MdOutlineArrowForwardIos className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* slide 4 */}

        <div id="slide4" className="carousel-item relative w-full">
          <div
            style={{
              backgroundImage: slider4,
            }}
            className="w-full bg-no-repeat bg-contain relative"
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide3"
                className="btn btn-circle border-2 border-transparent backdrop-blur-sm bg-white/30 hover:bg-white/60 hover:border-transparent"
              >
                <MdOutlineArrowBackIos className="text-white text-xl" />
              </a>
              <a
                href="#slide1"
                className="btn btn-circle border-2 border-transparent backdrop-blur-sm bg-white/30 hover:bg-white/60 hover:border-transparent"
              >
                <MdOutlineArrowForwardIos className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* necessary evil slide */}

        <div className="carousel-item relative w-full">
          <img src="https://i.ibb.co/nbnPX6f/image-5.png" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
