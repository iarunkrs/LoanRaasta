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
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const BusinessLoan = () => {
  const steps = [
    {
      title: "Prepare Your Documents",
      description:
        "Gather necessary documents such as financial records, tax returns, business plans, and any other required paperwork. (loanraasta.com will facilitate)",
    },
    {
      title: "Choose the Right Loan Type",
      description:
        "Determine the purpose of the loan (working capital, expansion, equipment purchase, etc.) and select the loan type that best suits your needs. (loanraasta.com will facilitate)",
    },
    {
      title: "Assess Your Eligibility",
      description:
        "Ensure that your business meets the lender’s eligibility criteria, including credit score, financial health, and business history. (loanraasta.com will facilitate)",
    },
    {
      title: "Compare Lenders",
      description:
        "Shop around for the best loan terms, interest rates, and repayment options. Consider traditional banks, online lenders, or non-bank financial institutions (NBFCs). (loanraasta.com will facilitate)",
    },
    {
      title: "Submit Your Application",
      description:
        "Fill out the loan application form with all necessary details and submit your documents. (loanraasta.com will facilitate)",
    },
    {
      title: "Approval and Disbursement",
      description:
        "Once the loan is approved, the lender will disburse the funds to your business account, often within a few days (for online loans) or weeks (for traditional loans). (loanraasta.com will facilitate)",
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
            Business Loan
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" },
              maxWidth: { xs: "100%", sm: "80%" },
              marginBottom: 3,
            }}
          >
            A Business Loan is a financial product provided by banks, financial
            institutions, or alternative lenders to help businesses fund their
            operational needs, expansion plans, equipment purchases, or working
            capital requirements. Business loans are available in various forms
            and can be used for short-term or long-term purposes, depending on
            the needs of the business.
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
            src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=600"
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
            Key Types of Business Loans:
          </Typography>
          <List>
            <Typography>
              <strong>1. Term Loans:</strong>
            </Typography>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Purpose:</strong>Used for specific, larger business
                needs like purchasing equipment, real estate, or funding
                expansion projects.
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Loan Term:</strong>Can be short-term (less than a year)
                or long-term (several years).
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Repayment:</strong> Fixed or flexible repayment
                schedules, often monthly, with a set interest rate.
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Collateral: </strong>Can be secured or unsecured,
                depending on the loan amount and the lender’s requirements.
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Purpose:</strong>Used for specific, larger business
                needs like purchasing equipment, real estate, or funding
                expansion projects.
              </Typography>
            </ListItem>
          </List>

          <List>
            <Typography>
              <strong>2. Equipment Financing:</strong>
            </Typography>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Purpose:</strong> Used to purchase new or used
                equipment, machinery, or vehicles needed for business
                operations.
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Loan Term:</strong>Typically long-term, with repayment
                linked to the life of the equipment.
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Repayment:</strong> Fixed monthly payments based on the
                agreed term.
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Collateral: </strong>The equipment purchased itself
                usually serves as collateral.
              </Typography>
            </ListItem>
          </List>

          <List>
            <Typography>
              <strong>3. Government Schemes and Subsidized Loans:</strong>
            </Typography>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Purpose:</strong>Many governments offer business loans
                to encourage entrepreneurship and small business development,
                especially for specific sectors (like technology, renewable
                energy, or women entrepreneurs).
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Loan Term:</strong>Varies by scheme (typically 3-5
                years).
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Repayment:</strong>Flexible, often with lower interest
                rates and extended repayment periods.
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Collateral: </strong>Some government schemes provide
                collateral-free loans.
              </Typography>
            </ListItem>
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
            Key Features of Business Loans:
          </Typography>
          <List>
            <Typography>
              <strong>1. Interest Rates:</strong>
            </Typography>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                Interest rates on business loans vary based on the type of loan,
                the lender, and the borrower’s financial health.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                Generally, interest rates range from 8% to 24% annually, with
                secured loans typically offering lower rates than unsecured
                ones.
              </Typography>
            </ListItem>

            <Typography>
              <strong>2. Collateral:</strong>
            </Typography>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                Many business loans are secured, meaning the borrower must
                pledge assets (like property, inventory, or equipment) as
                collateral.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                Unsecured loans are available for small businesses or businesses
                with good credit scores but usually come with higher interest
                rates.
              </Typography>
            </ListItem>

            <Typography>
              <strong>3. Loan Approval Process:</strong>
            </Typography>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Documentation: </strong>Common documents required
                include financial statements (balance sheets, profit & loss),
                tax returns, business registration, bank statements, and details
                of the business’s operations.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Processing Time: </strong>Approval can take anywhere
                from a few days to a few weeks, depending on the lender and loan
                type. Online lenders may provide faster approval and disbursal.
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Collateral: </strong>Can be secured or unsecured,
                depending on the loan amount and the lender’s requirements.
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Purpose:</strong>Used for specific, larger business
                needs like purchasing equipment, real estate, or funding
                expansion projects.
              </Typography>
            </ListItem>
          </List>

          <List>
            <Typography>
              <strong>2. Equipment Financing:</strong>
            </Typography>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Purpose:</strong> Used to purchase new or used
                equipment, machinery, or vehicles needed for business
                operations.
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Loan Term:</strong>Typically long-term, with repayment
                linked to the life of the equipment.
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Repayment:</strong> Fixed monthly payments based on the
                agreed term.
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Collateral: </strong>The equipment purchased itself
                usually serves as collateral.
              </Typography>
            </ListItem>
          </List>

          <List>
            <Typography>
              <strong>3. Government Schemes and Subsidized Loans:</strong>
            </Typography>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Purpose:</strong>Many governments offer business loans
                to encourage entrepreneurship and small business development,
                especially for specific sectors (like technology, renewable
                energy, or women entrepreneurs).
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Loan Term:</strong>Varies by scheme (typically 3-5
                years).
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Repayment:</strong>Flexible, often with lower interest
                rates and extended repayment periods.
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography>
                <strong>Collateral: </strong>Some government schemes provide
                collateral-free loans.
              </Typography>
            </ListItem>
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

      <Box
        sx={{
          backgroundColor: "#f8f8f8",
          padding: { xs: 2, sm: 4 },
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "primary.main",
            marginBottom: 4,
            fontSize: { xs: "1.8rem", sm: "2.2rem" },
          }}
        >
          How to Apply for a Business Loan
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 4,
          }}
        >
          {steps.map((step, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                padding: 3,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: 2,
                borderRadius: 3,
                backgroundColor: "#fff",
                color: "#333",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <AssignmentTurnedInIcon
                color="primary"
                sx={{ fontSize: "2.5rem", flexShrink: 0 }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 1,
                    fontSize: "1.2rem",
                  }}
                >
                  {`${index + 1}. ${step.title}`}
                </Typography>
                <Typography sx={{ fontSize: "1rem", lineHeight: 1.5 }}>
                  {step.description}
                </Typography>
              </Box>
            </Paper>
          ))}
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
          A business loan can be a powerful tool to help you grow and expand your business. Whether you're seeking funds to purchase new equipment, manage cash flow, or pursue new opportunities, there are various types of loans available to meet your specific needs. It’s essential to carefully evaluate your business’s financial health, loan requirements, and repayment capacity before applying for a business loan to ensure it’s the right solution for your business growth. Loanraasta.com will facilitate entire process smoothly.
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

export default BusinessLoan;
