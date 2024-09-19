import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Container } from '@mui/material';

const AboutUsPage = () => {
  return (
    <Box>
       {/* Banner Section */}
       <Box 
        sx={{ 
          position: 'relative',
          height: '300px',
          backgroundImage: 'url(https://via.placeholder.com/1200x300?text=LoanRaasta+Banner)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: '2rem'
        }}
      >
        <Box 
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: '#fff',
            background: 'rgba(0, 0, 0, 0.5)',
            padding: '1rem',
            borderRadius: '8px',
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ fontFamily: 'Outfit', color: '#fff', fontWeight: 'bold' }}>
            Welcome to LoanRaasta
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Outfit', color: '#fff', lineHeight: 1.6 }}>
            Your trusted partner for all your lending needs.
          </Typography>
        </Box>
      </Box>
      <Container>
      <Box sx={{ padding: '2rem', backgroundColor: '#f4f4f9' }}>
      
     

      {/* Section 1: Introduction */}
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ fontFamily: 'Outfit', color: '#000', textAlign: 'center', marginBottom: '1.5rem' }}
      >
        About Us
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ fontFamily: 'Outfit', textAlign: 'center', marginBottom: '2rem', lineHeight: 1.8 }}
      >
        At <strong>LoanRaasta</strong>, we are dedicated to helping individuals and businesses achieve their financial goals by providing fast, 
        flexible, and affordable loan solutions. With years of experience in the lending industry, our team is committed to delivering exceptional 
        service and personalized financial options for every unique need.
      </Typography>
      
      {/* Section 2: Our Mission */}
      <Box sx={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{ fontFamily: 'Outfit', color: '#000' }}
        >
          Our Mission
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ fontFamily: 'Outfit', marginBottom: '1rem', lineHeight: 1.8 }}
        >
          Our mission is to empower our clients with accessible and transparent lending services. We believe in simplifying the loan process, 
          making it easier for everyone to access the financial support they need to grow, thrive, and succeed. Whether it’s securing personal loans, 
          business funding, or debt consolidation, we are here to make your journey smooth and stress-free.
        </Typography>
      </Box>

      {/* Section 3: Why Choose Us */}
      <Box sx={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{ fontFamily: 'Outfit', color: '#000', marginBottom: '1rem' }}
        >
          Why Choose Us
        </Typography>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 3, 
          justifyContent: 'center',
          background: 'linear-gradient(to right, #a2c2e4, #e0f7ff)', 
          padding: '2rem', 
          borderRadius: '8px'
        }}>
          <Box sx={{ textAlign: 'left', fontFamily: 'Outfit', lineHeight: 1.8 }}>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
              <strong>Fast and Simple Applications:</strong> Our streamlined process ensures quick and hassle-free applications.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
              <strong>Competitive Rates:</strong> Enjoy the best rates and flexible plans tailored to your needs.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
              <strong>Expert Support:</strong> Receive personalized assistance from our knowledgeable team.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
              <strong>Transparent Transactions:</strong> We guarantee clear terms with no hidden fees.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
              <strong>Customer-Centric Approach:</strong> Your financial success is our priority.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Section 4: Gallery */}
      <Box sx={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{ fontFamily: 'Outfit', color: '#000' }}
        >
          Our Journey in Pictures
        </Typography>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: 2, 
          justifyContent: 'center' 
        }}>
          {[
            { image: 'https://via.placeholder.com/100x100?text=Team', title: 'Our Dedicated Team' },
            { image: 'https://via.placeholder.com/100x100?text=Clients', title: 'Happy Clients' },
            { image: 'https://via.placeholder.com/100x100?text=Office', title: 'Our Office' },
            { image: 'https://via.placeholder.com/100x100?text=Community', title: 'Community Outreach' }
          ].map((item, index) => (
            <Card key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Outfit' }}>
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Section 5: Our Values */}
      <Box sx={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{ fontFamily: 'Outfit', color: '#000' }}
        >
          Our Values
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ fontFamily: 'Outfit', marginBottom: '1rem', lineHeight: 1.8 }}
        >
          We operate on a foundation of trust, integrity, and transparency. Our core values drive everything we do:
        </Typography>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: 2, 
          justifyContent: 'center'
        }}>
          <Box sx={{ textAlign: 'left', fontFamily: 'Outfit', lineHeight: 1.8 }}>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}><strong>Integrity:</strong> We believe in honest communication and ethical practices.</Typography>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}><strong>Transparency:</strong> We ensure full disclosure of terms and conditions, leaving no room for confusion.</Typography>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}><strong>Customer-first:</strong> Your needs are our priority, and we aim to offer solutions tailored to your specific financial situation.</Typography>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}><strong>Innovation:</strong> We continuously improve our processes and services to make lending easier and more efficient for you.</Typography>
          </Box>
        </Box>
      </Box>

      {/* Section 6: Call to Action */}
      <Box 
        sx={{ 
          textAlign: 'center', 
          padding: '2rem', 
          backgroundColor: '#e0f7ff', 
          borderRadius: '8px', 
          marginTop: '2rem' 
        }}
      >
        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{ fontFamily: 'Outfit', color: '#000' }}
        >
          Ready to Take the Next Step?
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ fontFamily: 'Outfit', marginBottom: '1rem', lineHeight: 1.8 }}
        >
          Whether you're seeking financial support for personal growth or business expansion, we're here to help. 
          Contact us today to get started with your loan application or learn more about our services.
        </Typography>
      </Box>
    </Box>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
