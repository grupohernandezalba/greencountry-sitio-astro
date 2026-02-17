import React from "react";

interface TextoProps {
  title: string;
  contenido: string;
}

const Texto: React.FC<TextoProps> = ({ title, contenido }) => {
  return (
    <div className="container bg-white mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 gap-8">
          <div className="flex flex-col justify-center" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-stone-800">
              {title}
            </h2>
            <p className="text-stone-700 leading-relaxed">
                {contenido}
            </p>
          </div>
        </div>
    </div>
  );
};

export default Texto;