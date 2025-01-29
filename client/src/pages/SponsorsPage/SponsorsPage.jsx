import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { sponsors } from "../../assets/data/sponsors";
import SponsorCard from "../../components/SponsorCard/SponsorCard";
import "./SponsorsPage.css";

const SponsorsPage = () => {
  return (
    <>
      <Navbar />
      <div className="sponsors">
        <div className="tag">
          <h1>Title Sponosor</h1>
          <div className="sponsor-container">
            {sponsors.map((sponsor, index) => {
              if (sponsor.tag === "Title") {
                return (
                  <SponsorCard
                    key={index}
                    name={sponsor.name}
                    image={sponsor.image}
                    link={sponsor.link}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="tag">
          <h1>Co-Sponosor</h1>
          <div className="sponsor-container">
            {sponsors.map((sponsor, index) => {
              if (sponsor.tag === "Co") {
                return (
                  <SponsorCard
                    key={index}
                    name={sponsor.name}
                    image={sponsor.image}
                    link={sponsor.link}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="tag">
          <h1>Associate Sponsor</h1>
          <div className="sponsor-container">
            {sponsors.map((sponsor, index) => {
              if (sponsor.tag === "Associate") {
                return (
                  <SponsorCard
                    key={index}
                    name={sponsor.name}
                    image={sponsor.image}
                    link={sponsor.link}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="tag">
          <h1>General Sponsor</h1>
          <div className="sponsor-container">
            {sponsors.map((sponsor, index) => {
              if (sponsor.tag === "General") {
                return (
                  <SponsorCard
                    key={index}
                    name={sponsor.name}
                    image={sponsor.image}
                    link={sponsor.link}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="tag">
          <h1>Platinum Sponsor</h1>
          <div className="sponsor-container">
            {sponsors.map((sponsor, index) => {
              if (sponsor.tag === "Platinum") {
                return (
                  <SponsorCard
                    key={index}
                    name={sponsor.name}
                    image={sponsor.image}
                    link={sponsor.link}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="tag">
          <h1>Media Partner</h1>
          <div className="sponsor-container">
            {sponsors.map((sponsor, index) => {
              if (sponsor.tag === "Media Partner") {
                return (
                  <SponsorCard
                    key={index}
                    name={sponsor.name}
                    image={sponsor.image}
                    link={sponsor.link}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="tag">
          <h1>Radio Partner</h1>
          <div className="sponsor-container">
            {sponsors.map((sponsor, index) => {
              if (sponsor.tag === "Radio Partner") {
                return (
                  <SponsorCard
                    key={index}
                    name={sponsor.name}
                    image={sponsor.image}
                    link={sponsor.link}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="tag">
          <h1>Coaching Partner</h1>
          <div className="sponsor-container">
            {sponsors.map((sponsor, index) => {
              if (sponsor.tag === "Coaching Partner") {
                return (
                  <SponsorCard
                    key={index}
                    name={sponsor.name}
                    image={sponsor.image}
                    link={sponsor.link}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="tag">
          <h1>Food Partner</h1>
          <div className="sponsor-container">
            {sponsors.map((sponsor, index) => {
              if (sponsor.tag === "Food Partner") {
                return (
                  <SponsorCard
                    key={index}
                    name={sponsor.name}
                    image={sponsor.image}
                    link={sponsor.link}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="tag">
          <h1>Community Partner</h1>
          <div className="sponsor-container">
            {sponsors.map((sponsor, index) => {
              if (sponsor.tag === "Community Partner") {
                return (
                  <SponsorCard
                    key={index}
                    name={sponsor.name}
                    image={sponsor.image}
                    link={sponsor.link}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="tag">
          <h1>Volunteer Partner</h1>
          <div className="sponsor-container">
            {sponsors.map((sponsor, index) => {
              if (sponsor.tag === "Volunteer Partner") {
                return (
                  <SponsorCard
                    key={index}
                    name={sponsor.name}
                    image={sponsor.image}
                    link={sponsor.link}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SponsorsPage;
