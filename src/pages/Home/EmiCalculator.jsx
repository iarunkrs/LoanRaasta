import React, { useState } from "react";
import { Slider, Typography, Box, Grid, Paper } from "@mui/material";
import GaugeChart from "react-gauge-chart";

function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState(500000); // Initial loan amount
  const [interestRate, setInterestRate] = useState(7); // Initial interest rate
  const [tenure, setTenure] = useState(12); // Initial tenure in months

  // Function to calculate EMI
  const calculateEMI = (loanAmount, interestRate, tenure) => {
    const monthlyInterestRate = interestRate / (12 * 100);
    const emi =
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenure)) /
      (Math.pow(1 + monthlyInterestRate, tenure) - 1);
    return emi.toFixed(2);
  };

  // Function to calculate total payment
  const totalPayment = (emi, tenure) => (emi * tenure).toFixed(2);

  const emi = calculateEMI(loanAmount, interestRate, tenure);
  const totalInterest = (emi * tenure - loanAmount).toFixed(2);
  const totalPayable = totalPayment(emi, tenure);

  // To get EMI percentage for Gauge (normalized value for gauge chart)
  const emiPercentage = Math.min((emi / loanAmount) * 100, 100) / 100;

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "20px",
        backgroundColor: "#f0f0f0",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={4} sx={{ width: "90%" }}>
        {/* Left Side: Calculator */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={10}
            sx={{
              padding: "40px",
              borderRadius: "15px",
              backgroundColor: "#ffffff",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              EMI Calculator
            </Typography>

            {/* Loan Amount Slider */}
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Loan Amount: ₹{loanAmount.toLocaleString()}
            </Typography>
            <Slider
              value={loanAmount}
              onChange={(e, value) => setLoanAmount(value)}
              min={100000}
              max={10000000}
              step={10000}
              valueLabelDisplay="auto"
              marks={[
                { value: 100000, label: "₹1L" },
                { value: 10000000, label: "₹1Cr" },
              ]}
              sx={{
                mb: 3,
                color: "blue",
              }}
            />

            {/* Interest Rate Slider */}
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Interest Rate: {interestRate}%
            </Typography>
            <Slider
              value={interestRate}
              onChange={(e, value) => setInterestRate(value)}
              min={5}
              max={20}
              step={0.1}
              valueLabelDisplay="auto"
              marks={[
                { value: 5, label: "5%" },
                { value: 20, label: "20%" },
              ]}
              sx={{
                mb: 3,
                color: "green",
              }}
            />

            {/* Tenure Slider */}
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Tenure: {tenure} months
            </Typography>
            <Slider
              value={tenure}
              onChange={(e, value) => setTenure(value)}
              min={6}
              max={240}
              step={1}
              valueLabelDisplay="auto"
              marks={[
                { value: 6, label: "6m" },
                { value: 240, label: "20y" },
              ]}
              sx={{
                mb: 3,
                color: "red",
              }}
            />

            {/* EMI Result */}
            <Box mt={4} mb={2} sx={{ textAlign: "center" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#333" }}
              >
                Your Monthly EMI: ₹{emi}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#555", marginTop: "10px" }}
              >
                Total Payable Amount: ₹{totalPayable}
              </Typography>
              <Typography variant="body1" sx={{ color: "#555" }}>
                Total Interest Payable: ₹{totalInterest}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Right Side: Odometer-like Gauge Chart */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={10}
            sx={{
              padding: "20px",
              borderRadius: "15px",
              backgroundColor: "#ffffff",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              EMI Gauge Representation
            </Typography>

            {/* Gauge Chart for EMI */}
            <GaugeChart
              id="emi-gauge-chart"
              nrOfLevels={20}
              percent={emiPercentage}
              textColor="#333"
              formatTextValue={() => `₹${emi}`}
              colors={["#FF5F6D", "#FFC371"]}
              arcWidth={0.3}
              arcPadding={0.02}
              needleColor="#464A4F"
              needleBaseColor="#464A4F"
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default EmiCalculator;
