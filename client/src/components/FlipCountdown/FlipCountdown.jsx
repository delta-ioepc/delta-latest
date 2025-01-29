import React from "react";
import "./FlipCountdown.css";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const FlipCountdown = () => {
  return (
    <>
      <h1 className="hero-header">TIME REMAINING...</h1>
      <FlipClockCountdown
        to={new Date("2025-01-31T04:00:00")} // Set your time here
        className="flip-clock"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          backgroundColor: "transparent",
          padding: "20px",
        }}
        hideOnComplete={false}
        labelStyle={{
          fontWeight: 700,
          textTransform: "uppercase",
          marginTop: "10px",
        }}
      ></FlipClockCountdown>
    </>
  );
};

export default FlipCountdown;
