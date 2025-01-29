import React, { useContext } from "react";
import "./Gallery.css";
import { Context } from "../../ContextHook/Context";
import Button from "../Button/Button";

const Gallery = ({ data, onClick }) => {
  const { gallery } = useContext(Context);

  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <>
      <div className="gallery-container">
        <div className="heading">
          <h3>Memories</h3>
        </div>
        <div className="box">
          <div className="dream">
            {gallery.map((slide, index) => {
              if (index < 4) {
                return (
                  <div
                    onClick={() => handleClickImage(index)}
                    key={index}
                    className="image"
                  >
                    <img src={slide.src} alt={slide.description} />
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="dream">
            {gallery.map((slide, index) => {
              if (index >= 4 && index < 8) {
                return (
                  <div
                    onClick={() => handleClickImage(index)}
                    key={index}
                    className="image"
                  >
                    <img src={slide.src} alt={slide.description} />
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="dream">
            {gallery.map((slide, index) => {
              if (index >= 8 && index < 12) {
                return (
                  <div
                    onClick={() => handleClickImage(index)}
                    key={index}
                    className="image"
                  >
                    <img src={slide.src} alt={slide.description} />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        <Button btnText={"More"} btnLink={"#"} />
      </div>
    </>
  );
};

export default Gallery;
