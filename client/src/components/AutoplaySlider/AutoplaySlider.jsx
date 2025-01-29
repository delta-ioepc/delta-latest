import React from "react";
import "./AutoplaySlider.css";

const AutoplaySlider = ({ header, items }) => {
  return (
    <>
      <main>
        <h2>{header}</h2>
        <div
          className="slider"
          style={{
            "--width": "100px",
            "--height": "100px",
            "--quantity": items.length,
          }}
        >
          <div className="list">
            {items.map((item, index) => (
              <div
                key={index}
                className="item"
                style={{ "--position": item.id }}
              >
                <img src={item.image} alt={`Item ${item.id}`} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default AutoplaySlider;
