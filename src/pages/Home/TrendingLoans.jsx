import React from "react";
import { Box, Typography, Container, Button, useTheme, Divider } from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  border: 'none',
  background: theme.palette.background.default, // Use a background color
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // Center the content
  padding: '0.5rem 1rem', // Add padding for better size
  borderRadius: '4px', // Rounded corners
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: 'white',
    transform: 'scale(1.05)', // Slightly enlarge the button on hover
  },
}));

const TrendingLoans = ({ loanData }) => {
  const theme = useTheme();

  return (
    <Box sx={{ mt:10, mb:5,  }}>
      <Container>
        <Box sx={{ textAlign: 'left', mt:6, marginBottom: '4rem', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'1.5rem' }}>
          <Divider sx={{ height:'5px', backgroundColor:`${theme.palette.primary.main}`, width:'100px' }} />
          <Typography variant="h3">
            Trending Loans
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr', // 1 column for extra small screens
              sm: 'repeat(2, 1fr)', // 2 columns for small screens
              md: 'repeat(3, 1fr)', // 3 columns for medium screens
              lg: 'repeat(3, 1fr)', // 4 columns for large screens
              xl: 'repeat(4, 1fr)'
            },
            gap: '20px', // Adjust space between cards
          }}
        >
          {loanData.map((loan, index) => (
            <Box
              key={index}
              sx={{
                padding: 5,
                textAlign: 'left',
                borderTop: `4px solid ${theme.palette.primary.main}`,
                borderLeft: '1px solid #d8dce7',
                borderRight: '1px solid #d8dce7',
                borderBottom: '1px solid #d8dce7',
                backgroundColor: 'transparent',
                transition: 'background-color 0.3s, color 0.3s',
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                },
                cursor:'pointer'
              }}
              className="custom-card"
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
                <AccountBalanceIcon sx={{ fontSize:'50px', color: 'inherit' }} />

                <Typography variant="h6" component="h3" sx={{ color: 'inherit' }}>
                  {loan.title}
                </Typography>

                <Typography sx={{ marginBottom: '1rem', color: 'inherit', minHeight: '80px' }}>
                  {loan.description}
                </Typography>
              </Box>
              <StyledButton>
                Apply Now
                <TrendingFlatIcon sx={{ marginLeft: '0.5rem' }} />
              </StyledButton>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TrendingLoans;
