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
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const CCODLoan = () => {
  const projectLoans = [
    {
      title: "Infrastructure Project Loan",
      description:
        "Used for financing infrastructure development such as roads, bridges, ports, airports, and power plants. These loans are typically long-term and may come with government support or guarantees.",
    },
    {
      title: "Industrial Project Loan",
      description:
        "RICE MILL, FLAUR MILL, POULTRY FARM, DRUG PLANT AND ANY OTHER MANUFACTURING PLANT: Used by manufacturing businesses for the construction of factories, purchase of machinery, and setting up production lines. These loans can be secured or unsecured depending on the lender's requirements.",
    },
    {
      title: "Real Estate Project Loan",
      description:
        "Used by builders and real estate developers to finance the construction of residential, commercial, or mixed-use developments. Repayment is often linked to the sale of properties or revenue from leasing.",
    },
    {
      title: "Green/Environmentally Sustainable Project Loan",
      description:
        "Specifically meant for projects aimed at sustainability, such as renewable energy ventures (solar, wind, etc.), waste management projects, and water conservation projects. These loans may come with additional benefits like lower interest rates under government schemes.",
    },
  ];

  const processSteps = [
    {
      step: "Prepare a Business Plan",
      description:
        "A well-detailed business plan or project proposal is required. This should outline the project objectives, timelines, cost estimates, expected revenue, and the impact of the project. (Loanraasta.com will facilitate)",
    },
    {
      step: "Submit Financial Documents",
      description:
        "Banks or financial institutions will require your business’s financial records, including balance sheets, profit and loss statements, tax returns, and any other relevant financial documentation. (Loanraasta.com will facilitate)",
    },
    {
      step: "Choose a Lender",
      description:
        "Project loans can be applied for through commercial banks, majority Nationalised Banks. (Loanraasta.com will facilitate)",
    },
    {
      step: "Sign Agreement & Receive Funds",
      description:
        "Once approved, you’ll sign a loan agreement, after which funds are disbursed based on project requirements or milestones.",
    },
  ];

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
            CC/OD Loans
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" },
              maxWidth: { xs: "100%", sm: "80%" },
              marginBottom: 3,
            }}
          >
            CC/OD Loans (Cash Credit / Overdraft Loans) are short-term working
            capital finance options typically offered by banks and financial
            institutions to businesses, enabling them to meet their day-to-day
            operational expenses. These loans are designed to bridge the gap
            between the cash inflows and outflows of a business, ensuring smooth
            operations even when there are fluctuations in cash flow.
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
        <Box
          sx={{
            flex: 1,
            position: { xs: "unset", sm: "unset", md: "sticky" },
            top: { xs: "unset", sm: "unset", md: "6rem" },
          }}
        >
          <img
            src="https://images.pexels.com/photos/7731326/pexels-photo-7731326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Loan Features"
            style={{
              width: "100%",
              maxHeight: "440px",
              objectFit: "cover",
              borderRadius: 8,
            }}
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
            Here's an overview of both types of loans:
          </Typography>
          <List>
            <Typography>
              <strong>1. Cash Credit (CC) Loan:</strong> Cash Credit is a type
              of short-term loan that businesses can use to meet their working
              capital needs, like paying wages, purchasing inventory, or
              covering other operational costs. It's a revolving credit facility
              that allows businesses to withdraw funds up to a pre-approved
              limit.
            </Typography>
          </List>

          <List>
            <Typography>
              <strong>Key Features of Cash Credit Loans:</strong>
            </Typography>
            <List>
              <Typography>
                <strong>1. Loan Type: </strong>
              </Typography>
              <ListItem>
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Revolving credit (like a credit line) that can be used as per need and repaid whenever funds are available." />
              </ListItem>
              <Typography>
                <strong>2. Limit: </strong>
              </Typography>
              <ListItem>
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary=" The bank sets a credit limit based on factors such as the business's financials, asset valuation, and working capital requirements. The credit limit can range from ₹50 lacs to several crores, depending on the size of the business." />
              </ListItem>
              <Typography>
                <strong>3. Interest Rates:</strong>
              </Typography>
              <ListItem>
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Typically, the interest rate on CC loans is higher than regular term loans, but it is charged only on the amount drawn from the credit limit. Interest rates can range from 9% to 12%, depending on the bank and the borrower’s risk profile." />
              </ListItem>
              <Typography>
                <strong>4. Collateral: </strong>
              </Typography>
              <ListItem>
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Cash credit loans are typically secured by business assets such as inventory, receivables, or property. In some cases, if the business has a strong credit history, an unsecured CC loan may be granted." />
              </ListItem>
              <Typography>
                <strong>5. Documentation: </strong>
              </Typography>
              <ListItem>
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="To obtain a CC loan, businesses need to provide their financial statements (balance sheets, profit & loss), a working capital requirement plan, and proof of business operations." />
              </ListItem>
            </List>
          </List>
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
            How to Apply for CC/OD Loans:
          </Typography>
          <List>
            <Typography>
              <strong>1. Eligibility Check:</strong> Banks will assess the
              business’s credit history, working capital requirement, and cash
              flow projections. (loanraasta.com will facilitate)
            </Typography>
          </List>

          <List>
            <Typography>
              <strong>2. Documentation</strong> Businesses must provide
              documents like: (loanraasta.com will facilitate)
            </Typography>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="Financial statements (balance sheets, profit & loss)" />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="Bank statements" />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="Income tax returns" />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="Business registration proof" />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="Collateral details (if applicable)" />
            </ListItem>
          </List>

          <List>
            <Typography>
              <strong>3. Loan Agreement:</strong> Once approved, the business
              and lender will sign a loan agreement, and the loan amount will be
              made available through the business’s account. (loanraasta.com
              will facilitate)
            </Typography>
          </List>
        </Box>

        <Box
          sx={{
            flex: 1,
            position: { xs: "unset", sm: "unset", md: "sticky" },
            top: { xs: "unset", sm: "unset", md: "6rem" },
          }}
        >
          <img
            src="https://images.pexels.com/photos/7731326/pexels-photo-7731326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Loan Features"
            style={{
              width: "100%",
              maxHeight: "440px",
              objectFit: "cover",
              borderRadius: 8,
            }}
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
          Both Cash Credit (CC) and Overdraft (OD) loans provide businesses with
          flexible, short-term financing to manage their working capital needs.
          While both loans help bridge temporary cash flow gaps, they come with
          their own benefits and risks. Cash credit is more suitable for
          businesses with ongoing inventory or operational costs, whereas an
          overdraft is ideal for businesses with irregular or seasonal cash
          flows. Loanraasta.com will facilitate entire process smoothly.
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

export default CCODLoan;
