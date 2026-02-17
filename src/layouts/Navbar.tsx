import React, { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Landscaping Services", href: "/services" },
  { label: "Nursery Products", href: "/nursery" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-green-700 dark:text-green-400">
          <img className="w-48" src="/img/logo-transparente-greencountry.webp" alt="Green Country Landscaping Services LLC" data-aos="zoom-in" data-aos-delay="100"/>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <li key={item.label} data-aos="zoom-in">
              <a
                href={item.href}
                className="crece px-2 py-2 text-gray-700 hover:text-green-600 transition dark:text-gray-300 dark:hover:text-green-400"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="tel:+12084777960" className="boton crece" data-aos="zoom-in">
              Call Now! 208-477-7960 
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
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
        <div className="md:hidden bg-white dark:bg-neutral-800 shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 transition dark:text-gray-300 dark:hover:text-green-400"
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
