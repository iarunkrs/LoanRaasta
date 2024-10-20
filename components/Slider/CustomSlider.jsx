// src/components/Slider/Slider.js
import React from "react";
import Slider from "react-slick";
import { Box, Button, Typography } from "@mui/material";

import slideOne from '../../assets/images/image1.jpg';
import slideTwo from '../../assets/images/image2.jpg';
import slideThree from '../../assets/images/image3.jpg';
import slideFour from '../../assets/images/BusinessHandshakeSilhouette.jpeg';
import slideFive from '../../assets/images/image5.jpg';

// Data for the slides
const slidesData = [
  {
    image: slideOne,
    heading: "Get Your Personal Loan Today!",
    paragraph: "Looking for a flexible solution for your financial needs? Our personal loans offer competitive rates and easy repayment options tailored just for you.",
  },
  {
    image: slideTwo,
    heading: "Empower Your Career with a Professional Loan",
    paragraph: "Need funds for professional growth or development? Our professional loan helps you secure the financing to take your career to the next level.",
  },
  {
    image: slideThree,
    heading: "Reliable and Secure Loan Options",
    paragraph: "Our secure loan services offer peace of mind with flexible collateral options and low-interest rates, ensuring you have the financial security you need.",
  },
  {
    image: slideFour,
    heading: "Fuel Your Business Ambitions with a Business Loan",
    paragraph: "Expand your business, launch new projects, or manage working capital with our customized business loan solutions designed for your success.",
  },
  {
    image: slideFive,
    heading: "Looking for Any Type of Loan?",
    paragraph: "Whether it's for personal, business, or professional needs, we’ve got the loan solutions tailored to meet your unique financial situation. Let’s get started!",
  },
];

const CustomSlider = () => {
  // Settings for react-slick
  const settings = {
    dots: true,             // Pagination dots
    infinite: true,         // Loop through slides
    speed: 500,             // Transition speed
    slidesToShow: 1,        // Show one slide at a time
    slidesToScroll: 1,      // Scroll one slide at a time
    autoplay: true,         // Auto-slide
    autoplaySpeed: 5000,    // Delay between auto-slide
    arrows: false,          // Hides the next/prev arrows (you can enable if desired)
  };

  return (
    <Slider {...settings}>
      {slidesData.map((slide, index) => (
        <Box
          key={index}
          sx={{
            height: "100vh",
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            padding:'none'
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.5)", // Black overlay
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
            }}
          >
            <Box sx={{ width: { xs: '90%', sm: '80%', md: '60%' } }}>
              <Typography variant="h3" component="h1" gutterBottom>
                {slide.heading}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{ margin: "20px 0", fontSize: "1.2rem" }}
              >
                {slide.paragraph}
              </Typography>
              <Button variant="contained" color="primary">
                Apply Now
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default CustomSlider;
