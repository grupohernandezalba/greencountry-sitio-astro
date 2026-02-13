import React from "react";

interface BannerProps {
  title: string;
  image: string;
}

const Banner: React.FC<BannerProps> = ({ title, image }) => {
  return (
    <div className="w-full mt-25 md:mt-0" data-aos="fade-down">
        <img 
          src={`/img/${image}`}
          alt={title} 
          className="w-full h-full object-cover"
        />
    </div>
  );
};

export default Banner;
