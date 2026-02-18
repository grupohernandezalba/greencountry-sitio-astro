import React from "react";

interface ButtonCallProps {
}

const ButtonCall: React.FC<ButtonCallProps> = () => {
  return (
      <a href="tel:+12084777960" className="boton crece" data-aos="zoom-in">
        Call Now!
      </a>
  );
};

export default ButtonCall;
