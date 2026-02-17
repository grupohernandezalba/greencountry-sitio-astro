import React from "react";

interface Contenido2Props {
  title: string;
  subtitle: string;
  contenido: string;
  image: string;
}

const Contenido2: React.FC<Contenido2Props> = ({ title, subtitle, contenido, image }) => {
  return (
    <div className="container bg-white mx-auto px-4 py-4 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div data-aos="fade-up" data-aos-delay="300">
				<img 
					src={`/img/${image}`} 
					alt="Green Country services" 
					className="w-full md:w-3/4 md:mx-auto rounded shadow"
				/>
			</div>
			<div className="flex flex-col justify-center" data-aos="fade-up">
				<h3 className="text-2xl md:text-3xl font-bold text-stone-800">
				{title}
				</h3>
				<h4 className="text-lg md:text-2xl font-bold text-stone-800 mb-4">
					{subtitle}
				</h4>
				<p className="text-stone-700 leading-relaxed">
					{contenido}
				</p>
			</div>
        </div>
    </div>
  );
};

export default Contenido2;