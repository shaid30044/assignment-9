import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import logo from "../assets/footer-logo.png";

const About = () => {
  return (
    <div>
      <div className="relative">
        <div className="sticky top-0 z-10">
          <div className="absolute z-10 w-full">
            <Navbar />
          </div>
        </div>
        <div className="bg-dark7 px-4 md:px-10 lg:px-32 py-40">
          <p className="text-lg font-medium text-dark2 pb-10">
            Welcome to{" "}
            <span className="text-xl font-semibold text-color1">XPO</span>{" "}
            <span className="text-xl font-semibold text-color2">2023</span>{" "}
            where events come to life!
          </p>
          <div className="grid grid-cols-2 justify-between items-center gap-6">
            <p className="text-lg font-medium text-dark2">
              <span className="text-xl font-semibold text-color1">XPO</span>{" "}
              <span className="text-xl font-semibold text-color2">2023</span>,
              the ultimate destination for enthusiasts, professionals, and
              curious minds in the world of Games, Tech Conferences and Expos,
              Gaming Conventions, Hackathons, Networking, Bootcamps, Robotics,
              and AI.
            </p>
            <div className="flex justify-center items-center gap-4">
              <img className="h-24" src={logo} alt="" />
              <h1 className="text-5xl font-extrabold text-color1">
                XPO <p className="text-color2">2023</p>
              </h1>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-color1 pt-10 pb-4">
              Our Story
            </h3>
            <p className="text-lg font-medium text-dark2">
              At <span className="text-xl font-semibold text-color1">XPO</span>{" "}
              <span className="text-xl font-semibold text-color2">2023</span>,
              we believe that the world of events is a vibrant tapestry of
              knowledge, innovation, and fun. Our journey began with a simple
              idea: to create a platform that brings together people who share a
              passion for these dynamic event categories. We wanted to provide a
              space where you could discover, connect, and immerse yourself in
              the ever-evolving realms of gaming, technology, entrepreneurship,
              and beyond.
            </p>
            <h3 className="text-3xl font-semibold text-color1 pt-10 pb-4">
              What We Offer
            </h3>
            <ul className="list-disc text-color2 text-lg ml-3.5">
              <li className="pb-4">
                <span className="text-xl font-medium text-color2">
                  Unrivaled Event Coverage:
                </span>{" "}
                <span className="text-dark3">
                  Dive deep into the world of events through our comprehensive
                  coverage. We offer in-depth insights, event highlights, and
                  exclusive interviews with industry leaders, organizers, and
                  participants.
                </span>
              </li>
              <li>
                <span className="text-xl font-medium text-color2">
                  Event Listings:
                </span>{" "}
                <span className="text-dark3">
                  Never miss out on your favorite events again. Our meticulously
                  curated event listings will keep you informed about upcoming
                  gatherings, conferences, expos, and more.
                </span>
              </li>
              <li className="py-4">
                <span className="text-xl font-medium text-color2">
                  Community Hub:
                </span>{" "}
                <span className="text-dark3">
                  Connect with like-minded individuals, share your experiences,
                  and engage in meaningful discussions with our passionate
                  community of event enthusiasts. Whether you&apos;re a gaming
                  aficionado, a tech guru, a startup enthusiast, or a robotics
                  aficionado, you&apos;ll find your tribe here.
                </span>
              </li>
              <li>
                <span className="text-xl font-medium text-color2">
                  Inspiration and Resources:
                </span>{" "}
                <span className="text-dark3">
                  Discover stories of innovation, entrepreneurship, and
                  creativity that will inspire you to pursue your passions.
                  Explore a wealth of resources, tips, and guides to help you
                  navigate the event world with confidence.
                </span>
              </li>
            </ul>
            <h3 className="text-3xl font-semibold text-color1 pt-10 pb-4">
              Our Vision
            </h3>
            <p className="text-lg font-medium text-dark2">
              Our vision is to foster a global community where people from
              diverse backgrounds and interests can come together to celebrate
              the excitement and potential of events. We aim to be the go-to
              resource for event lovers worldwide, providing them with the tools
              they need to fully embrace their passions.
            </p>
            <h3 className="text-3xl font-semibold text-color1 pt-10 pb-4">
              Join Us on this Journey
            </h3>
            <p className="text-lg font-medium text-dark2">
              <span className="text-xl font-semibold text-color1">XPO</span>{" "}
              <span className="text-xl font-semibold text-color2">2023</span> is
              not just a website; it's a community. We invite you to be a part
              of this incredible journey. Whether you're a seasoned event-goer
              or just getting started, there's a place for you here. Together,
              we'll explore, learn, and celebrate the world of Games, Tech
              Conferences and Expos, Gaming Conventions, Hackathons, Networking,
              Bootcamps, Robotics, and AI.
            </p>
            <p className="text-lg font-medium text-dark2 pt-20">
              Thank you for being a part of our story. We can't wait to see what
              amazing adventures await us all.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
