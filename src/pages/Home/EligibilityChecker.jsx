import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Grid,
  Snackbar,
} from "@mui/material";

const EligibilityChecker = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    mobileNumber: "",
    panCardNumber: "",
    aadhaarCardNumber: "",
    income: "",
    employmentStatus: "",
    businessName: "",
    businessType: "",
  });

  const [notification, setNotification] = useState({
    open: false,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkEligibility = (e) => {
    e.preventDefault();
    
    // Example eligibility criteria
    const { age, income, employmentStatus } = formData;

    if (age >= 21 && income >= 30000 && employmentStatus === "Employed") {
      setNotification({
        open: true,
        message: "You are eligible for a loan. We will notify you shortly!",
      });
    } else {
      setNotification({
        open: true,
        message: "You are not eligible for a loan. We will notify you shortly!",
      });
    }
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
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
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Check Your Loan Eligibility
        </Typography>
        <form onSubmit={checkEligibility}>
          <Grid container spacing={2}>
            {/* Full Name */}
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            {/* Age */}
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                type="number"
                label="Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                variant="outlined"
                inputProps={{ min: 18 }}
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            {/* Mobile Number */}
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                type="tel"
                label="Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                variant="outlined"
                inputProps={{ maxLength: 10 }}
              />
            </Grid>

            {/* PAN Card Number */}
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="PAN Card Number"
                name="panCardNumber"
                value={formData.panCardNumber}
                onChange={handleChange}
                variant="outlined"
                inputProps={{ maxLength: 10 }}
              />
            </Grid>

            {/* Aadhaar Card Number */}
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="Aadhaar Card Number"
                name="aadhaarCardNumber"
                value={formData.aadhaarCardNumber}
                onChange={handleChange}
                variant="outlined"
                inputProps={{ maxLength: 12 }}
              />
            </Grid>

            {/* Monthly Income */}
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                type="number"
                label="Monthly Income (₹)"
                name="income"
                value={formData.income}
                onChange={handleChange}
                variant="outlined"
                inputProps={{ min: 0 }}
              />
            </Grid>

            {/* Employment Status */}
            <Grid item xs={12} md={6}>
              <FormLabel component="legend">Employment Status</FormLabel>
              <RadioGroup
                row
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
                required
              >
                <FormControlLabel
                  value="Employed"
                  control={<Radio />}
                  label="Employed"
                />
                <FormControlLabel
                  value="Unemployed"
                  control={<Radio />}
                  label="Unemployed"
                />
                <FormControlLabel
                  value="Self-Employed"
                  control={<Radio />}
                  label="Self-Employed"
                />
              </RadioGroup>
            </Grid>

            {/* Business Name (optional) */}
            {formData.employmentStatus === "Self-Employed" && (
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Business Name"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
            )}

            {/* Business Type (optional) */}
            {formData.employmentStatus === "Self-Employed" && (
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Business Type"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
            )}

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ padding: "10px 20px", fontWeight: "bold" }}
              >
                Check Eligibility
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Notification Snackbar */}
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        message={notification.message}
      />
    </Box>
  );
};

export default EligibilityChecker;
