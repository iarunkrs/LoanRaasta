import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Slider,
  Box,
  Divider,
  TextField,
  useTheme,
} from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const sliderFlex = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
  width: '100%'
};

const inputStyle = {
  // padding: '5px 10px', 
  fontSize: '12px',
  '& .MuiFormControl-root.MuiTextField-root': {
    padding: '0px',
  },
  '& .MuiInputBase-root': {
    padding: '0px',
  },
  '& .MuiInputBase-input': {
    padding: '5px 10px',
    fontSize: '12px',
  },
}

const LoanCalculator = () => {
  const theme = useTheme();
  const [amount, setAmount] = useState(100000); // Updated minimum loan amount
  const [interestRate, setInterestRate] = useState(5); // Default interest rate
  const [tenure, setTenure] = useState(1); // Default loan tenure in years
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [chartData, setChartData] = useState({
    labels: ["Principal Amount", "Interest Amount"],
    datasets: [
      {
        data: [50, 50], // Default 50-50 values
        backgroundColor: ["#4caf50", "#ff6384"],
        hoverBackgroundColor: ["#45a049", "#ff4d4d"],
      },
    ],
  });

  // Utility function to format numbers with commas
  const formatNumber = (num) => {
    return num.toLocaleString("en-IN");
  };

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(amount);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const calculatedPayments = parseFloat(tenure) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    const totalPayment = monthly * calculatedPayments; // Total payment over the loan period
    const interestAmount = totalPayment - principal; // Total interest paid

    if (!isNaN(monthly) && monthly !== Infinity && monthly > 0) {
      setMonthlyPayment({
        emi: monthly.toFixed(2),
        principal: principal,
        interest: interestAmount.toFixed(2),
        total: totalPayment.toFixed(2),
        tenure: tenure,
      });

      // Update the chart data with actual principal and interest values
      setChartData({
        labels: ["Principal Amount", "Interest Amount"],
        datasets: [
          {
            data: [principal, interestAmount], // Updated values
            backgroundColor: ["#4caf50", "#ff6384"],
            hoverBackgroundColor: ["#45a049", "#ff4d4d"],
          },
        ],
      });
    } else {
      setMonthlyPayment(null);
    }
  };

  const handleAmountChange = (e) => {
    const newAmount = Math.max(100000, Math.min(10000000, parseInt(e.target.value.replace(/,/g, "")))); // Remove commas for calculation
    setAmount(newAmount);
  };

  const handleInterestChange = (e) => {
    const newRate = Math.max(1, Math.min(20, e.target.value));
    setInterestRate(newRate);
  };

  const handleTenureChange = (e) => {
    const newTenure = Math.max(1, Math.min(30, e.target.value));
    setTenure(newTenure);
  };

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
            }}
          />
          <Typography variant="h3">Loan Calculator</Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: "4rem",
            width: "100%",
            alignItems: 'flex-start'
          }}
        >
          <Box sx={{ width: "100%", display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Loan Amount Slider and Input */}
            <Box>
              <Box sx={{ ...sliderFlex, mb: 1 }}>
                <Typography>Loan Amount:</Typography>
                <TextField
                  type="text"
                  value={formatNumber(amount)}
                  onChange={handleAmountChange}
                  sx={{ width: "150px", ...inputStyle }}
                />
              </Box>
              <Slider
                value={amount}
                onChange={(e, newValue) => setAmount(newValue)}
                min={100000}
                max={10000000}
                step={1000}
                valueLabelDisplay="auto"
              />
              <Box display="flex" justifyContent="space-between">
                <Typography>₹1,00,000</Typography>
                <Typography>₹1,00,00,000</Typography>
              </Box>
            </Box>

            {/* Interest Rate Slider and Input */}
            <Box>
              <Box sx={{ ...sliderFlex, mb: 1 }}>
                <Typography>Interest Rate (%):</Typography>
                <TextField
                  type="number"
                  value={interestRate}
                  onChange={handleInterestChange}
                  inputProps={{ min: 1, max: 20, step: 0.1 }}
                  sx={{ width: "150px", ...inputStyle }}
                />
              </Box>
              <Slider
                value={interestRate}
                onChange={(e, newValue) => setInterestRate(newValue)}
                min={1}
                max={20}
                step={0.1}
                valueLabelDisplay="auto"
              />
              <Box display="flex" justifyContent="space-between">
                <Typography>1%</Typography>
                <Typography>20%</Typography>
              </Box>
            </Box>

            {/* Loan Tenure Slider and Input */}
            <Box>
              <Box sx={{ ...sliderFlex, mb: 1 }}>
                <Typography>Loan Tenure (Years):</Typography>
                <TextField
                  type="number"
                  value={tenure}
                  onChange={handleTenureChange}
                  inputProps={{ min: 1, max: 30 }}
                  sx={{ width: "150px", ...inputStyle }}
                />
              </Box>
              <Slider
                value={tenure}
                onChange={(e, newValue) => setTenure(newValue)}
                min={1}
                max={30}
                step={1}
                valueLabelDisplay="auto"
              />
              <Box display="flex" justifyContent="space-between">
                <Typography>1 Year</Typography>
                <Typography>30 Years</Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              color="primary"
              onClick={calculateMonthlyPayment}
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Calculate
            </Button>
          </Box>

          {/* Right Section: Always visible */}
          <Box sx={{ width: "100%" }}>
            <Card variant="outlined" sx={{}}>
              <CardContent>
                <Typography variant="h6" align="center">
                  Loan Summary
                </Typography>
                <Box
                  display="grid"
                  gridTemplateColumns="repeat(2, 1fr)"
                  gap={2}
                  sx={{ marginTop: 2 }}
                >
                  <Box>
                    <Typography variant="body1">Monthly EMI:</Typography>
                    <Typography variant="h5" color="primary">
                      {monthlyPayment ? `₹${monthlyPayment.emi}` : "-----"}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1">Principal Amount:</Typography>
                    <Typography variant="h5" color="primary">
                      {monthlyPayment
                        ? `₹${formatNumber(monthlyPayment.principal)}`
                        : "-----"}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1">Interest Amount:</Typography>
                    <Typography variant="h5" color="primary">
                      {monthlyPayment ? `₹${formatNumber(monthlyPayment.interest)}` : "-----"}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1">Total Amount:</Typography>
                    <Typography variant="h5" color="primary">
                      {monthlyPayment ? `₹${formatNumber(monthlyPayment.total)}` : "-----"}
                    </Typography>
                  </Box>
                  <Box gridColumn="span 2">
                    <Typography variant="body1">Loan Tenure:</Typography>
                    <Typography variant="h5" color="primary">
                      {monthlyPayment
                        ? `${monthlyPayment.tenure} year(s)`
                        : "-----"}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Box sx={{ width: '200px', height: '200px', margin: '0 auto' }}>
              <Doughnut
                data={chartData}
                options={{
                  maintainAspectRatio: false, 
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoanCalculator;
