import React, { useRef, useEffect } from "react";
import "./AnimatedBg.css";

const AnimatedBg = () => {
  const bgAnimation = useRef();

  const numberOfColorBoxes = 200;

  useEffect(() => {
    for (let i = 0; i < numberOfColorBoxes; i++) {
      const colorBox = document.createElement("div");
      colorBox.classList.add("colorBox");
      bgAnimation.current.append(colorBox);
    }
  }, []);

  return (
    <>
      <div class="bgAnimation" id="bgAnimation" ref={bgAnimation}>
        <div class="backgroundAmim"></div>
      </div>
    </>
  );
};

export default AnimatedBg;
