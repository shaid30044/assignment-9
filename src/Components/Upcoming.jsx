const Upcoming = () => {
  const overlayStyle = {
    backgroundImage: "url('https://www.penguins.co.uk/hubfs/event_tech.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };

  return (
    <div className="bg-dark7 px-4 md:px-10 lg:px-20 py-10 md:py-20">
      <div className="relative">
        <div
          className="bg-color3 rounded-3xl py-10 md:py-14 lg:py-20"
          style={overlayStyle}
        >
          <div className="absolute inset-0 bg-black opacity-70 rounded-3xl"></div>
          <h1 className="text-3xl lg:text-6xl font-bold text-color1 text-center relative z-10">
            Subscribe for future events.
          </h1>
          <p className="md:text-lg font-medium text-dark6 text-center pt-2 md:pt-4 lg:pt-6 relative z-10">
            We will try to inform you about future events first.
          </p>
          <form className="flex justify-center pt-10 md:pt-14 lg:pt-16 relative z-10">
            <input
              className="rounded-lg bg-white/30 lg:text-lg font-medium text-white focus:outline-none px-4 py-2 w-72 md:w-[500px] lg:w-[800px]"
              type="text"
              name="name"
              placeholder="Enter your email"
              required
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
