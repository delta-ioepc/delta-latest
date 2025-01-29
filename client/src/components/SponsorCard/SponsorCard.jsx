import React from "react";
import "./SponsorCard.css";
import Button from "../Button/Button";

const SponsorCard = ({ name, image, link }) => {
  return (
    <>
      <div className="sponsor-card">
        <div className="imgBx">
          <img src={image} alt="" />
          <h2>{name}</h2>
        </div>
        <div className="content">
          <Button
            btnLink={link}
            btnText={"Visit"}
            width={150}
            height={45}
            fontSize={16}
            padding={"10px 20px"}
            responsive={{
              "1024px": {
                height: "40px",
                width: "130px",
                fontSize: "14px",
                padding: "8px 16px",
              },
              "768px": {
                height: "35px",
                width: "100px",
                fontSize: "12px",
                padding: "6px 12px",
              },
            }}
            className="sponsor-btn"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </>
  );
};

export default SponsorCard;
