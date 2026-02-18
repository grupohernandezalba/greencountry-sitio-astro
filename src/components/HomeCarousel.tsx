import { useState } from "react";

export default function HomeCarousel() {
const slides = [
	{
		image: "/img/slider2-greencountry.webp",
		title: "Trusted landscaping services",
		subtitle: "Expert landscaping solutions",
		link: "/about"
	},
	{
		image: "/img/slider4-greencountry.webp",
		title: "Hardscape and outdoor living spaces",
		subtitle: "Custom-designed hardscape",
		link: "/services"
	},
	{
		image: "/img/slider3-greencountry.webp",
		title: "Nursery products",
		subtitle: "High-quality plants and trees",
		link: "/nursery"
	}
];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
	<div className="relative w-full mx-auto overflow-hidden">
	  
	  {/* Slides */}
	  <div
		className="flex transition-transform duration-500 ease-in-out"
		style={{ transform: `translateX(-${index * 100}%)` }}
	  >
		{slides.map((src, i) => (
		  <div key={i} className="relative w-full shrink-0">
			<img
			  src={src.image}
			  alt={`Project ${i + 1}`}
			  className="w-full h-128 md:h-screen object-cover"
			/>
			<div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
				<h2 className="text-2xl md:text-5xl font-bold text-white mb-2 text-shadow-lg mx-6 text-center">
					{src.title}
				</h2>
				<p className=" md:text-lg text-white/90 mb-6 text-shadow-lg mx-10 text-center">
					{src.subtitle}
				</p>
				<a href={src.link} className="boton crece px-6 py-2">
					More information
				</a>
			</div>
		  </div>
		))}
	  </div>

	  {/* Botón anterior */}
	  <button
		onClick={prevSlide}
		className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm transition"
	  >
		❮
	  </button>

	  {/* Botón siguiente */}
	  <button
		onClick={nextSlide}
		className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm transition"
	  >
		❯
	  </button>

	</div>
  );
}
