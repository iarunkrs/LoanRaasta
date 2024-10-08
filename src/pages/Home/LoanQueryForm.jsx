import React, { useState } from "react";
import {
  Box,
  Paper,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Select,
  Divider,
} from "@mui/material";

function LoanQueryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    loanType: "",
    loanAmount: "",
    tenure: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          padding: "20px",
          width: "80%",
          borderRadius: "15px",
          background: "linear-gradient(white, #e0f7fa)",
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        {/* Left side: Static Information */}
        <Box sx={{ flex: 1, padding: "20px" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#333" }}
          >
            Welcome to Our Loan Services
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ marginBottom: "16px" }}>
            We provide a range of loans tailored to your needs, whether you're
            looking to start a business, buy a home, or need personal assistance.
            With competitive interest rates, flexible repayment options, and fast
            approval processes, we are here to help you achieve your financial
            goals.
          </Typography>
          <Divider />
          <Typography
            variant="h6"
            gutterBottom
            sx={{ marginTop: "16px", fontWeight: "bold" }}
          >
            Why Choose Us?
          </Typography>
          <ul style={{ lineHeight: "2em" }}>
            <li>Low and Competitive Interest Rates</li>
            <li>Flexible Loan Tenures</li>
            <li>Fast Loan Approval Process</li>
            <li>No Hidden Charges</li>
            <li>24/7 Customer Support</li>
          </ul>
          <Divider />
          <Typography
            variant="h6"
            gutterBottom
            sx={{ marginTop: "16px", fontWeight: "bold" }}
          >
            Key Loan Features:
          </Typography>
          <ul style={{ lineHeight: "2em" }}>
            <li>Loans starting from ₹5 lakh up to ₹100 crores</li>
            <li>Interest rates starting from 7% per annum</li>
            <li>Tenures ranging from 6 months to 20 years</li>
            <li>Minimal documentation required</li>
            <li>Secure and transparent process</li>
          </ul>
        </Box>

        {/* Right side: Loan Query Form */}
        <Box sx={{ flex: 1, padding: "20px" }}>
          <Typography
            variant="h5"
            gutterBottom
            align="center"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            Loan Query Form
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#00796b", // Custom color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#004d40", // Custom color on focus
                      },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#00796b",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#004d40",
                      },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="tel"
                  label="Contact Number"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  variant="outlined"
                  inputProps={{ maxLength: 10 }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#00796b",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#004d40",
                      },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" required>
                  <InputLabel>Loan Type</InputLabel>
                  <Select
                    label="Loan Type"
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#00796b",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#004d40",
                        },
                      },
                    }}
                  >
                    <MenuItem value="Personal Loan">Personal Loan</MenuItem>
                    <MenuItem value="Home Loan">Home Loan</MenuItem>
                    <MenuItem value="Car Loan">Car Loan</MenuItem>
                    <MenuItem value="Education Loan">Education Loan</MenuItem>
                    <MenuItem value="Business Loan">Business Loan</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  label="Loan Amount (₹)"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#00796b",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#004d40",
                      },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  label="Tenure (in months)"
                  name="tenure"
                  value={formData.tenure}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#00796b",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#004d40",
                      },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Additional Information"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#00796b",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#004d40",
                      },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    backgroundColor: "#00796b",
                    transition: "background-color 0.3s",
                    "&:hover": {
                      backgroundColor: "#004d40",
                    },
                  }}
                >
                  Submit Query
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Box>
  );
}

export default LoanQueryForm;
