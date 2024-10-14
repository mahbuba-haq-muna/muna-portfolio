import { useState } from "react";
import { FaBook, FaBriefcase, FaEnvelope, FaGraduationCap, FaHome, FaPen, FaRocket, FaUser } from "react-icons/fa";
import { Link } from "react-scroll";
import './home.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the drawer after clicking a link
  };

  return (
    <nav className="w-full bg-black shadow lg:relative">
      <div className="container mx-auto px-4  flex justify-between items-center">
        <img className="lg:w-44 lg:h-24 w-28" src="/src/assets/muna_logo-removebg-preview.png" alt="Logo" />

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button onClick={toggleNavbar} className="text-white font-semibold lg:text-lg">
            {isOpen ? (
              // Cross (X) Icon when the navbar is open
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon when the navbar is closed
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Drawer Menu */}
        <div
          className={`fixed inset-y-0 left-0 w-48 transform bg-slate-800 lg:bg-black ${
            isOpen ?  "translate-x-0" : "-translate-x-full" 
          } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row  lg:ml-auto space-y-4 lg:space-y-0 lg:space-x-8 p-6 lg:p-0">
            <li className="flex flex-row  lg:border-b-0 text-white font-semibold lg:text-lg gap-2 items-center hover:text-emerald-600 active:text-emerald-500">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={handleLinkClick}
                spy={true}
                activeClass="text-emerald-600 border-b-2 border-emerald-600" 
              >
                Home
              </Link>
              <FaHome />
            </li>
            <li className="flex flex-row text-white font-semibold lg:text-lg gap-2 items-center hover:text-emerald-600 ">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={handleLinkClick}
                activeClass="text-emerald-600 border-b-2 border-emerald-600" 
                spy={true}
              >
                About
              </Link>
              <FaUser className="text-sm" />
            </li>
            <li className="flex flex-row text-white font-semibold lg:text-lg gap-2 items-center hover:text-emerald-500 active:text-emerald-500">
              <Link
                to="skill"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={handleLinkClick}
                activeClass="active-link"
                spy={true}
              >
                Skills
              </Link>
              <FaPen className="text-sm" />
            </li>
            <li className="flex flex-row text-white font-semibold lg:text-lg gap-2 items-center hover:text-emerald-600 active:text-emerald-500">
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={handleLinkClick}
                activeClass="active-link"
                spy={true}
              >
                Services
              </Link>
              <FaRocket className="text-sm" />
            </li>
            <li className="flex flex-row text-white font-semibold lg:text-lg gap-2 items-center hover:text-emerald-600 active:text-emerald-500">
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={handleLinkClick}
                activeClass="active-link"
              >
                Experience
              </Link>
              <FaBriefcase className="text-sm" />
            </li>
            <li className="flex flex-row text-white font-semibold lg:text-lg gap-2 items-center hover:text-emerald-600 active:text-emerald-500">
              <Link
                to="edu"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={handleLinkClick}
                activeClass="active-link"
              >
                Education
              </Link>
              <FaGraduationCap className="lg:text-lg" />
            </li>
            <li className="flex flex-row text-white font-semibold lg:text-lg gap-2 items-center hover:text-emerald-600 active:text-emerald-500">
              <Link
                to="project"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={handleLinkClick}
                activeClass="active-link"
              >
                Projects
              </Link>
              <FaBook className="text-sm" />
            </li>
            <li className="flex flex-row text-white font-semibold lg:text-lg gap-2 items-center hover:text-emerald-600 active:text-emerald-500">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={handleLinkClick}
                activeClass="active-link"
              >
                Contact
              </Link>
              <FaEnvelope className="text-sm" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
