import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Snackbar,
  useTheme,
  Divider,
} from "@mui/material";
import eligibilityImg from "../../assets/images/pexels-cottonbro-3944405.jpg";

const EligibilityChecker = () => {
  const theme = useTheme(); // Access the theme colors

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

  // Common styles for TextField
  const textFieldStyles = {
    boxSizing:'border-box',
    width:'100%',
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.dark,
      },
    },
  };

  return (
    <Box sx={{ mt:'5rem' }}>
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

        <Typography variant="h3">Check Your Loan Eligibility</Typography>
      </Box>
      <Box sx={{ 
        // backgroundColor: "primary.main", 
        mt: "4rem", 
        mb: "5rem" }}>
        {/* <Container > */}
        <Box
          sx={{
            // display: "grid",
            // gridTemplateColumns: {
            //   xs: "1fr",
            //   md: "1fr 1fr",
            // },
            display:'flex',
            flexDirection:{
              xs:'column',
              md:'row'
            },
            alignItems:'center',
            gap: {
              xs:'2rem',
              md:'0rem'
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: {
                xs:'100%',
                md:'50%'
              },
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // p: 2,
            }}
          >
            <Box
              component={"img"}
              src={eligibilityImg}
              alt=""
              sx={{
                display: "block",
                width: "100%",
                height: "100%",
                // maxHeight: "600px",
                objectFit: "cover",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              padding: "20px",
              width: {
                xs:'100%',
                md:'50%'
              },
              boxSizing:'border-box'
            }}
          >
            <form onSubmit={checkEligibility}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr", 
                    md: "repeat(2, 1fr)",
                  },
                  width:'100%',
                  gap: "16px",
                  boxSizing:'border-box'
                }}
              >
                {/* Full Name */}
                <TextField
                  required
                  fullWidth
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  variant="outlined"
                  sx={textFieldStyles}
                />

                {/* Age */}
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
                  sx={textFieldStyles}
                />

                {/* Email */}
                <TextField
                  required
                  fullWidth
                  type="email"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  sx={textFieldStyles}
                />

                {/* Mobile Number */}
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
                  sx={textFieldStyles}
                />

                {/* PAN Card Number */}
                <TextField
                  required
                  fullWidth
                  label="PAN Card Number"
                  name="panCardNumber"
                  value={formData.panCardNumber}
                  onChange={handleChange}
                  variant="outlined"
                  inputProps={{ maxLength: 10 }}
                  sx={textFieldStyles}
                />

                {/* Aadhaar Card Number */}
                <TextField
                  required
                  fullWidth
                  label="Aadhaar Card Number"
                  name="aadhaarCardNumber"
                  value={formData.aadhaarCardNumber}
                  onChange={handleChange}
                  variant="outlined"
                  inputProps={{ maxLength: 12 }}
                  sx={textFieldStyles}
                />

                {/* Monthly Income */}
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
                  sx={textFieldStyles}
                />

                {/* Employment Status */}
                <FormLabel component="legend" sx={{ gridColumn: "span 2" }}>
                  Employment Status
                </FormLabel>
                <RadioGroup
                  row
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  required
                  sx={{ gridColumn: "span 2" }} // Span across two columns
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

                {/* Business Name (optional) */}
                {formData.employmentStatus === "Self-Employed" && (
                  <TextField
                    fullWidth
                    label="Business Name"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    variant="outlined"
                    sx={textFieldStyles}
                  />
                )}

                {/* Business Type (optional) */}
                {formData.employmentStatus === "Self-Employed" && (
                  <TextField
                    fullWidth
                    label="Business Type"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    variant="outlined"
                    sx={textFieldStyles}
                  />
                )}

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    gridColumn: "span 2",
                    padding: "10px 20px",
                    fontWeight: "bold",
                  }}
                >
                  Check Eligibility
                </Button>
              </Box>
            </form>
          </Box>

          {/* Notification Snackbar */}
          <Snackbar
            open={notification.open}
            autoHideDuration={6000}
            onClose={handleCloseNotification}
            message={notification.message}
          />
        </Box>
        {/* </Container> */}
      </Box>
    </Box>
  );
};

export default EligibilityChecker;
