// src/components/LoanSection.js
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const LoanSection = ({ loanSections }) => {
  return (
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
          <Box component="img" src={loan.image} alt={loan.title} sx={{ width: { xs: "100%", md: "50%" }, borderRadius: "8px" }} />
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography variant="h4" component="h2" sx={{ marginBottom: "1rem" }}>{loan.title}</Typography>
            <Typography variant="body1" sx={{ marginBottom: "1.5rem" }}>{loan.paragraph}</Typography>
            <Button variant="contained" color="primary">Apply Now</Button>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default LoanSection;
