import React from "react";

interface BannerProps {
  title: string;
  image: string;
}

const Banner: React.FC<BannerProps> = ({ title, image }) => {
  return (
    <div
      className="w-full h-full bg-cover mt-22 md:mt-25 bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('/img/${image}')`, minHeight: '200px', maxHeight: '200px' }}
      data-aos="fade-down"
      >
      <h1 className="text-white text-shadow-lg text-3xl md:text-4xl font-bold text-center" data-aos="fade-in" data-aos-delay="500">
        {title}
      </h1>
    </div>
    
  );
};

export default Banner;
