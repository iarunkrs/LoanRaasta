// src/components/TrendingLoans.js
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

const TrendingLoans = ({ loanData }) => {
  return (
    <Box>
      <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography variant="h4" component="h2">Trending Loans</Typography>
      </Box>
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
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
                border: `2px solid ${loan.borderColor}`,
              }}
            >
              <Box component={'img'}
                src={loan.image}
                alt={loan.title}
                style={{ width: '100%', height: 'auto', maxHeight: '100px', display: 'block', objectFit: 'contain', borderRadius: '8px' }}
              />
              <Typography variant="h6" component="h3" sx={{ margin: '1rem 0' }}>{loan.title}</Typography>
              <Button variant="contained" color={loan.buttonColor}>Apply Now</Button>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TrendingLoans;
