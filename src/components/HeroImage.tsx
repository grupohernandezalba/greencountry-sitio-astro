import React from "react";

interface HeroImageProps {
  text: string;
  image: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ text, image }) => {
  return (
    <div
        className="w-full mt-0 bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url('/img/${image}')`, minHeight: '400px' }}
        data-aos="fade-up"
      >
        <h2 className="text-white shadow text-3xl md:text-4xl font-bold text-center" data-aos="fade-in" data-aos-delay="500">
          { text }
        </h2>
    </div>
  );
};

export default HeroImage;