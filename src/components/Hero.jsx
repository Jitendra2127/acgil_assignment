import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import HeroImage1 from "../assets/images/Hero_Img1.png";
import HeroImage2 from "../assets/images/Hero_Img2.webp";
import HeroImage3 from "../assets/images/Hero_Img3.png";
import ImageSwiper from "./common/ImageSwiper";

const heroData = {
  title: "Making Business",
  highlight: "Paperless",
  description1: "Through The Power of ERP Applications for",
  typewriter: [
    "Manufacturing ERP",
    "Supply Chain Management (SCM)",
    "CRM - Lead Management & Service Management",
    "ERP for Real Estate, EPC & Infra Companies",
    "Hospital Management System (HMIS)",
    "Calibration / Testing Labs",
    "Buying House Agencies",
    "Solid, Liquid / Hazardous Waste Management ERP",
  ],
  button: {
    text: "Request Demo",
    link: "/services",
  },
  images: [HeroImage1, HeroImage2, HeroImage3],
};

const Hero = () => {
  return (
    <section className="relative py-6 md:py-12  px-2 md:px-12 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6 ">
          <h1 className="text-4xl md:text-6xl font-bold">{heroData.title}</h1>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-500 italic">
            {heroData.highlight}
          </h1>

          <p className="text-2xl font-semibold">{heroData.description1}</p>
          <p className="text-2xl italic text-blue-500">
            <Typewriter
              words={heroData.typewriter}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <div className="mt-6 w-fit max-md:mx-auto  ">
            <Link to={heroData.button.link}>
              <button
                type="submit"
                className="animate-pulse flex justify-center  gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md  isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-500 hover:text-gray-50 text-blue-500 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border border-blue-500 rounded-full group"
              >
                {heroData.button.text}
                <svg
                  class="w-8 h-8 justify-end group-hover:rotate-0 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-blue-500 group-hover:border-none p-2 -rotate-45"
                  viewBox="0 0 16 19"
                >
                  <FaArrowRight className="text-blue-500 " />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        {/* Right Image/Swiper */}
        <div className=" lg:w-[700px] lg:h-[500px] md:h-[400px] md:w-[700px] h-full w-full overflow-hidden  ">
          <ImageSwiper images={heroData.images} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
