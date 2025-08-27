import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// this is a single card component used in ServicesSection
const Card = ({ data }) => {
  const { icon: Icon, title, description, buttonText, buttonLink, id } = data;
  return (
    <div
      className="relative overflow-hidden bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-6 space-y-3 rounded-md transition-all duration-500 hover:shadow-[0px_0px_25px_rgba(0,0,0,0.2)] group cursor-pointer
before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-blue-500 before:transition-all before:duration-700 before:z-0 hover:before:h-full "
    >
      {/* Circle badge */}
      <div className="w-24 h-24 bg-blue-500 group-hover:bg-white transition-colors duration-500 rounded-full absolute -right-5 -top-7 z-10">
        <p className="absolute bottom-6 left-7 text-white group-hover:text-blue-500 text-2xl transition-colors duration-500">
          0{id}
        </p>
      </div>

      {/* Icon */}
      <div className="relative z-10 border border-blue-500 p-2 w-fit flex items-center justify-center rounded-full bg-white group-hover:bg-blue-500 group-hover:border-white transition-colors duration-500">
        <Icon className="w-10 h-10 text-blue-500 group-hover:text-white transition-colors duration-500" />
      </div>

      {/* Title */}
      <h1 className="relative z-10 font-semibold text-xl group-hover:text-white transition-colors duration-500">
        {title}
      </h1>

      {/* Description */}
      <p className="relative z-10 text-sm text-zinc-500 leading-6 group-hover:text-gray-100 transition-colors duration-500">
        {description}
      </p>
      <div className="mt-10 w-fit  ">
        <Link to={buttonLink}>
          <button
            type="submit"
            className="px-2 flex items-center rounded-full bg-white py-1 border 
             text-blue-500 border-blue-500  z-10 transition-colors duration-500 relative"
          >
            <span className="transition-colors duration-500 text-sm">
              {buttonText}
            </span>
            <span
              className=" flex items-center justify-center rounded-full 
                   -rotate-45 group-hover:rotate-0 transition-all duration-500 p-1 ml-2 border border-blue-500"
            >
              <FaArrowRight className="text-blue-500 transition-colors duration-500 " />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
