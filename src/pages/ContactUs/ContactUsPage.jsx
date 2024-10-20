// src/pages/ContactPage.js
import React from 'react';
import { Box, Typography, TextField, Button, Container, Avatar } from '@mui/material';

const ContactUsPage = () => {
  return (
    <Box>
    {/* Banner Image */}
    <Box
    sx={{
      position: 'relative',
      width: '100%',
      height: '300px',
      overflow: 'hidden',
      mb: 4,
    }}
  >
    <img
      src="https://via.placeholder.com/1200x400"
      alt="Contact Banner"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff', mb: 1 }}>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ color: '#fff' }}>
        We're here to assist you
      </Typography>
    </Box>
  </Box>
    <Container sx={{ padding: '0', maxWidth: 'md' }}>
      

      {/* Main Content Section */}
      <Box sx={{ padding: '4rem 2rem' }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#6d72f6' }} gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#333' }}>
            We’re here to assist you with all your loan inquiries. Please fill out the form below or contact us through the provided information.
          </Typography>
        </Box>

        {/* Main Grid Layout */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          {/* Contact Information Section */}
          <Box
            sx={{
              backgroundColor: '#f5f5f5',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
              src="https://via.placeholder.com/100"
              alt="Contact"
              sx={{ width: 100, height: 100, mb: 2 }}
            />
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Get in Touch
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, textAlign: 'center' }}>
              Our team is here to help you with any questions you may have. Reach out to us through any of the following methods:
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Email:</strong> <a href="mailto:contact@loanraasta.com">contact@loanraasta.com</a>
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Phone:</strong> +1-800-LOAN-RASTA
            </Typography>
            <Typography variant="body1">
              <strong>Address:</strong> 123 Loan Street, Finance City, FC 45678
            </Typography>
          </Box>

          {/* Contact Form Section */}
          <Box
            component="form"
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#ffffff',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Contact Form
            </Typography>
            <TextField 
              variant="outlined"
              label="Name"
              required
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField 
              variant="outlined"
              label="Email"
              type="email"
              required
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField 
              variant="outlined"
              label="Subject"
              required
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField 
              variant="outlined"
              label="Message"
              multiline
              rows={4}
              required
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" type="submit">
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
    </Box>
  );
};

export default ContactUsPage;
