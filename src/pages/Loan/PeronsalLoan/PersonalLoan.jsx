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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardContent,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PersonalLoan = () => {
  const features = [
    {
      title: "Loan Amount",
      description: (
        <>
          The loan amount can vary widely based on the lender and the
          applicant’s eligibility. Typically, personal loans range from ₹50,000
          to ₹40 lakhs or more, depending on the borrower’s income and
          creditworthiness.
        </>
      ),
    },
    {
      title: "Interest Rates",
      description: (
        <>
          Interest rates for personal loans are generally higher than those for
          secured loans because they are unsecured. Rates usually range from 10%
          to 25% annually, depending on factors like credit score, loan amount,
          and tenure.
          <br />
          The interest rate can be fixed (remains the same throughout the loan
          term) or floating (varies according to market conditions).
        </>
      ),
    },
    {
      title: "Repayment Terms",
      description: (
        <>
          The repayment period for personal loans typically ranges from 1 to 5
          years. Some lenders may offer a longer tenure, up to 7 years, but this
          varies.
          <br />
          Monthly EMIs (Equated Monthly Instalments) are the standard method of
          repayment, with a fixed amount paid each month.
        </>
      ),
    },
    {
      title: "Collateral",
      description: (
        <>
          <strong>Unsecured:</strong> Most personal loans are unsecured, meaning
          they do not require any collateral. This makes them easier to obtain
          but generally comes with a higher interest rate.
          <br />
          <strong>Secured:</strong> In some cases, you can offer collateral
          (such as a vehicle or property) to secure the loan, which may reduce
          the interest rate.
        </>
      ),
    },
  ];

  const steps = [
    {
      title: "Check Eligibility (Loanraasta.com will facilitate)",
      description:
        "Ensure you meet the basic eligibility criteria set by the lender, including age, income, credit score, and employment status.",
    },
    {
      title: "Choose the Right Lender (Loanraasta.com will facilitate)",
      description:
        "Research various lenders and compare interest rates, loan terms, fees, and other conditions. You can apply for personal loans with banks, NBFCs (Non-Banking Financial Companies), or online lending platforms.",
    },
    {
      title: "Prepare Documents (Loanraasta.com will facilitate)",
      description: (
        <ul style={{ paddingLeft: "1.5rem" }}>
          <li>Proof of identity (Aadhaar card, passport, etc.)</li>
          <li>Proof of address (utility bills, rental agreements)</li>
          <li>Income proof (salary slips, bank statements, tax returns)</li>
          <li>
            Employment details (offer letter, business registration documents
            for self-employed)
          </li>
        </ul>
      ),
    },
    {
      title: "Fill Out the Application (Loanraasta.com will facilitate)",
      description:
        "Complete the loan application form either online or in person, and submit your documents to the lender.",
    },
  ];

  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (index) => (event, isExpanded) => {
    setExpanded(isExpanded ? index : false);
  };
  const loanTypes = [
    {
      title: "Secured Personal Loans",
      description:
        "These loans require collateral, such as a home, car, or other valuable assets, to secure the loan. Because there is less risk for the lender, interest rates are generally lower compared to unsecured loans.",
    },
    {
      title: "Emergency Personal Loans",
      description:
        "These are short-term loans designed to meet urgent or unexpected expenses, such as medical emergencies, home repairs, or unforeseen travel needs. Some lenders offer instant personal loans with quick approval processes for emergency situations.",
    },
    {
      title: "Wedding Loans",
      description:
        "Personal loans are often used to finance wedding expenses, covering costs such as venue rental, decorations, catering, and more.",
    },
    {
      title: "Home Renovation Loans",
      description:
        "These loans can be used to fund home improvement projects. The amount and terms may vary depending on the scope of the renovation and the applicant's credit history.",
    },
    {
      title: "Travel Loans",
      description:
        "Personal loans can also be used to fund vacations or travel expenses, such as flight tickets, hotel accommodations, and activities during the trip.",
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
            Personal Loan
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" },
              maxWidth: { xs: "100%", sm: "80%" },
              marginBottom: 3,
            }}
          >
            A Personal Loan is an unsecured loan that an individual can borrow
            from a bank, credit union, or other financial institution to cover a
            variety of personal expenses. Unlike secured loans, personal loans
            do not require collateral, which makes them more accessible, but
            typically come with higher interest rates as a result of the lack of
            security.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" },
              maxWidth: { xs: "100%", sm: "80%" },
              marginBottom: 3,
            }}
          >
            Personal loans are typically used for consolidating debt, paying for
            large expenses, or funding life events such as weddings, vacations,
            or home renovations. They are versatile and can be used for
            virtually any personal need, offering flexible repayment terms.
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
            src="https://images.pexels.com/photos/4968668/pexels-photo-4968668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
          Key Features of Personal Loans
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 3,
          }}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              sx={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: 2,
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
                  <CheckCircleIcon color="primary" sx={{ marginRight: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {feature.title}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "1rem", lineHeight: 1.6 }}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      <Divider sx={{ marginBottom: 4 }} />

      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          padding: { xs: 3, sm: 5 },
          borderRadius: 2,
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
          Types of Personal Loans
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 4,
          }}
        >
          {loanTypes.map((loan, index) => (
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
              <MonetizationOnIcon
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
                  {loan.title}
                </Typography>
                <Typography sx={{ fontSize: "1rem", lineHeight: 1.5 }}>
                  {loan.description}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>

      <Divider sx={{ marginBottom: 4 }} />

      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          padding: { xs: 3, sm: 5 },
          borderRadius: 2,
          maxWidth: "800px",
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
          How to Apply for a Personal Loan
        </Typography>
        {steps.map((step, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleAccordionChange(index)}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              marginBottom: 2,
              "&:before": { display: "none" }, // Remove default accordion line
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <CheckCircleIcon color="primary" sx={{ marginRight: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {step.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "1rem", lineHeight: 1.6 }}>
                {step.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
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
          A personal loan is a flexible financial tool that allows individuals
          to borrow funds for a variety of personal expenses without needing to
          provide collateral. Whether you need to finance a large purchase,
          consolidate debt, or manage an emergency, a personal loan can offer
          quick and easy access to funds. However, it's important to evaluate
          the interest rates, repayment terms, and eligibility requirements to
          ensure that the loan is a viable option for your needs and financial
          situation. loanraasta.com will facilitate entire process.
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

export default PersonalLoan;
