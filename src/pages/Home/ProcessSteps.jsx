// src/components/ProcessSteps.js
import React from "react";
import { Box, Typography } from "@mui/material";

const ProcessSteps = ({ processSteps }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        marginTop: "3rem",
        position: "relative",
        paddingBottom: "3rem",
      }}
    >
      <Typography variant="h4" component="h2" sx={{ marginBottom: "2rem" }}>
        Loan Rasta For You
      </Typography>

      {/* Road and Milestones */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Road (Visible CSS road) */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            right: "0",
            height: "8px", // Increased height for better visibility
            backgroundColor: "#757575", // Darker road color
            "&::before": {
              content: '""',
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              width: "100%",
              height: "8px", // Match the height of the road
              backgroundImage: "linear-gradient(to right, #fff 25%, transparent 25%)",
              backgroundSize: "40px 8px", // Adjust for larger dash marks
              zIndex: 2,
            },
          }}
        />

        {/* Milestones */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gap: "2rem",
            position: "relative",
            zIndex: 3, // Ensure milestones are on top of the road
          }}
        >
          {processSteps.map((step, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                backgroundColor: "#f5f5f5",
                padding: "2rem",
                borderRadius: "8px",
                textAlign: "center",
                boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              {/* Icon */}
              <Box
                component="img"
                src={step.icon}
                alt={step.title}
                sx={{
                  width: "80px",
                  margin: "0 auto 1rem",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  padding: "10px",
                  border: "2px solid #ccc",
                }}
              />

              {/* Title and Description */}
              <Typography variant="h6" component="h3" sx={{ marginBottom: "1rem" }}>
                {index + 1}st Milestone: {step.title}
              </Typography>
              <Typography variant="body1">{step.description}</Typography>

              {/* Step Marker */}
              <Box
                sx={{
                  position: "absolute",
                  top: "-30px", // Position marker above the milestone
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#1976D2",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  zIndex: 1,
                }}
              >
                {index + 1}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProcessSteps;
