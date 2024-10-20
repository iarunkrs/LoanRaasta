import React, { useState } from "react";
import { Box, Divider, Typography, useTheme, Collapse, IconButton, Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import dummyImg from '../../assets/images/pexels-khwanchai-12885861.jpg';

const ProcessSteps = ({ processSteps = [] }) => {
  const theme = useTheme();
  const [expandedStep, setExpandedStep] = useState(null); // No step expanded initially

  const handleStepClick = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  const placeholderImage = dummyImg; // Use the imported dummy image directly

  return (
    <Box
      sx={{
        textAlign: "center",
        marginTop: "3rem",
        position: "relative",
        paddingBottom: "3rem",
        overflow:'hidden'
      }}
    >
      <Box sx={{ display:{xs:'none', md:'block'}, position:'absolute', backgroundColor:'primary.main', width:'200px', height:'100%', left:'0', top:'10px' }}></Box>
      <Container>
      
        <Box
          sx={{
            textAlign: "left",
            mt: 6,
            marginBottom: "4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
          <Typography variant="h3">Loan Rasta For You</Typography>
        </Box>

        {/* Grid Layout */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, 
            alignItems: 'center',
            gap: "2rem",
            position: "relative",
            boxSizing: 'border-box',
          }}
        >
          {/* Left Side Image */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              padding: "1rem",
              // borderRadius: "8px",
              // boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            <Box
              component="img"
              src={expandedStep !== null ? processSteps[expandedStep]?.icon : placeholderImage} // Display placeholder by default, change on click
              alt={expandedStep !== null ? processSteps[expandedStep]?.title : "Placeholder"}
              sx={{
                width: "100%",
                // height: "auto",

                // maxWidth: "350px", 
                height:'400px',
                objectFit:'contain'
              }}
            />
          </Box>

          {/* Right Side Steps */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              justifyContent: "flex-start",
            }}
          >
            {processSteps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: "#f5f5f5",
                  padding: "1rem",
                  cursor: "pointer",
                  borderBottom: `4px solid ${theme.palette.primary.main}`,
                  borderLeft: '1px solid #d8dce7',
                  borderRight: '1px solid #d8dce7',
                  borderTop: '1px solid #d8dce7',
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
                onClick={() => handleStepClick(index)}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography variant="h6" component="h3" sx={{ marginBottom: "1rem", textAlign: 'left' }}>
                    {step.title}
                  </Typography>
                  <IconButton>
                    {expandedStep === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                </Box>
                <Collapse in={expandedStep === index}>
                  <Typography variant="body1" sx={{ textAlign: 'left' }}>{step.description}</Typography>
                </Collapse>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProcessSteps;
