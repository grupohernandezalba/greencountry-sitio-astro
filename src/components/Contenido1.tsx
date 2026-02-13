import React from "react";

interface Contenido1Props {
  title: string;
  subtitle: string;
  contenido: string;
  image: string;
}

const Contenido1: React.FC<Contenido1Props> = ({ title, subtitle, contenido, image }) => {
  return (
    <div className="container bg-white mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center" data-aos="fade-up">
            <h1 className="text-4xl font-bold text-stone-800">
              {title}
            </h1>
            <h2 className="text-2xl font-bold text-stone-800 mb-4">
                {subtitle}
            </h2>
            <p className="text-stone-700 leading-relaxed">
                {contenido}
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <img 
              src={`/img/${image}`} 
              alt="Green Country services" 
              className="w-full"
            />
          </div>
        </div>
    </div>
  );
};

export default Contenido1;