import React from "react";
import { Box, Container, Divider, Typography, useTheme } from "@mui/material";

const BankLogos = ({ bankLogos }) => {
  const theme = useTheme();
  return (
    <Box sx={{ marginTop: "3rem", padding: "2rem 0", backgroundColor: "#f5f5f5" }}>
      <Container>        
        <Box
          sx={{
            textAlign: "center",
            marginBottom: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Divider
            sx={{
              height: "5px",
              backgroundColor: `${theme.palette.primary.main}`,
              width: "100px",
              marginBottom: "1rem",
            }}
          />
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Banks Associated with Us
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(3, 1fr)", md: "repeat(7, 1fr)" },
            gap: "2rem",
            justifyContent: "center",
            mt:'5rem'
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
