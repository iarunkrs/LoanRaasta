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

const SubsidyLoan = () => {
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
            Subsidy Loans
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" },
              maxWidth: { xs: "100%", sm: "80%" },
              marginBottom: 3,
            }}
          >
           Subsidy Loans are loans where a portion of the interest or the loan amount is paid by a government or a financial institution to support the borrower. These loans are typically aimed at providing financial assistance to specific groups of people, such as low-income individuals, farmers, small businesses, or those from economically weaker sections of society. The government offers these subsidies to make loans more affordable and accessible to those who might otherwise struggle to secure financing at market rates.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" },
              maxWidth: { xs: "100%", sm: "80%" },
              marginBottom: 3,
            }}
          >
           Subsidy loans are commonly offered under various government schemes, and they help reduce the financial burden on borrowers by lowering the overall interest rates or by covering a part of the loan amount. These loans are often used to promote economic growth, financial inclusion, and development in specific sectors, such as agriculture, housing, education, and small business.
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
            src="https://images.pexels.com/photos/5816286/pexels-photo-5816286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            Key Features of Subsidy Loans:
          </Typography>
          <List>
              <Typography>
              <strong>1. Interest Rate Subsidy:</strong> 
              </Typography>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="The primary feature of a subsidy loan is the reduction in interest rates. In some cases, the government or a financial institution provides a partial subsidy on the interest paid by the borrower. This effectively lowers the cost of borrowing." />
              </ListItem>
          </List>

          <List>
              <Typography>
              <strong>2. Targeted Borrowers:</strong> Subsidy loans are generally aimed at specific groups of people, such as:
              </Typography>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Low-income families" />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Farmers" />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Small businesses" />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Women entrepreneurs" />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Youth entrepreneurs" />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="People in rural areas" />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="First-time homebuyers" />
              </ListItem>
              
             
          </List>

          <List>
              <Typography>
              <strong>3. Loan Amount:</strong>  eligibility.
              </Typography>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Subsidy loans typically have a cap on the maximum loan amount. The loan amount varies depending on the specific scheme or program, and the borrower’s" />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="For example, under PMEGPY schemes, the government may provide a loan of up to ₹50 lakh." />
              </ListItem>
          </List>

          <List>
              <Typography>
              <strong>4. Government Schemes:</strong> Many subsidy loan programs are part of government initiatives aimed at promoting specific sectors or improving financial access. These programs may be run by central or state governments, and may be implemented in collaboration with banks or financial institutions.
              </Typography>
             
          </List>

          <List>
              <Typography>
              <strong>Popular Subsidy Loan Schemes in India:</strong>
              </Typography>
              <Typography>
              <strong>1. PMEGPY:</strong>
              </Typography>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Purpose: EMPLOYEMENT." />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Subsidy: 25%-35%." />
              </ListItem>
              <ListItem >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Eligibility: NEW PROJECT." />
              </ListItem>
          </List>

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
          Subsidy loans provide a valuable financial tool for individuals and businesses that need assistance with financing, particularly those from lower-income backgrounds or in sectors that the government wishes to promote. These loans help reduce the cost of borrowing, making loans more affordable and accessible. Whether it’s for purchasing a home, starting a business, improving agricultural practices, or pursuing higher education, subsidy loans offer an important avenue for economic empowerment.
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
          Before applying for a subsidy loan, it's essential to research the various government schemes available, understand the eligibility criteria, and ensure that the loan terms align with your financial needs and repayment capacity. (Loanraasta.com will facilitate)
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

export default SubsidyLoan;
