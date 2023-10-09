import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const slider1 = "url(https://i.ibb.co/p4HY19t/image-2-1.png)";
const slider2 = "url(https://i.ibb.co/b7Vpvb2/image-4.png)";
const slider3 = "url(https://i.ibb.co/47Chm6L/image-6.png)";
const slider4 = "url(https://i.ibb.co/nbnPX6f/image-5.png)";
const slider5 = "url(https://i.ibb.co/25nTsHx/image-7.png)";
const slider6 = "url(https://i.ibb.co/MsykV0t/image-8.png)";
const slider7 = "url(https://i.ibb.co/7S2Zssq/image-9.png)";

const Carousel = () => {
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
    <div>
      <div className="carousel w-full relative">
        {/* slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <div
            style={{
              backgroundImage: slider1,
            }}
            className="w-full bg-no-repeat bg-contain relative"
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute text-center -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2">
              <h1
                data-aos="fade-up"
                className="text-xl md:text-4xl lg:text-7xl font-bold lg:leading-[100px] text-color1"
              >
                Where Every Game
                <br />
                Becomes
                <br />
                an Epic Event!
              </h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide7"
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
            <div className="absolute text-center -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2">
              <h1
                data-aos="fade-up"
                className="text-xl md:text-4xl lg:text-7xl font-bold lg:leading-[100px] text-color2"
              >
                Connecting the
                <br />
                Future: Tech Expos
                <br />
                that Inspire!
              </h1>
            </div>
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
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute text-center -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2">
              <h1
                data-aos="fade-up"
                className="text-xl md:text-4xl lg:text-7xl font-bold lg:leading-[100px] text-color1"
              >
                Code, Collaborate, Create: Hack
                <br />
                the Possibilities!
              </h1>
            </div>
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
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute text-center -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2">
              <h1
                data-aos="fade-up"
                className="text-xl md:text-4xl lg:text-7xl font-bold lg:leading-[100px] text-color2"
              >
                Level Up Your
                <br />
                Experience: Gaming
                <br />
                Conventions Reloaded!
              </h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide3"
                className="btn btn-circle border-2 border-transparent backdrop-blur-sm bg-white/30 hover:bg-white/60 hover:border-transparent"
              >
                <MdOutlineArrowBackIos className="text-white text-xl" />
              </a>
              <a
                href="#slide5"
                className="btn btn-circle border-2 border-transparent backdrop-blur-sm bg-white/30 hover:bg-white/60 hover:border-transparent"
              >
                <MdOutlineArrowForwardIos className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* slide 5 */}
        <div id="slide5" className="carousel-item relative w-full">
          <div
            style={{
              backgroundImage: slider5,
            }}
            className="w-full bg-no-repeat bg-contain relative"
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute text-center -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2">
              <h1
                data-aos="fade-up"
                className="text-xl md:text-4xl lg:text-7xl font-bold lg:leading-[100px] text-color1"
              >
                Elevate Your Tech
                <br />
                IQ: Unleash
                <br />
                Your Potential with
                <br />
                Bootcamps!
              </h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide4"
                className="btn btn-circle border-2 border-transparent backdrop-blur-sm bg-white/30 hover:bg-white/60 hover:border-transparent"
              >
                <MdOutlineArrowBackIos className="text-white text-xl" />
              </a>
              <a
                href="#slide6"
                className="btn btn-circle border-2 border-transparent backdrop-blur-sm bg-white/30 hover:bg-white/60 hover:border-transparent"
              >
                <MdOutlineArrowForwardIos className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* slide 6 */}
        <div id="slide6" className="carousel-item relative w-full">
          <div
            style={{
              backgroundImage: slider6,
            }}
            className="w-full bg-no-repeat bg-contain relative"
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute text-center -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2">
              <h1
                data-aos="fade-up"
                className="text-xl md:text-4xl lg:text-7xl font-bold lg:leading-[100px] text-color2"
              >
                Unlocking
                <br />
                the Future: Robotics
                <br />& AI in Action!
              </h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide5"
                className="btn btn-circle border-2 border-transparent backdrop-blur-sm bg-white/30 hover:bg-white/60 hover:border-transparent"
              >
                <MdOutlineArrowBackIos className="text-white text-xl" />
              </a>
              <a
                href="#slide7"
                className="btn btn-circle border-2 border-transparent backdrop-blur-sm bg-white/30 hover:bg-white/60 hover:border-transparent"
              >
                <MdOutlineArrowForwardIos className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* slide 7 */}
        <div id="slide7" className="carousel-item relative w-full">
          <div
            style={{
              backgroundImage: slider7,
            }}
            className="w-full bg-no-repeat bg-contain relative"
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute text-center -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2">
              <h1
                data-aos="fade-up"
                className="text-xl md:text-4xl lg:text-7xl font-bold lg:leading-[100px] text-color1"
              >
                Tech Networking: Building
                <br />
                Tomorrow Together!
              </h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide6"
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
        <div className="carousel-item relative w-full" data-aos="fade-up">
          <img
            src="https://i.ibb.co/nbnPX6f/image-5.png"
            className="w-full"
            alt="Necessary Evil Slide"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
