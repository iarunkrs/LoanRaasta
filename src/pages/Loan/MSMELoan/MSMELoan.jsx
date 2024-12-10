import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
  Card,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const MSMELoan = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: { xs: 2, sm: 4 },
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: 2, sm: 4 },
          marginBottom: 4,
          backgroundColor: "#efefef",
          borderRadius: 3,
        }}
      >
        <Box sx={{ maxWidth: { xs: "100%", sm: "50%" }, color: "#fff" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
              fontSize: { xs: "1.4rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            MSME Loans
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" },
              maxWidth: { xs: "100%", sm: "80%" },
              marginBottom: 3,
            }}
          >
            An MSME Loan (Micro, Small, and Medium Enterprise Loan) is a financial product designed to provide funding and financial support to small and medium-sized businesses in India. These loans aim to foster entrepreneurship, growth, and expansion in the MSME sector, which is crucial for the overall economic development of the country.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "10px 20px",
              fontSize: { xs: "1rem", sm: "1.1rem" },
              boxShadow: 3,
            }}
          >
            Apply Now
          </Button>
        </Box>
        <Box
          sx={{
            maxWidth: { xs: "100%", sm: "50%" },
            marginTop: { xs: 3, sm: 0 },
          }}
        >
          <img
            src="https://cdn.pixabay.com/photo/2024/01/13/09/18/coins-8505363_1280.jpg"
            alt="Business Growth"
            style={{ width: "100%", borderRadius: 8 }}
          />
        </Box>
      </Box>

      <Divider sx={{ marginBottom: 4 }} />

      {/* Features Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
         <Box sx={{ flex: 1, position:{ xs:'unset', sm:'unset', md:'sticky' }, top:{ xs:'unset', sm:'unset', md:'6rem' } }}>
          <img
            src="https://images.pexels.com/photos/7731326/pexels-photo-7731326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Loan Features"
            style={{ width: "100%", maxHeight:'440px', objectFit:'cover', borderRadius: 8 }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            marginLeft: { xs: 0, sm: 3 },
            color: "#333",
            marginBottom: { xs: 3, sm: 0 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              marginBottom: 3,
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
            }}
          >
            Key Features of MSME Loans
          </Typography>
          <List>
              <Typography>
              <strong>1. Purpose:</strong> MSME loans can be used for:
              </Typography>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Working capital requirements" />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Purchase of machinery or equipment" />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Expansion of business operations" />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Infrastructure development" />
              </ListItem>
          </List>

          <List>
              <Typography>
              <strong>2. Eligibility:</strong> Typically, MSME loans are available to businesses that fall within the Micro, Small, or Medium category based on the definition set by the Government of India. The classification is generally based on the annual turnover and investment in equipment or plant & machinery. The loan eligibility criteria include:
              </Typography>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="A registered MSME business" />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="A stable financial track record" />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="A good credit score " />
              </ListItem>
             
          </List>

          <List>
              <Typography>
              <strong>3. Loan Amount:</strong> MSME loans can range from small amounts (₹1 lakh to ₹500 lakh), depending on the need and capacity to repay.
              </Typography>
              
          </List>

          <List>
              <Typography>
              <strong>4. Interest Rates:</strong> Interest rates on MSME loans typically range from 8% to 12%, depending on the nature of the business, its financial health, the loan amount, and the lender’s policies.
              </Typography>
             
          </List>

          <List>
              <Typography>
              <strong>5. Collateral:</strong> Many MSME loans are unsecured, meaning no collateral is required, but this depends on the size of the loan and the lender. For larger loan amounts, banks or financial institutions may require some form of security or collateral.
              </Typography>
              
          </List>

          <List>
              <Typography>
              <strong>6. Government Schemes:</strong> The Government of India offers various schemes to promote the MSME sector, such as:
              </Typography>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Pradhan Mantri Mudra Yojana (PMMY): Provides micro-financing of up to ₹10 lakh to small businesses." />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE): Provides collateral-free loans up to ₹ 5 crore." />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Stand Up India Scheme: Facilitates loans for SC/ST and women entrepreneurs." />
              </ListItem>
          </List>

          <List>
              <Typography>
              <strong>7. Processing Time:</strong> MSME loan approval is often faster compared to traditional loans. Some lenders offer quick disbursal within a week, particularly for smaller amounts or those applying through digital channels.
              </Typography>
              
          </List>
         
        </Box>
       
      </Box>

      <Divider sx={{ marginBottom: 4 }} />

      {/* How to Apply for an MSME Loan: */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        
        <Box
          sx={{
            flex: 1,
            marginLeft: { xs: 0, sm: 3 },
            color: "#333",
            marginBottom: { xs: 3, sm: 0 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              marginBottom: 3,
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
            }}
          >
           How to Apply for an MSME Loan:
          </Typography>
          <List>
              <Typography>
              <strong>1. Check Eligibility:</strong>  Ensure your business falls under the MSME category and meets the lender's criteria.
              </Typography>              
          </List>

          <List>
              <Typography>
              <strong>2. Gather Documents:</strong> Typically, you’ll need documents like:
              </Typography>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Business registration and ownership proof" />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Financial statements (balance sheet, P&L)" />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Bank statements" />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Tax returns (GST, income tax, etc.)" />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="A credit report" />
              </ListItem>
             
          </List>

          <List>
              <Typography>
              <strong>3. Submit Application:</strong> On behalf of you, Loanraasta.com facilitate this work at the lender’s branch.
              </Typography>
              
          </List>

          <List>
              <Typography>
              <strong>4. Approval & Disbursal:</strong> Upon approval, the loan amount is disbursed to your business account.
              </Typography>
             
          </List>

         
        </Box>
        <Box sx={{ flex: 1, position:{ xs:'unset', sm:'unset', md:'sticky' }, top:{ xs:'unset', sm:'unset', md:'6rem' } }}>
          <img
            src="https://images.pexels.com/photos/7415057/pexels-photo-7415057.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Loan Features"
            style={{ width: "100%", maxHeight:'440px', objectFit:'cover', borderRadius: 8 }}
          />
        </Box>
      </Box>

      <Divider sx={{ marginBottom: 4 }} />

      {/* Conclusion Section */}
      <Box sx={{ textAlign: "center", marginTop: 6 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            marginBottom: 3,
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          Conclusion
        </Typography>
        <Typography
          sx={{
            color: "#333",
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" },
            maxWidth: 900,
            marginX: "auto",
            paddingBottom: 3,
          }}
        >
          MSME loans are a great financial tool for business owners seeking to
          grow, diversify, or improve their operations. With quick access to
          funds, favorable terms, and minimal collateral requirements, they are
          an ideal option for many entrepreneurs.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem" },
            padding: { xs: "10px 20px", sm: "12px 25px" },
            boxShadow: 4,
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#0288d1",
            },
          }}
        >
          Apply Now
        </Button>
      </Box>
    </Box>
  );
};

export default MSMELoan;
