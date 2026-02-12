import React, { useEffect } from "react";
import { MapPin, Lock, ThumbsUp } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // solo anima una vez
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <footer className="bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          
          {/* Columna 1 - Address */}
          <div className="fade-up delay-100" data-aos="fade-up">
            <h3 className="text-lg font-semibold mb-4 text-green-700 dark:text-green-400">
              <MapPin className="w-5 h-5 inline-flex items-center gap-2" strokeWidth={3} /> Address
            </h3>
            <address className="not-italic">
                <a 
                href="https://maps.app.goo.gl/TVkk5i4TmypxN7Y6A" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="crece"
                >
                  18497 Midland Blvd <br />
                  Nampa, Idaho <br />
                  United States <br />
                  ZIP 83687
                </a>
            </address>
            <a href="tel:+12084777960" className="crece">
              Phone: +1 (208) 477-7960
            </a> 
          </div>

          {/* Columna 2 - Privacy Policy */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-lg font-semibold mb-4 text-green-700 dark:text-green-400">
              <Lock className="w-5 h-5 inline-flex items-center gap-2"strokeWidth={3} /> Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy-policy"
                  className="crece"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="crece"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Redes Sociales iconos svg obtenidos de https://simpleicons.org/ */}
          <div data-aos="fade-up" data-aos-delay="500">
            <h3 className="text-lg font-semibold mb-4 text-green-700 dark:text-green-400">
              <ThumbsUp className="w-5 h-5 inline-flex items-center gap-2" strokeWidth={3} /> Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
                <a
                href="https://www.facebook.com/p/Green-country-lawn-care-100065310920759/"
                className="hover:text-green-600 transition"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img src="/icons/facebook.svg" className="w-6 h-6 crece" />
                </a>
              <a
                href="#"
                className="hover:text-green-600 transition"
                aria-label="Instagram"
              >
                <img src="/icons/instagram.svg" className="w-6 h-6 crece" />
              </a>
            </div>
          </div>

          {/* Columna 4 - Logo */}
          <div className="flex flex-col items-center md:items-start" data-aos="fade-up" data-aos-delay="700">
            <a href="/">
              <img
              src="/img/logo-transparente-greencountry.webp"
              alt="Green Country Logo"
              className="w-1/2 md:w-full crece"
              />
            </a>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Green Country Landscaping services LLC. All rights reserved. <a href="https://gha.mx" target="_blank" rel="noopener noreferrer" className="crece text-green-700 dark:text-green-400">Website by GHA.</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
