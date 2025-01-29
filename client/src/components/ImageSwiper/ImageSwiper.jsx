import React from "react";
import "./ImageSwiper.css";
import logo from "../../assets/model.png";
import { highlights } from "../../assets/data/gallery";

const ImageSwiper = () => {
  return (
    <>
      <div className="banner">
        <div className="swiper-slider">
          {highlights.map((highlight) => (
            <div
              className="item"
              style={{ "--position": highlight.id }}
              key={highlight.id}
            >
              <img src={highlight.src} alt="" />
            </div>
          ))}
        </div>
        <div className="content">
          <h1 data-content="">Highlights</h1>
          <div
            className="model"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ImageSwiper;
