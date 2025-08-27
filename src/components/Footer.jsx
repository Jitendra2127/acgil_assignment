import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const iconMap = {
  FaFacebook: FaFacebook,
  FaTwitter: FaTwitter,
  FaInstagram: FaInstagram,
  FaLinkedin: FaLinkedin,
};

const footerData = {
  company: {
    name: "ACGIL",
    description:
      "ACGIL is founded and run by professionals from premier NIT/IIT, including the UNIVERSITY OF WALES (UK). ACGIL has been offering web-based software solution including ERP, HMIS and CRM on pan India and overseas. Having presence in industry verticals like Manufacturing, Trading, Warehouse, SCM, EPC, Construction, Real-estate, Hospitals, Buying House, Calibration assessment.",
  },
  socialLinks: [
    { icon: "FaFacebook", link: "/" },
    { icon: "FaTwitter", link: "/" },
    { icon: "FaInstagram", link: "/" },
    { icon: "FaLinkedin", link: "/" },
  ],
  links: {
    aboutUs: {
      title: "About Us",
      items: [
        { label: "Company History", link: "/" },
        { label: "Meet the Team", link: "/" },
        { label: "Careers", link: "/" },
      ],
    },
    services: {
      title: "Our Services",
      items: [
        { label: "Manufacturing ERP", link: "/" },
        { label: "Supply Chain Management", link: "/" },
        { label: "Calibration / Testing Labs", link: "/" },
        { label: "Buying House Agencies", link: "/" },
      ],
    },
    contact: {
      title: "Contact Us",
      email: "demo@gmail.com",
      phone: "098189 93537",
      address: "H-107, H Block, Sector 63, Noida, Uttar Pradesh 201309",
    },
  },
  bottom: {
    rights: "All rights reserved.",
    company: "© 2025 ACGIL Software Solutions Pvt. Ltd.",
    termsLink: "/",
    privacyLink: "/",
  },
};

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="px-4 md:px-12 pt-16 pb-6 mx-auto sm:px-6 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Section */}
          <div>
            <div className="flex justify-center text-blue-500 sm:justify-start">
              <span className="text-2xl font-bold ">
                {footerData.company.name}
              </span>
            </div>

            <p className="mt-6 text-gray-400 sm:text-left">
              {footerData.company.description}
            </p>

            {/* Social Icons */}
            <div className="my-4 flex gap-4">
              {footerData.socialLinks.map((social, index) => {
                const Icon = iconMap[social.icon];
                return (
                  <Link
                    key={index}
                    to={social.link}
                    className="border w-fit p-2 rounded-full cursor-pointer hover:border-blue-500 group"
                  >
                    <Icon className="text-white text-2xl group-hover:text-blue-500" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* About Us */}
            <div className=" text-left">
              <p className="text-lg font-medium text-blue-500">
                {footerData.links.aboutUs.title}
              </p>
              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  {footerData.links.aboutUs.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.link}
                        className="text-white transition hover:text-white/75"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Services */}
            <div className="text-left">
              <p className="text-lg font-medium text-blue-500">
                {footerData.links.services.title}
              </p>
              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  {footerData.links.services.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.link}
                        className="text-white transition hover:text-white/75"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact */}
            <div className="text-left">
              <p className="text-lg font-medium text-blue-500">
                {footerData.links.contact.title}
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex  justify-start gap-1.5">
                  <MdEmail className="text-xl text-white" />
                  <span className="text-white">
                    {footerData.links.contact.email}
                  </span>
                </li>
                <li className="flex items-center justify-start gap-1.5">
                  <MdPhone className="text-xl text-white" />
                  <span className="text-white">
                    {footerData.links.contact.phone}
                  </span>
                </li>
                <li className="flex items-start justify-start gap-1.5">
                  <IoLocationSharp className="text-xl text-white" />
                  <address className="-mt-0.5 not-italic text-white">
                    {footerData.links.contact.address}
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 mt-12 border-t border-gray-800">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-400">
              <span className="block sm:inline">
                {footerData.bottom.rights}
              </span>{" "}
              <Link
                to={footerData.bottom.termsLink}
                className="text-blue-500 underline hover:text-blue-500/75"
              >
                Terms & Conditions
              </Link>{" "}
              <span>&middot;</span>{" "}
              <Link
                to={footerData.bottom.privacyLink}
                className="text-blue-500 underline hover:text-blue-500/75"
              >
                Privacy Policy
              </Link>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              {footerData.bottom.company}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
