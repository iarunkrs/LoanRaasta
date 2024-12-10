import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Container } from '@mui/material';

const AboutUsPage = () => {
  return (
    <Box>
       {/* Banner Section */}
       <Box 
        sx={{ 
          position: 'relative',
          height: {
            xs:'200px',
            md:'300px',
            lg:'400px'
          },
          backgroundImage: 'url(https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
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
        At Loanraasta.com, we are dedicated to empowering individuals and businesses with the financial tools, expertise, and guidance they need to thrive. Founded on a commitment to transparency, integrity, and customer success, we offer a wide range of financial services designed to meet the unique needs of our clients.
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ fontFamily: 'Outfit', textAlign: 'center', marginBottom: '2rem', lineHeight: 1.8 }}
      >
       We are here to help you navigate the complex world of finance with confidence. At Loanraasta.com, we believe that financial success starts with trust, and we work tirelessly to earn yours.
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
          To provide innovative and accessible financial solutions, fostering financial security and success for all our clients.
        </Typography>
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
        {/* <Typography 
          variant="body1" 
          sx={{ fontFamily: 'Outfit', marginBottom: '1rem', lineHeight: 1.8 }}
        >
          We operate on a foundation of trust, integrity, and transparency. Our core values drive everything we do:
        </Typography> */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: 2, 
          justifyContent: 'center'
        }}>
          <Box sx={{ textAlign: 'left', fontFamily: 'Outfit', lineHeight: 1.8 }}>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}><strong>Integrity:</strong> We hold ourselves to the highest ethical standards, ensuring transparency in everything we do.</Typography>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}><strong>Client-Centric:</strong> Your goals are our goals. We take a personalized approach to help you achieve your financial objectives.</Typography>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}><strong>Excellence:</strong> We strive for excellence in service, delivering exceptional results and expert advice every time.</Typography>
          </Box>
        </Box>
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
          background: 'linear-gradient(to right, #ffa0ab, #f2082300)', 
          padding: '2rem', 
          borderRadius: '0px'
        }}>
          <Box sx={{ textAlign: 'left', fontFamily: 'Outfit', lineHeight: 1.8 }}>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
              Experienced, knowledgeable professionals who are committed to your financial success.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
              Customized financial solutions that align with your goals and needs.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
              A trusted partner dedicated to guiding you through every stage of your financial journey.
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" sx={{ marginBottom: '2rem', mt:'1rem' }}>
        Let us help you turn your financial aspirations into reality. Contact us today to learn how we can support your financial future.
        </Typography>
      </Box>

     

      {/* Section 4: Gallery */}
      {/* <Box sx={{ textAlign: 'center', marginBottom: '3rem' }}>
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
      </Box> */}

      

      {/* Section 6: Call to Action */}
      <Box 
        sx={{ 
          textAlign: 'center', 
          padding: '2rem', 
          background: '#f20823', 
          borderRadius: '0px', 
          marginTop: '2rem' 
        }}
      >
        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{ fontFamily: 'Outfit', color: '#fff' }}
        >
          Ready to Take the Next Step?
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ fontFamily: 'Outfit', marginBottom: '1rem', lineHeight: 1.8, color: '#fff' }}
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
