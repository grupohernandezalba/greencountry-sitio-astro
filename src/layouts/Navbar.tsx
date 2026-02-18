import React, { useState } from "react";
import ButtonCall from "../components/ButtonCall";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Landscaping services", href: "/services" },
  { label: "Nursery products", href: "/nursery" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-2 md:px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="/">
          <img className="w-36 md:w-48" src="/img/logo-transparente-greencountry.webp" alt="Green Country Landscaping Services LLC" data-aos="zoom-in" data-aos-delay="100"/>
        </a>
        <a
            href="https://www.facebook.com/p/Green-country-lawn-care-100065310920759/"
            className="text-green-900"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
          >
          <img src="/icons/facebook.svg" className="w-6 h-6 crece" />
        </a>
		<a
			href="#"
			className="text-green-900"
			aria-label="Instagram"
            data-aos="zoom-in"
		>
			<img src="/icons/instagram.svg" className="w-6 h-6 crece" />
		</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <li key={item.label} data-aos="zoom-in">
              <a
                href={item.href}
                className="crece px-2 py-2 text-green-900 hover:text-green-600 transition "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ButtonCall data-aos="zoom-in" />
        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700 "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl">&times;</span>
          ) : (
            <span className="text-2xl">&#9776;</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white  shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
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
    </nav>
  );
};

export default Navbar;
