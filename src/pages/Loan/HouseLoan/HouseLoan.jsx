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
  Card, CardContent,
  Grid
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import { Person, AttachMoney, Work, CreditCard, Home } from "@mui/icons-material";
import { Search,  Folder, Description, VerifiedUser,  } from "@mui/icons-material";

const HouseLoan = () => {
  const applicationSteps = [
    {
      title: "Research",
      icon: <Search />,
      content: [
        "Begin by researching different lenders (banks, NBFCs, housing finance companies) and comparing their interest rates, loan terms, processing fees, and other conditions.",
        "You can apply for home loans either online or offline, depending on the lender.",
      ],
    },
    {
      title: "Check Eligibility",
      icon: <CheckCircle />,
      content: [
        "Ensure you meet the eligibility criteria of the lender, which typically includes minimum age, income, employment history, and a good credit score.",
      ],
    },
    {
      title: "Prepare Documents",
      icon: <Folder />,
      content: [
        "Collect the necessary documents, including identity proof, address proof, income proof, property documents, and other financial documents like tax returns and bank statements.",
      ],
    },
    {
      title: "Submit Application",
      icon: <Description />,
      content: [
        "Fill out the application form, either online or in person. Submit the required documents to the lender for verification.",
      ],
    },
    {
      title: "Verification Process",
      icon: <VerifiedUser />,
      content: [
        "The lender will verify your documents, check your credit score, and assess your ability to repay the loan.",
        "They may also conduct a property valuation before sanctioning the loan.",
      ],
    },
    {
      title: "Disbursal",
      icon: <AttachMoney />,
      content: [
        "Once the agreement is signed, the loan amount will be disbursed to your account.",
        "In the case of home purchase loans, the funds are typically released in stages as the property transaction progresses (e.g., down payment, registration, possession).",
      ],
    },
  ];

  const eligibilityCriteria = [
    {
      title: "Age",
      icon: <Person />,
      points: [
        "Borrowers should be at least 21 years old at the time of application and should be 60 years or less at the time of loan maturity.",
        "For salaried individuals, lenders generally prefer applicants who are between 25 and 60 years old.",
      ],
    },
    {
      title: "Income",
      icon: <AttachMoney />,
      points: [
        "A stable and sufficient monthly income is crucial to demonstrate the borrower’s ability to repay the loan.",
        "The lender will assess your income to ensure that the EMI-to-income ratio is comfortable (typically around 30% to 50%).",
      ],
    },
    {
      title: "Employment",
      icon: <Work />,
      points: [
        "Banks generally prefer borrowers with a stable employment history.",
        "Salaried employees should have been working in their current job for at least 2 years.",
        "For self-employed individuals, the business should be running for at least 3 years.",
      ],
    },
    {
      title: "Credit Score",
      icon: <CreditCard />,
      points: [
        "A good credit score is important for securing a home loan with favorable terms.",
        "A lower credit score may result in higher interest rates or loan rejection.",
      ],
    },
    {
      title: "Property Documents",
      icon: <Home />,
      points: [
        "Lenders require the borrower to submit documents related to the property, such as title deed, agreement to sell, and occupancy certificate (in case of under-construction property).",
      ],
    },
  ];

  const loanFeatures = [
    {
      title: "Loan Amount",
      points: [
        "The loan amount depends on the property value, income, and eligibility of the borrower.",
        "Typically, lenders offer up to 80% to 90% of the property’s value, with the borrower covering the remaining 10% to 20% as the down payment.",
      ],
    },
    {
      title: "Tenure",
      points: [
        "Home loans usually come with long repayment tenures, typically 15 to 30 years, which helps reduce the monthly EMI burden.",
        "Longer tenures reduce the EMI amount, but the total interest paid over the loan tenure increases.",
      ],
    },
    {
      title: "Down Payment",
      points: [
        "The borrower is required to pay a certain percentage of the property’s value as the down payment.",
        "Typically, this amount ranges from 10% to 20% of the total cost of the property.",
      ],
    },
    {
      title: "Tax Benefits",
      points: [
        "Under Section 80C of the Income Tax Act, you can claim a deduction of up to ₹1.5 lakh on principal repayment for a home loan.",
        "Under Section 24(b), interest paid on the home loan is eligible for a deduction of up to ₹2 lakh per year for a self-occupied property.",
        "These tax benefits apply only if the loan is used for purchasing, constructing, or renovating a property.",
      ],
    },
  ];

  const houseLoans = [
    {
      title: "Home Purchase Loan",
      details: [
        {
          label: "Purpose",
          description:
            "To finance the purchase of a ready-to-move-in or under-construction residential property (either a flat, apartment, or individual house).",
        },
        {
          label: "Loan Amount",
          description:
            "Typically, banks offer loans up to 80% to 90% of the property’s value, with the borrower contributing the remaining amount as the down payment.",
        },
        {
          label: "Eligibility",
          description:
            "The eligibility for a home purchase loan depends on factors like your income, credit score, age, and the value of the property.",
        },
      ],
    },
    {
      title: "Top-Up Home Loan",
      details: [
        {
          label: "Purpose",
          description:
            "A top-up loan is an additional loan that can be availed by individuals who already have an existing home loan with a bank or financial institution. It is usually taken for home repairs, medical expenses, or other financial needs.",
        },
        {
          label: "Eligibility",
          description:
            "The loan amount is typically based on the outstanding balance of the existing home loan and the applicant's repayment capacity.",
        },
        {
          label: "Interest Rates",
          description:
            "The interest rate for a top-up home loan is typically lower than personal loans but higher than the original home loan rate.",
        },
      ],
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
           House Loan
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" },
              maxWidth: { xs: "100%", sm: "80%" },
              marginBottom: 3,
            }}
          >
            A House Loan (also known as a Home Loan or Mortgage Loan) is a financial product offered by banks, financial institutions, or housing finance companies to help individuals or families purchase, construct, renovate, or refinance a home. A house loan is typically repaid over a long period, often 15 to 30 years, and is secured by the property itself, which serves as collateral.
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
            src="https://images.pexels.com/photos/29091316/pexels-photo-29091316/free-photo-of-hand-holding-small-model-house-symbolizing-real-estate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Business Growth"
            style={{ width: "100%", borderRadius: 8 }}
          />
        </Box>
      </Box>

      <Divider sx={{ marginBottom: 4 }} />

      <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: { xs: 3, sm: 5 },
        borderRadius: 2,
        maxWidth: "1000px",
        margin: "0 auto",
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
        Types of House Loans
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 3,
        }}
      >
        {houseLoans.map((loan, index) => (
          <Card
            key={index}
            sx={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: 2,
              padding: 2,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
                <HomeIcon color="primary" sx={{ marginRight: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {loan.title}
                </Typography>
              </Box>
              {loan.details.map((detail, detailIndex) => (
                <Box key={detailIndex} sx={{ marginBottom: 2 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", color: "primary.dark" }}
                  >
                    {detail.label}:
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    {detail.description}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>

      <Divider sx={{ marginBottom: 4 }} />

      {/* Application Steps Section */}
      <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: { xs: 3, sm: 5 },
        borderRadius: 2,
        maxWidth: "1000px",
        margin: "0 auto",
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
        Key Features of a House Loan
      </Typography>
      <Grid container spacing={3}>
        {loanFeatures.map((feature, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              sx={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: 2,
                padding: 2,
                height: "100%",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 2,
                  }}
                >
                  <HomeIcon color="primary" sx={{ marginRight: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {feature.title}
                  </Typography>
                </Box>
                <List>
                  {feature.points.map((point, i) => (
                    <ListItem key={i}>
                      <ListItemText
                        primary={`- ${point}`}
                        sx={{ fontSize: "1rem", lineHeight: 1.8 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

      <Divider sx={{ marginBottom: 4 }} />

      {/* Benefits Section */}
      <Box sx={{ backgroundColor: "#f4f7fc", padding: { xs: 0, sm: 1, md:2, lg:4 }, borderRadius: 2,  margin: "0 auto" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", color: "primary.main", marginBottom: 4 }}
      >
        Eligibility Criteria for a House Loan
      </Typography>

      <Grid container spacing={2}>
        {eligibilityCriteria.map((criterion, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: { xs: 0, sm: 1 },
                backgroundColor: "#fff",
                borderRadius: 2,
                boxShadow: 2,
                position: "relative",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    padding: 0,
                    borderRadius: "50%",
                    marginRight: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {criterion.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                  {criterion.title}
                </Typography>
              </Box>

              <List sx={{ width: "100%", padding: 0 }}>
                {criterion.points.map((point, i) => (
                  <ListItem key={i} sx={{ paddingLeft: 0 }}>
                    <ListItemText
                      primary={`- ${point}`}
                      sx={{
                        fontSize: "1rem",
                        lineHeight: 1.6,
                        color: "#555",
                        "& .MuiListItemText-primary": {
                          fontWeight: 500,
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
            {index < eligibilityCriteria.length - 1 && (
              <Divider sx={{ marginY: 2, borderColor: "primary.main" }} />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>

      <Divider sx={{ marginBottom: 4 }} />

      {/* Conclusion Section */}
      <Box sx={{ backgroundColor: "#f4f7fc", padding: { xs: 2, sm: 4 }, borderRadius: 2, maxWidth: "1200px", margin: "0 auto" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", color: "primary.main", marginBottom: 4 }}
      >
        How to Apply for a House Loan
      </Typography>

      <Grid container spacing={3}>
        {applicationSteps.map((step, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: { xs: 2, sm: 3 },
                backgroundColor: "#fff",
                borderRadius: 2,
                boxShadow: 2,
                position: "relative",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    padding: 1.5,
                    borderRadius: "50%",
                    marginRight: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {step.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                  {step.title}
                </Typography>
              </Box>

              <List sx={{ width: "100%", padding: 0 }}>
                {step.content.map((text, i) => (
                  <ListItem key={i} sx={{ paddingLeft: 0 }}>
                    <ListItemText
                      primary={`- ${text}`}
                      sx={{
                        fontSize: "1rem",
                        lineHeight: 1.6,
                        color: "#555",
                        "& .MuiListItemText-primary": {
                          fontWeight: 500,
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
            {index < applicationSteps.length - 1 && (
              <Divider sx={{ marginY: 2, borderColor: "primary.main" }} />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
    </Box>
  );
};

export default HouseLoan;
