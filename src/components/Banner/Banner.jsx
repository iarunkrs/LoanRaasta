import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import image10 from '../../assets/images/image10.jpg';

const loanTypes = [
  "MSME Loan",
  "Project Loan",
  "Factory Loan",
  "CC/OD Loan",
  "Business Loan",
  "Personal Loan",
  "House Loan"
];

const Banner = () => {
  const theme = useTheme();
  const [currentText, setCurrentText] = useState("");
  const [loanTypeIndex, setLoanTypeIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typing effect logic
  useEffect(() => {
    const handleTyping = () => {
      const currentLoanType = loanTypes[loanTypeIndex];
      if (isDeleting) {
        setCurrentText(currentLoanType.substring(0, currentText.length - 1));
        setTypingSpeed(50); // Faster while deleting
      } else {
        setCurrentText(currentLoanType.substring(0, currentText.length + 1));
        setTypingSpeed(150); // Slower while typing
      }

      // When word is fully typed or deleted
      if (!isDeleting && currentText === currentLoanType) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoanTypeIndex((prevIndex) => (prevIndex + 1) % loanTypes.length);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [currentText, isDeleting, typingSpeed, loanTypeIndex]);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, // One column on small screens, two on larger screens
        height: {
          xs: 'auto',
          sm: 'auto',
          md: 'calc(100vh - 5rem)',
          lg: 'calc(100vh - 5rem)',
          xl: 'calc(100vh - 5rem)'
        },
        width: '100%',
      }}
    >
      {/* Left Side - Text Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start', // Aligns the text to the left
          padding: {
            xs:'1rem',
            sm:'2rem',
            md:'2rem 4rem',
            lg:'2rem 7rem',
            xl:'2rem 7rem'
          },
          position: 'relative',
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', color: '#000', marginBottom: '0.5rem' }}
        >
          Ignite Your Aspirations with Financial Freedom
        </Typography>
        <Typography color='primary' variant="h3" sx={{ marginBottom: '1rem' }}>
          {currentText}
          <span
            style={{
              color: theme.palette.primary.main, // Primary color for the loan types
              borderRight: `2px solid ${theme.palette.primary.main}`, // Blinking cursor
              paddingLeft: '5px',
            }}
          >
          </span>
        </Typography>
        <Typography variant="body1" sx={{ color: '#000', marginBottom: '1rem', lineHeight: 1.5 }}>
        Unleash your potential with our customized loan solutions, designed to empower your journey towards success—be it for business, personal growth, or homeownership.
        </Typography>
        <Button 
          variant="outlined" 
          color="primary" 
        >
          Call Us
        </Button>
      </Box>

      {/* Right Side - Image Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main', // Right section background color
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Placeholder for the image */}
        <Box
          component={'img'}
          src={image10} // Replace with your actual image URL
          alt="Loan Image"
          style={{
            maxWidth: '100%',
            height: '100%',
            objectFit: 'cover', // Ensure the image covers the area nicely
          }}
        />
      </Box>
    </Box>
  );
};

export default Banner;
