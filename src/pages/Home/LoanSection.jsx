// src/components/LoanSection.js
import React from "react";
import { Box, Typography, Button, Container, Divider, useTheme } from "@mui/material";

const LoanSection = ({ loanSections }) => {
  const theme = useTheme();
  return (
    <Container>
      {loanSections.map((loan, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" },
            alignItems: "center",
            gap: {
              xs:'2rem',
              md:'4rem',
            },
            padding: "2rem 0",
            mb:2
          }}
        >
          <Box component="img" src={loan.image} alt={loan.title} sx={{ width: { xs: "100%", md: "50%" },  }} />
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Box
          sx={{
            textAlign: "left",
            mt: 6,
            marginBottom: "2rem",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <Divider
            sx={{
              height: "5px",
              backgroundColor: `${theme.palette.primary.main}`,
              width: "100px",
            }}
          />
          <Typography variant="h4">{loan.title}</Typography>
        </Box>
            {/* <Typography variant="h4" component="h2" sx={{ marginBottom: "1rem" }}>{loan.title}</Typography> */}
            <Typography variant="body1" sx={{ marginBottom: "1.5rem" }}>{loan.paragraph}</Typography>
            <Button variant="outlined" color="primary">Apply Now</Button>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default LoanSection;
