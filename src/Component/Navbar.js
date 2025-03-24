import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Scroll effect to toggle shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-gradient duration-500 ${hasShadow ? "shadow-2xl bg-opacity-10 backdrop-blur-md shadow-teal-700 px-14 py-3 bg-white" : "bg-transparent "

        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-14">
        <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-sky-400 to-cyan-500">
          TechBrand
        </h1>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="Home">
            <a
              href="#home"
              className="text-teal-400 font-bold hover:text-pink-400 transition"
            >
              Home
            </a>
          </Link>
          <Link to="AboutPage">
            <a
              href="#about"
              className="text-teal-400 font-bold hover:text-pink-400 transition"
            >
              About
            </a>
          </Link>
        
            <a
              href="#services_is_not_available"
              className="text-teal-400 font-bold hover:text-pink-400 transition"
            >
              Services
            </a>
        
            <a
              href="#contact_page_is_not_available"
              className="text-teal-400 font-bold hover:text-pink-400 transition"
            >
              Contact
            </a>
      
        </div>

        {/* Mobile Menu toggle button */}
        <button
          id="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden text-gray-300 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>



      </div>
      {/* this is moblie menu */}
      <div
        id="mobile-menu"
        className={`${menuOpen ? "block" : "hidden"
          } md:hidden bg-gray-800 bg-opacity-70 backdrop-blur-lg px-4 py-2`}
      >
        <a
          href="#home"
          className="block text-teal-500 hover:text-white py-2 transition"
        >
          Home
        </a>
        <a
          href="#about"
          className="block text-teal-500 hover:text-white py-2 transition"
        >
          About
        </a>
        <a
          href="#services"
          className="block text-teal-500 hover:text-white py-2 transition"
        >
          Services
        </a>
        <a
          href="#contact"
          className="block text-teal-500 hover:text-white py-2 transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
