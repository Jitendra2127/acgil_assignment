import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

// Navigation items
const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/services", label: "Services" },
  { path: "/products", label: "Products" },
  { path: "/contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50  ">
      <div className="container mx-auto flex justify-between items-center py-3 px-2 md:px-12">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ACGIL
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="flex space-x-6">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `relative group pb-1 transition duration-300 ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-[2px] bg-blue-600 transition-all duration-300 ease-in-out
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-3xl flex flex-col space-y-1 focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <HiOutlineBars3 />
        </button>
      </div>

      {/* Backdrop + Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-opacity  bg-gray-50/50 duration-300 ${
          isOpen ? "opacity-10\0 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {/* Drawer */}
        <div
          className={`absolute  top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4  text-3xl bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <RxCross2 />
          </button>

          {/* Nav Links */}
          <nav className="mt-16 flex flex-col space-y-4 px-6">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button in Drawer */}
          <div className="mt-6 px-6">
            <Link
              to="/contact"
              className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
