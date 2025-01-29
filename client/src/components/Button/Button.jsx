import React, { useEffect, useState } from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({
  btnText,
  btnLink,
  height,
  width,
  fontSize,
  padding,
  responsive,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const buttonStyles = {
    height: height || "50px",
    width: width || "155px",
    fontSize: fontSize || "16px",
    padding: padding || "10px 20px",
  };

  const responsiveStyles =
    windowWidth <= 768 && responsive
      ? {
          height: responsive["768px"]?.height || "35px",
          width: responsive["768px"]?.width || "100px",
          fontSize: responsive["768px"]?.fontSize || "12px",
          padding: responsive["768px"]?.padding || "6px 12px",
        }
      : windowWidth <= 1024 && responsive
      ? {
          height: responsive["1024px"]?.height || "40px",
          width: responsive["1024px"]?.width || "130px",
          fontSize: responsive["1024px"]?.fontSize || "14px",
          padding: responsive["1024px"]?.padding || "8px 16px",
        }
      : {};

  const finalStyles = { ...buttonStyles, ...responsiveStyles };

  return (
    <>
      <div className="btn" style={finalStyles}>
        <Link to={btnLink} target="_blank">
          {btnText}
        </Link>
      </div>
    </>
  );
};

export default Button;
