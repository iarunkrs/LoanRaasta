// src/pages/HomePage.js
import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import Slider from "react-slick";

// Testimonial Data
const testimonials = [
  {
    name: "John Doe",
    feedback:
      "The loan process was quick and easy. I got the funds I needed in no time, and the customer support was fantastic.",
    image: "https://via.placeholder.com/100x100?text=JD",
    role: "Small Business Owner",
  },
  {
    name: "Jane Smith",
    feedback:
      "This was the most seamless experience I’ve had with a loan application. The team was responsive and professional.",
    image: "https://via.placeholder.com/100x100?text=JS",
    role: "Freelancer",
  },
  {
    name: "Alice Brown",
    feedback:
      "I was able to secure a personal loan with minimal hassle. The interest rate was great, and the service was excellent.",
    image: "https://via.placeholder.com/100x100?text=AB",
    role: "Marketing Executive",
  },
];

// Slider settings for `react-slick`
const testimonialSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Testimonials = () => {
  return (
    <Box
        sx={{
          textAlign: "center",
          marginTop: "3rem",
          padding: "4rem 0",
          background: "linear-gradient(90deg, #1A4CFF 0%, #FF5722 100%)", // Gradient Background
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ color: "#fff", marginBottom: "2rem" }}
        >
          What Our Clients Say
        </Typography>

        <Container>
          {/* Slider for Testimonials */}
          <Slider {...testimonialSliderSettings}>
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                sx={{
                  padding: "2rem",
                  maxWidth: "600px",
                  margin: "0 auto",
                  backgroundColor: "#fff",
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                  borderRadius: "16px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.03)", // Slight zoom effect on hover
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.5rem",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {/* Avatar Image */}
                  <Avatar
                    src={testimonial.image}
                    alt={testimonial.name}
                    sx={{
                      width: "100px",
                      height: "100px",
                      border: "4px solid #1A4CFF",
                      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                    }}
                  />

                  <CardContent sx={{ textAlign: "center" }}>
                    {/* Testimonial Feedback */}
                    <Typography
                      variant="body1"
                      sx={{
                        marginBottom: "1.5rem",
                        fontStyle: "italic",
                        color: "#555",
                      }}
                    >
                      "{testimonial.feedback}"
                    </Typography>

                    {/* Client Name & Role */}
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.25rem",
                        color: "#333",
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ color: "#777" }}
                    >
                      {testimonial.role}
                    </Typography>
                  </CardContent>
                </Box>

                {/* Stylish Background Shape */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(0,0,0,0.1))",
                    zIndex: 1,
                  }}
                />
              </Card>
            ))}
          </Slider>
        </Container>
      </Box>
  );
};

export default Testimonials;
