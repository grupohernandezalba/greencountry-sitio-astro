import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          
          {/* Columna 1 - Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-700 dark:text-green-400">
              Dirección
            </h3>
            <p>
              123 Green Avenue <br />
              León, Guanajuato <br />
              México <br />
              CP 37000
            </p>
          </div>

          {/* Columna 2 - Privacy Policy */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-700 dark:text-green-400">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-green-600 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-green-600 transition"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Redes Sociales iconos svg obtenidos de https://simpleicons.org/ */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-700 dark:text-green-400">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
                <a
                href="https://www.facebook.com/p/Green-country-lawn-care-100065310920759/"
                className="hover:text-green-600 transition"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img src="/icons/facebook.svg" className="w-6 h-6" />
                </a>
              <a
                href="#"
                className="hover:text-green-600 transition"
                aria-label="Instagram"
              >
                <img src="/icons/instagram.svg" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Columna 4 - Logo */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-green-700 dark:text-green-400">
              Green Country
            </h3>
            <img
              src="/logo.png"
              alt="Green Country Logo"
              className="w-32"
            />
          </div>

        </div>

        {/* Línea inferior */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Green Country. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
