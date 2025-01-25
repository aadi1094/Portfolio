import  { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1E465A] text-white p-4 fixed inset-0 w-full h-fit">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="flex-shrink-0">
          <a href="/" className="text-3xl font-serif">
            Portfolio
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="hover:text-[#F4A261] transition duration-300 text-xl"
          >
            About Me
          </a>
          <a
            href="#skills"
            className="hover:text-[#F4A261] transition duration-300 text-xl"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-[#F4A261] transition duration-300 text-xl"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-[#F4A261] transition duration-300 text-xl"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white hover:text-[#F4A261] focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <a
            href="#about"
            className="block px-4 py-2 text-white hover:text-[#F4A261] transition duration-300"
          >
            About Me
          </a>
          <a
            href="#skills"
            className="block px-4 py-2 text-white hover:text-[#F4A261] transition duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block px-4 py-2 text-white hover:text-[#F4A261] transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-white hover:text-[#F4A261] transition duration-300"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
