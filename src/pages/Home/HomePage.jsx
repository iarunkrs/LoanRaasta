// src/pages/HomePage.js
import React from "react";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import Slider from "../../components/Slider/CustomSlider";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Testimonials from "../../components/Slider/Testimonials";
import businessImg from '../../assets/images/Tiny bankrupt business people getting subsidy from government.jpg'
import personalImg from '../../assets/images/Gold coins and banknotes 3d cartoon style icon.jpg'
import professionalImg from '../../assets/images/Stack of money and gold coins 3d cartoon style icon.jpg'
import secureImg from '../../assets/images/Mar-Business_11.jpg'
import instantImg from '../../assets/images/Wavy_Bus-21_Single-10.jpg'

import business from '../../assets/images/BusinessHandshakeSilhouette.jpeg'
import personal from '../../assets/images/BusinessHandshakeSilhouette.jpeg'
import professional from '../../assets/images/BusinessHandshakeSilhouette.jpeg'
import secure from '../../assets/images/BusinessHandshakeSilhouette.jpeg'
import instant from '../../assets/images/BusinessHandshakeSilhouette.jpeg'

import oneClick from '../../assets/images/one-click.png'
import onlineDocumentaion from '../../assets/images/online-documentation.png'
import quickDisbursal from '../../assets/images/quick-disbursal.png'

import plImg from '../../assets/images/personalized-loan.png'
import oddImg from '../../assets/images/ondaydisburse.png'
import securedbImg from '../../assets/images/secure-db.png'
import mdImg from '../../assets/images/minimal-docs.png'
import uexpImg from '../../assets/images/userexp.png'
import lowroiImg from '../../assets/images/lowroi.png'

import blog1 from '../../assets/images/Euro Banknotes Illuminated.jpeg' 
import blog2 from '../../assets/images/BusinessHandshakeSilhouette.jpeg' 
import blog3 from '../../assets/images/Mar-Business_11.jpg' 

import bank1 from '../../assets/images/ub.png'
import bank2 from '../../assets/images/ubi.png'
import bank3 from '../../assets/images/sbi.png'
import bank4 from '../../assets/images/sib.png'
import bank5 from '../../assets/images/hsbc.png'
import bank6 from '../../assets/images/bb.png'
import bank7 from '../../assets/images/boi.png'
import bank8 from '../../assets/images/ib.png'
import bank9 from '../../assets/images/icici.png'
import bank10 from '../../assets/images/yesb.jpeg'
import bank11 from '../../assets/images/Indian_Bank_logo.svg.png'

// bank logos
const bankLogos = [
bank1,
bank2,
bank3,
bank4,
bank5,
bank6,
bank7,
bank8,
bank9,
bank10,
bank11
];

// Loan Data
const loanSections = [
  {
    title: "Business Loan",
    paragraph:
      "Expand your business, launch new projects, or manage working capital with our customized business loan solutions designed for your success.",
    image: business,
  },
  {
    title: "Personal Loan",
    paragraph:
      "Looking for a flexible solution for your financial needs? Our personal loans offer competitive rates and easy repayment options tailored just for you.",
    image: personal,
  },
  {
    title: "Professional Loan",
    paragraph:
      "Need funds for professional growth or development? Our professional loan helps you secure the financing to take your career to the next level.",
    image: professional,
  },
  {
    title: "Secure Loan",
    paragraph:
      "Our secure loan services offer peace of mind with flexible collateral options and low-interest rates, ensuring you have the financial security you need.",
    image: secure,
  },
  {
    title: "Instant Loan",
    paragraph:
      "Get immediate access to funds with our hassle-free instant loan options, perfect for urgent financial needs.",
    image: instant,
  },
];

// Process Steps Data
const processSteps = [
  {
    title: "One Click Apply",
    description: "Simply click, fill in the form, and submit your loan application in minutes.",
    icon: oneClick, 
  },
  {
    title: "Online Documentation",
    description: "Upload your documents online from the comfort of your home without any hassle.",
    icon: onlineDocumentaion,
  },
  {
    title: "Quick Approval & Disbursal",
    description: "Get your loan approved and the money disbursed within hours, all online.",
    icon: quickDisbursal,
  },
];

const loanData = [
  {
    title: "Business Loan",
    image: businessImg,
    borderColor: "#FF5722", // Orange
    buttonColor: "secondary", // Refers to MUI's secondary color
  },
  {
    title: "Personal Loan",
    // image: "https://via.placeholder.com/300x200?text=Perosnal+Loan",
    image: personalImg,
    borderColor: "#1A4CFF", // Blue
    buttonColor: "primary", // Refers to MUI's primary color
  },
  {
    title: "Professional Loan",
    image: professionalImg,
    borderColor: "#4CAF50", // Green
    buttonColor: "success", // Refers to MUI's success color
  },
  {
    title: "Secure Loan",
    image: secureImg,
    borderColor: "#9C27B0", // Purple
    buttonColor: "secondary",
  },
  {
    title: "Instant Loan",
    image: instantImg,
    borderColor: "#F44336", // Red
    buttonColor: "error", // Refers to MUI's error color
  },
];

// Why Choose Us Data
const whyChooseUs = [
  {
    title: "Personalized Loan",
    description: "We offer loans tailored to your unique financial needs.",
    icon: plImg, 
  },
  {
    title: "One-day Approval & Disbursal",
    description: "Quick approval and disbursal to get you the funds when you need them.",
    icon: oddImg,
  },
  {
    title: "Secured Database",
    description: "Your data is stored securely with top-notch encryption.",
    icon: securedbImg,
  },
  {
    title: "Minimal Documents",
    description: "We minimize paperwork to make the process fast and simple.",
    icon: mdImg,
  },
  {
    title: "User-Friendly Experience",
    description: "Our application process is designed with ease of use in mind.",
    icon: uexpImg,
  },
  {
    title: "Lowest Interest Rate",
    description: "We offer some of the lowest interest rates in the market.",
    icon: lowroiImg,
  },
];

// Blog Data
const blogs = [
  {
    title: "The Future of Personal Loans in 2024",
    description: "An in-depth look at the trends shaping personal loans this year.",
    image: blog1,
    date: "September 10, 2024",
    link: "/blogs/future-of-personal-loans-2024",
  },
  {
    title: "5 Tips for Quick Loan Approval",
    description: "Learn how to get your loan approved quickly with these top tips.",
    image: blog2,
    date: "August 25, 2024",
    link: "/blogs/quick-loan-approval-tips",
  },
  {
    title: "Understanding Loan Interest Rates",
    description: "A comprehensive guide to understanding how loan interest rates work.",
    image: blog3,
    date: "July 30, 2024",
    link: "/blogs/understanding-loan-interest-rates",
  },
];

const HomePage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', }}>
      {/* Slider Section */}
      <Slider />

      {/* Trending Loans Section */}
     <Box>
     <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography variant="h4" component="h2">
          Trending Loans
        </Typography>
      </Box>

      <Container>
        {/* Loan Grid Section */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr 1fr' }, // Responsive grid
          gap: '2rem',
          marginTop: '2rem',
        }}
      >
        {loanData.map((loan, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: '#f5f5f5',
              padding: '1rem',
              borderRadius: '8px',
              textAlign: 'center',
              border: `2px solid ${loan.borderColor}`, // Unique border color
            }}
          >
            <Box component={'img'}
              src={loan.image}
              alt={loan.title}
              style={{ width: '100%', height: 'auto', maxHeight:'100px', display:'block', objectFit:'contain', borderRadius: '8px' }}
            />
            <Typography variant="h6" component="h3" sx={{ margin: '1rem 0' }}>
              {loan.title}
            </Typography>
            <Button variant="contained" color={loan.buttonColor}>
              Apply Now
            </Button>
          </Box>
        ))}
      </Box>
      </Container>
     </Box>

      {/* Loan Sections with Alternating Layout */}
      <Box>
        <Container>
          
       {loanSections.map((loan, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" },
            alignItems: "center",
            gap: "2rem",
            padding: "2rem 0",
          }}
        >
          {/* Image Section */}
          <Box
            component="img"
            src={loan.image}
            alt={loan.title}
            sx={{ width: { xs: "100%", md: "50%" }, borderRadius: "8px" }}
          />

          {/* Content Section */}
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography variant="h4" component="h2" sx={{ marginBottom: "1rem" }}>
              {loan.title}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "1.5rem" }}>
              {loan.paragraph}
            </Typography>
            <Button variant="contained" color="primary">
              Apply Now
            </Button>
          </Box>
        </Box>
      ))}
        </Container>
      </Box>

      {/* Loan Provision Walkthrough - How It Works */}
      <Box sx={{ textAlign: "center", marginTop: "3rem" }}>
        <Typography variant="h4" component="h2" sx={{ marginBottom: "2rem" }}>
          Loan Provision Walkthrough - How It Works
        </Typography>

        {/* Process Steps Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gap: "2rem",
          }}
        >
          {processSteps.map((step, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#f5f5f5",
                padding: "2rem",
                borderRadius: "8px",
                textAlign: "center",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
                },
              }}
            >
              {/* Step Icon */}
              <Box component="img" src={step.icon} alt={step.title} sx={{ width: "100px", margin: "0 auto 1rem" }} />

              {/* Step Title */}
              <Typography variant="h6" component="h3" sx={{ marginBottom: "1rem" }}>
                {step.title}
              </Typography>

              {/* Step Description */}
              <Typography variant="body1">{step.description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

       {/* Banks Associated with Us Section */}
       <Box sx={{ marginTop: "3rem", padding: "2rem 0", backgroundColor: "#f5f5f5" }}>
        <Container>
          <Typography
            variant="h4"
            component="h2"
            sx={{ textAlign: "center", marginBottom: "2rem" }}
          >
            Banks Associated with Us
          </Typography>

          {/* Bank Logos Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)", // 2 columns for small screens
                sm: "repeat(3, 1fr)", // 3 columns for small screens
                md: "repeat(4, 1fr)", // 4 columns for medium screens
                lg: "repeat(5, 1fr)", // 5 columns for large screens
              },
              gap: "1.5rem",
              justifyContent: "center",
            }}
          >
            {bankLogos.map((logo, index) => (
              <Box
                key={index}
                component="img"
                src={logo}
                alt={`Bank ${index + 1}`}
                sx={{
                  width: "100%",
                  height:'100px',
                  objectFit:'contain',
                  maxWidth: "150px",
                  margin: "0 auto", 
                  padding: "1rem",
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ marginTop: "3rem", padding: "2rem 0", backgroundColor: "#ffffff" }}>
        <Container>
          <Typography
            variant="h4"
            component="h2"
            sx={{ textAlign: "center", marginBottom: "2rem" }}
          >
            Why Choose Us
          </Typography>

          {/* Why Choose Us Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",          // 1 column for small screens
                sm: "1fr 1fr",      // 2 columns for small screens
                md: "1fr 1fr 1fr",  // 3 columns for medium screens
              },
              gap: "2rem",
            }}
          >
            {whyChooseUs.map((item, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: "#f5f5f5",
                  padding: "2rem",
                  borderRadius: "8px",
                  textAlign: "center",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
                  },
                }}
              >
                {/* Icon */}
                <Box component="img" src={item.icon} alt={item.title} sx={{ width: "100px", margin: "0 auto 1rem" }} />

                {/* Title */}
                <Typography variant="h6" component="h3" sx={{ marginBottom: "1rem" }}>
                  {item.title}
                </Typography>

                {/* Description */}
                <Typography variant="body1">{item.description}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Latest Blogs Section */}
      <Box sx={{ textAlign: "center", marginTop: "3rem", mb:5 }}>
        <Typography variant="h4" component="h2" sx={{ marginBottom: "2rem" }}>
          Latest Blogs
        </Typography>

        <Container>
          {/* Blog Cards Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
              gap: "2rem",
            }}
          >
            {blogs.map((blog, index) => (
              <Card
                key={index}
                sx={{
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: "0px 6px 20px rgba(0,0,0,0.1)" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
                
              >
                <CardMedia component="img" height="140" image={blog.image} alt={blog.title} />
                <CardContent sx={{ height:'150px' }}>
                  <Typography gutterBottom variant="h6" component="h4">
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#000"
                    sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
                  >
                    <AccessTimeIcon fontSize="small" sx={{ marginRight: "0.5rem" }} />
                    {blog.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", paddingBottom: "1rem" }}>
                  <Button size="small" color="primary">
                    Read More
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>

          {/* View All Blogs Button */}
          <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
            <Button variant="contained" color="primary">
              View All Blogs
            </Button>
          </Box>
        </Container>
      </Box>

      <Testimonials />

    </Box>
  );
};

export default HomePage;
