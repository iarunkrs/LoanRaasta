import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  Container,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import whyChooseUs from "../../assets/images/pexels-mikhail-nilov-8297163.jpg";

// const listItems = [
//   "Low and Competitive Interest Rates",
//   "Flexible Loan Tenures",
//   "Fast Loan Approval Process",
//   "No Hidden Charges",
//   "24/7 Customer Support",
// ];

const keyLoanFeatures = [
  "Low and Competitive Interest Rates",
  "Flexible Loan Tenures",
  "Fast Loan Approval Process",
  "No Hidden Charges",
  "24/7 Customer Support",
  "Loans starting from ₹5 lakh up to ₹100 crores",
  "Minimal documentation required",
  "Secure and transparent process",
];

const WhyChooseUs = () => {
  const theme = useTheme(); // Access the theme colors

  return (
    <Box>
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
              margin: "0 auto",
            }}
          />
          <Typography variant="h3">Why Choose Us?</Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            padding: "20px",
            gap: "5rem",
          }}
        >
          <Box>
            <Box
              component={"img"}
              src={whyChooseUs}
              alt=""
              sx={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Right side: Key Loan Features */}
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: theme.palette.text.primary,
                mb: 2,
              }}
            >
              Key Loan Features:
            </Typography>
            <List>
              {keyLoanFeatures.map((feature, index) => (
                <ListItem key={index}>
                  <CheckIcon
                    sx={{ color: theme.palette.primary.main, mr: 1 }}
                  />
                  <ListItemText
                    primary={feature}
                    sx={{ color: theme.palette.text.secondary }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
