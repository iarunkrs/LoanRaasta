import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  useTheme,
  Divider,
  Container,
} from "@mui/material";
import queryImg from '../../assets/images/pexels-kindelmedia-7979597.jpg'

const LoanQueryForm = () => {
  const theme = useTheme(); // Access the theme colors
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

  const textFieldStyles = {
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

          <Typography variant="h3">Loan Query Form</Typography>
        </Box>
        <Container sx={{ position:'relative' }}>
          <Box sx={{ position:'absolute', width:'35%', top:'0', bottom:'0', right:'0', left:'auto', backgroundColor:'primary.main',zIndex:'-1', display:{xs:'none', md:'block'} }}></Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              padding: "20px",
              gap: "5rem",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "grid",
                gap: "16px",
                gridTemplateColumns: "1fr",
                width: "100%",
              }}
            >
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
                sx={textFieldStyles}
              />

              <FormControl fullWidth variant="outlined" required>
                <InputLabel>Loan Type</InputLabel>
                <Select
                  label="Loan Type"
                  name="loanType"
                  value={formData.loanType}
                  onChange={handleChange}
                  sx={textFieldStyles}
                >
                  <MenuItem value="Personal Loan">Personal Loan</MenuItem>
                  <MenuItem value="Home Loan">Home Loan</MenuItem>
                  <MenuItem value="Car Loan">Car Loan</MenuItem>
                  <MenuItem value="Education Loan">Education Loan</MenuItem>
                  <MenuItem value="Business Loan">Business Loan</MenuItem>
                </Select>
              </FormControl>

              <TextField
                required
                fullWidth
                type="number"
                label="Loan Amount (₹)"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                variant="outlined"
                sx={textFieldStyles}
              />

              <TextField
                required
                fullWidth
                type="number"
                label="Tenure (in months)"
                name="tenure"
                value={formData.tenure}
                onChange={handleChange}
                variant="outlined"
                sx={textFieldStyles}
              />

              <TextField
                fullWidth
                multiline
                rows={4}
                label="Additional Information"
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                sx={textFieldStyles}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  backgroundColor: theme.palette.primary.main,
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                Submit Query
              </Button>
            </Box>

            <Box>
              <Box
                component={"img"}
                src={queryImg}
                alt=""
                sx={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
          </Box>
        </Container>
      </Container>
    </Box>
  );
};

export default LoanQueryForm;
