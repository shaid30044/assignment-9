import { useEffect, useState } from "react";

const EventsCorner = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      const rec = await fetch("/events.json");
      const data = await rec.json();
      setEvents(data);
    };
    handleFetch();
  }, []);

  return (
    <div className="bg-dark7 px-4 md:px-10 lg:px-20 py-10 md:py-20">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-color1 pb-10">
        Events Corner
      </h1>
      <div className="flex flex-col gap-10 lg:gap-20">
        {events.map((event, idx) => (
          <div key={idx}>
            {event.id % 2 ? (
              <div className="lg:flex items-center bg-color3 rounded-2xl lg:w-3/4">
                <img
                  className="w-full lg:w-[500px] lg:h-full rounded-t-2xl lg:rounded-r-[0px] lg:rounded-l-2xl"
                  src={event.img}
                  alt=""
                />
                <div className="px-6 md:px-10 h-full py-6">
                  <h3 className="text-4xl font-semibold text-color1">
                    {event.category}
                  </h3>
                  <p className="text-lg font-medium text-justify text-dark2 pt-6">
                    {event.description}
                  </p>
                </div>
              </div>
            ) : (
              <div className="lg:flex justify-end">
                <div className="lg:flex flex-row-reverse items-center bg-color4 rounded-2xl lg:w-3/4">
                  <img
                    className="w-full lg:w-1/2 lg:h-full rounded-t-2xl  lg:rounded-l-[0px] lg:rounded-r-2xl"
                    src={event.img}
                    alt=""
                  />
                  <div className="lg:flex flex-col justify-center px-6 lg:px-10 h-full py-6">
                    <h3 className="text-4xl font-semibold text-color2">
                      {event.category}
                    </h3>
                    <p className="text-lg font-medium text-justify text-dark2 pt-6">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsCorner;
