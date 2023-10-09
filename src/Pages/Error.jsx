import { GiUfo } from "react-icons/gi";
import { TbError404 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center h-[90vh]">
      <div className="flex flex-col items-center">
        <div className="text-[400px] md:text-[500px]">
          <GiUfo />
        </div>
        <div className="text-[140px] md:text-[160px] text-white -mt-36 md:-mt-44">
          <TbError404 />
        </div>
      </div>
      <div>
        <button
          onClick={handleGoHome}
          className="btn btn-ghost normal-case flex rounded-lg bg-color1 hover:bg-color2 text-lg text-white px-6 m-auto mt-10"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Error;
