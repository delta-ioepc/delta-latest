import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "../Testimonial/Testimonial";
import "./CustomSlider.css";
import { testimonials } from "../../assets/data/testimonials";

const CustomSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1054,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1.75,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 657,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2 className="testimonial-header">See what our sponsors have to say?</h2>
      <div className="slider-wrapper">
        <Slider {...settings} className="innerBox">
          {testimonials.map((testimonial, index) => {
            return (
              <Testimonial
                image={testimonial.src}
                name={testimonial.name}
                testimonial={testimonial.testimonial}
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default CustomSlider;
