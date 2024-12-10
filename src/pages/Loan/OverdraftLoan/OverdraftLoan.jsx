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

const OverdraftLoan = () => {
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
            Overdraft (OD) Loan:
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" },
              maxWidth: { xs: "100%", sm: "80%" },
              marginBottom: 3,
            }}
          >
            An Overdraft (OD) loan is similar to a cash credit loan but operates slightly differently. It is essentially an arrangement with the bank that allows the business to withdraw more money than what is available in its account, up to a predetermined overdraft limit.
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
            src="https://via.placeholder.com/500x300"
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
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <img
            src="https://via.placeholder.com/500x300"
            alt="Loan Features"
            style={{ width: "100%", borderRadius: 8 }}
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
            {[
              "Quick loan approval process",
              "Flexible loan amounts tailored to your needs",
              "No collateral required for most loans",
              "Competitive interest rates",
            ].map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      <Divider sx={{ marginBottom: 4 }} />

      {/* Application Steps Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 6,
          padding: { xs: 0, sm: 2 },
          borderRadius: 4,
        }}
      >
        {/* Steps Section */}
        <Box
          sx={{
            flex: 1,
            marginRight: { xs: 0, sm: 3 },
            marginBottom: { xs: 2, sm: 0 },
          }}
        >
          <Card
            sx={{
              backgroundColor: "#ffffff",
              padding: { xs: 3, sm: 4 },
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "primary.main",
                marginBottom: 3,
                fontSize: { xs: "1.5rem", sm: "1.75rem" },
              }}
            >
              How to Apply for an MSME Loan
            </Typography>
            <List>
              {[
                {
                  title: "Check Eligibility",
                  description:
                    "Ensure your business falls under the MSME category and meets the lender's criteria.",
                },
                {
                  title: "Gather Documents",
                  description: `Typically, you'll need documents like:
            ◦ Business registration and ownership proof
            ◦ Financial statements (balance sheet, P&L)
            ◦ Bank statements
            ◦ Tax returns (GST, income tax, etc.)
            ◦ A credit report`,
                },
                {
                  title: "Submit Application",
                  description:
                    "On behalf of you, Loanraasta.com facilitates this work at the lender’s branch.",
                },
                {
                  title: "Approval & Disbursal",
                  description:
                    "Upon approval, the loan amount is disbursed to your business account.",
                },
              ].map((step, index) => (
                <ListItem
                  key={index}
                  sx={{ alignItems: "flex-start", marginBottom: 2 }}
                >
                  <ListItemIcon sx={{ color: "primary.main", marginTop: 0.5 }}>
                    <CheckCircle />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold", color: "#333" }}
                      >
                        {step.title}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="body2"
                        sx={{ color: "#555", marginTop: 0.5 }}
                      >
                        {step.description}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Card>
        </Box>

        {/* Image Section */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <img
            src="https://via.placeholder.com/500x300"
            alt="Application Steps"
            style={{
              width: "100%",
              borderRadius: 8,
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Box>
      </Box>

      <Divider sx={{ marginBottom: 4 }} />

      {/* Benefits Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        <Box
          sx={{
            flex: 1,
            marginRight: { xs: 0, sm: 3 },
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
            Why Choose MSME Loans?
          </Typography>
          <Typography
            sx={{
              marginBottom: 2,
              fontSize: { xs: "0.9rem", sm: "1.25rem" },
              color: "#333",
            }}
          >
            MSME loans provide unique benefits that support the growth of small
            and medium-sized businesses. These benefits include low-interest
            rates, quick approval, and the flexibility to tailor the loan to
            your needs.
          </Typography>
          <List>
            {[
              "Get quick access to working capital",
              "Repayment schedules are flexible",
              "Unsecured loans, making it easier for businesses",
            ].map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ flex: 1 }}>
          <img
            src="https://via.placeholder.com/500x300"
            alt="Loan Benefits"
            style={{ width: "100%", borderRadius: 8 }}
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

export default OverdraftLoan;
