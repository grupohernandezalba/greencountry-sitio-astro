import React, { useState } from "react";
import ButtonCall from "../components/ButtonCall";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Landscaping", href: "/services" },
  { label: "Lawn care", href: "/lawncare" },
  { label: "Nursery", href: "/nursery" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isRequestOpen, setIsRequestOpen] = useState<boolean>(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="mx-auto px-2 md:px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="/">
          <img className="w-36 md:w-48" src="/img/logo-transparente-greencountry.webp" alt="Green Country Landscaping Services LLC" data-aos="zoom-in" data-aos-delay="100" />
        </a>
        
          href="https://www.facebook.com/share/1C1n8FetMw/"
          className="text-green-900"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="zoom-in"
        >
          <img src="/icons/facebook.svg" className="w-6 h-6 crece" />
        </a>
        
          href="https://www.instagram.com/greencountry.llc"
          className="text-green-900"
          aria-label="Instagram"
          data-aos="zoom-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/instagram.svg" className="w-6 h-6 crece" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 items-center">
          {navItems.map((item) => (
            <li key={item.label} data-aos="zoom-in">
              
                href={item.href}
                className="crece px-2 py-2 text-green-900 hover:text-green-600 transition "
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="relative" data-aos="zoom-in">
            <a href="#"
              onClick={() => setIsRequestOpen(!isRequestOpen)}
              className="crece px-2 py-2 text-green-900 hover:text-green-600 transition flex items-center"
            >
              Request an estimate
            </a>
            {isRequestOpen && (
              <ul className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md overflow-hidden border border-gray-100 z-50">
                <li>
                  <a href="https://app.urable.com/form/QNnbmt80F0QyjZWrhi2D/ipUbzYWI67lZS41nzPZL" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-green-900 hover:bg-green-50 transition border-b border-gray-50">
                    Lawn care estimate
                  </a>
                </li>
                <li>
                  <a href="https://app.urable.com/form/QNnbmt80F0QyjZWrhi2D/zNODElhUVki9OYVUUCpm" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-green-900 hover:bg-green-50 transition">
                    Landscaping estimate
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <ButtonCall data-aos="zoom-in" />
        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700 "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-3xl">&times;</span>
          ) : (
            <span className="text-3xl">&#9776;</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                
                  href={item.href}
                  className="text-green-900 hover:text-green-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="md:hidden max-w-7xl mx-auto px-12 md:px-6 py-2 pt-0 flex justify-between items-center text-center">
        Request an estimate:
        <a href="https://app.urable.com/form/QNnbmt80F0QyjZWrhi2D/ipUbzYWI67lZS41nzPZL" target="_blank" rel="noopener noreferrer" className="text-sm text-green-900 hover:text-green-600 transition border-b border-gray-50">
          Lawn care
        </a>
        or
        <a href="https://app.urable.com/form/QNnbmt80F0QyjZWrhi2D/zNODElhUVki9OYVUUCpm" target="_blank" rel="noopener noreferrer" className="text-sm text-green-900 hover:text-green-600 transition">
          Landscaping
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
