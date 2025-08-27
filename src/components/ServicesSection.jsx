import Card from "./common/Card";
import { BsStack } from "react-icons/bs";
import { FaHeadset, FaIndustry, FaRecycle } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { MdOutlineLocalHospital } from "react-icons/md";
import { RiBuilding2Line } from "react-icons/ri";
import { TbGauge } from "react-icons/tb";
import SectionHeader from "./common/SectionHeader";

const servicesSectionData = {
  heading: "WHAT WE OFFER",
  description:
    "Explore our range of ERP solutions designed to simplify operations, improve efficiency, and transform the way your business works.",
  services: [
    {
      id: 1,
      icon: FaIndustry,
      title: "Manufacturing ERP",
      description:
        "Customized Cloud hosted ERP solution from ACGIL is suitable for all sized manufacturing companies...",
      buttonText: "Learn More",
      buttonLink: "/services/manufacturing",
    },
    {
      id: 2,
      icon: FiBox,
      title: "Supply Chain Management (SCM)",
      description:
        "Fully integrated supply chain management software to manage supply chain planning, inventory,...",
      buttonText: "Learn More",
      buttonLink: "/services/scm",
    },
    {
      id: 3,
      icon: FaHeadset,
      title: "CRM - Lead Management & Service Management",
      description:
        "Online CRM software is an integrated system that manages sales and marketing relation, QC services,...",
      buttonText: "Learn More",
      buttonLink: "/services/crm",
    },
    {
      id: 4,
      icon: RiBuilding2Line,
      title: "ERP for Real Estate, EPC & Infra Companies",
      description:
        "Online ERP for Construction by ACGIL is a reliable business management software that caters...",
      buttonText: "Learn More",
      buttonLink: "/services/real-estate",
    },
    {
      id: 5,
      icon: MdOutlineLocalHospital,
      title: "Hospital Management System (HMIS)",
      description:
        "Hospital Management Information System (HMIS or HIS) is primarily meant...",
      buttonText: "Learn More",
      buttonLink: "/services/hmis",
    },
    {
      id: 6,
      icon: TbGauge,
      title: "Calibration / Testing Labs",
      description:
        "Best calibration management software to manage calibration & testing labs activities smartly...",
      buttonText: "Learn More",
      buttonLink: "/services/calibration",
    },
    {
      id: 7,
      icon: BsStack,
      title: "Buying House Agencies",
      description:
        "Cloud ERP solution for buying house and agency that provide alerts for Time & Activity (TnA), generate...",
      buttonText: "Learn More",
      buttonLink: "/services/buying-house",
    },
    {
      id: 8,
      icon: FaRecycle,
      title: "Solid, Liquid / Hazardous Waste Management ERP",
      description:
        "ACGIL offers an integrated ERP solution covering effluent treatment plant, solid waste disposal, analytical...",
      buttonText: "Learn More",
      buttonLink: "/services/waste-management",
    },
  ],
};

const ServicesSection = () => {
  return (
    <div className="px-2 md:px-12">
      <SectionHeader
        heading={servicesSectionData.heading}
        description={servicesSectionData.description}
      />
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesSectionData.services.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
