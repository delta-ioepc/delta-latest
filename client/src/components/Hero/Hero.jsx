import React from "react";
import "./Hero.css";
import FlipCountdown from "../FlipCountdown/FlipCountdown";
import ImageSwiper from "../ImageSwiper/ImageSwiper";
import AutoplaySlider from "../AutoplaySlider/AutoplaySlider";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { societies } from "../../assets/data/societies";
import { sliderSponsors } from "../../assets/data/sponsors";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <FlipCountdown />
        <div className="logo-text">
          <img src="/delta-logo.svg" alt="" />
          <h1>
            DELTA <span>2025</span>
          </h1>
          <p>National Level TechFest</p>
        </div>
        <VideoPlayer />
        <div className="about-hero">
          <h1>
            About <span>DELTA</span>
          </h1>
          <p>
            Delta is more than an organization; it's an umbrella that shelters
            seven distinct societies, each representing a faculty at Purwanchal
            Campus. These societies form the backbone of Delta, and their
            representatives play crucial roles in the organization's dynamic and
            collaborative organizing committee. We believe in nurturing talent
            by inviting experts to provide specialized training to our students.
            This commitment extends to pre-events, where participants are
            immersed in three days of creative and technological activities.
          </p>
          <Button
            btnText={"DELTA 2025 Theme"}
            btnLink={
              "https://drive.google.com/file/d/1jceXL7BpNgb8RuSzx6Fgilt6UtrgpKq_/view?usp=sharing"
            }
            width={225}
          />
        </div>
        <AutoplaySlider header={"Our Sponsors"} items={societies} />
        <AutoplaySlider header={"Our Societies"} items={sliderSponsors} />
        <div className="swipe">
          <ImageSwiper />
        </div>
      </div>
    </>
  );
};

export default Hero;
