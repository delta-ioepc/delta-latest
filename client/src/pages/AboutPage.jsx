import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import CustomSlider from "../components/CustomSlider/CustomSlider";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <About />
      {/* <CustomSlider /> */}
      <Footer />
    </>
  );
};

export default AboutPage;
