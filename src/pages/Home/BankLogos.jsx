import React from "react";
import { Box, Container, Typography } from "@mui/material";

const BankLogos = ({ bankLogos }) => {
  return (
    <Box sx={{ marginTop: "3rem", padding: "2rem 0", backgroundColor: "#f5f5f5" }}>
      <Container>
        <Typography variant="h4" component="h2" sx={{ textAlign: "center", marginBottom: "2rem", fontWeight: "bold" }}>
          Banks Associated with Us
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(3, 1fr)", md: "repeat(5, 1fr)" },
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          {bankLogos.map((logo, index) => (
            <Box
              key={index}
              component="img"
              src={logo?.logo}
              alt="Bank Logo"
              sx={{
                width: "100%",
                maxHeight: "80px",
                objectFit: "contain",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BankLogos;
