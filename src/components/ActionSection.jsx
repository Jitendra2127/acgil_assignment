import { Link } from "react-router-dom";
import get_in_touch from "../assets/images/get_in_touch.jpg";
import SectionHeader from "./common/SectionHeader";

const actionSectionData = {
  sectionHeader: {
    heading: "GET IN TOUCH",
    description:
      "We provide ERP, HMIS, and CRM solutions to help businesses grow and operate efficiently across industries.",
  },
  leftSection: {
    title: "Ready to Transform Your Business?",
    description:
      "Empowering world with technology since 1993, ACGIL has been offering ERP, HMIS and CRM solutions across India and overseas. With unmatched experience, we continue to help businesses achieve excellence.",
    buttons: [
      {
        label: "Explore More",
        link: "/services",
        style: "primary",
      },
      {
        label: "Get in Touch",
        link: "/contact",
        style: "secondary",
      },
    ],
    steps: 3,
    activeStep: 1,
  },
  rightSection: {
    image: "/assets/images/get_in_touch.jpg",
    overlay: {
      quote:
        "Explore our ERP solutions or reach out to us for a free consultation.",
      company: "ACG Infotech Ltd.",
      subtitle: "Trusted Partner in ERP & Enterprise Solutions",
      extra: "Serving Fortune 500s to Emerging Corporates",
    },
  },
};

const ActionSection = () => {
  return (
    <div className="px-2 md:px-12">
      <SectionHeader
        heading={actionSectionData.sectionHeader.heading}
        description={actionSectionData.sectionHeader.description}
      />
      <div className="rounded overflow-hidden md:p-6 sm:p-4 p-2 shadow-[0px_0px_15px_rgba(0,0,0,0.09)]">
        <div className="grid lg:grid-cols-2  gap-4 ">
          <div className="md:p-8 p-4 flex flex-col justify-between  bg-gradient-to-r from-blue-500 to-blue-300 lg:rounded-tr-[50px] text-white rounded">
            <h2 className="sm:text-3xl text-2xl  md:text-4xl font-bold mb-4">
              {actionSectionData.leftSection.title}
            </h2>
            <p className="text-lg md:text-xl sm:mb-8 mb-4 opacity-90">
              "{actionSectionData.leftSection.description}"
            </p>
            <div className="flex sm:flex-row flex-col justify-center items-center sm:gap-6 gap-4">
              {actionSectionData.leftSection.buttons.map((button, index) => (
                <Link
                  to={button.link}
                  key={index}
                  className={`${
                    button.style === "primary"
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-transparent border border-white text-white hover:bg-white hover:text-blue-600"
                  } font-semibold py-3 px-6 rounded-xl transition duration-300 w-[80%] text-center`}
                >
                  {button.label}
                </Link>
              ))}
            </div>
            {/* Steps (dots) */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-10 h-1 rounded bg-blue-600"></div>
              <div className="w-10 h-1 rounded bg-gray-300"></div>
              <div className="w-10 h-1 rounded bg-gray-300"></div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative lg:rounded-bl-[50px] overflow-hidden rounded min-h-80">
            <img
              src={get_in_touch}
              alt="Get in Touch"
              className="w-full h-full object-cover"
            />
            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0  sm:p-4 p-2 text-blue-500 bg-white/50 backdrop-blur-sm sm:m-4 m-2 lg:rounded-bl-[40px] rounded border border-blue-500">
              <p className="italic sm:text-lg text-sm">
                "{actionSectionData.rightSection.overlay.quote}"
              </p>
              <p className="font-semibold italic">
                - {actionSectionData.rightSection.overlay.company}
              </p>
              <p className="text-sm italic">
                {actionSectionData.rightSection.overlay.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ActionSection;
