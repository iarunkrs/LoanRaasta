// src/pages/HomePage.js
import React from "react";
import { Box } from "@mui/material";
import Slider from "../../components/Slider/CustomSlider";
import TrendingLoans from "./TrendingLoans";
import LoanSection from "./LoanSection";
import ProcessSteps from "./ProcessSteps";
import BlogSection from "./BlogSection";
import BankLogos from "./BankLogos";

// Import your data here
import {
  loanSections,
  loanData,
  processSteps,
  blogs,
  bankLogos,
} from "../../data/LoanData";
import EmiCalculator from "./EmiCalculator";
import LoanQueryForm from "./LoanQueryForm";
import EligibilityChecker from "./EligibilityChecker";
import Banner from "../../components/Banner/Banner";
import WhyChooseUs from "./WhyChooseUs";
import StickyContactSection from "../../components/StickContactSection/StickyContactSection";

const HomePage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {/* Slider Section */}
      {/* <Slider /> */}
      <Banner />

      {/* Trending Loans Section */}
      <TrendingLoans loanData={loanData} />

      <EmiCalculator />

      <EligibilityChecker />

      {/* Loan Sections with Alternating Layout */}
      <LoanSection loanSections={loanSections} />

      {/* Loan Provision Walkthrough - How It Works */}
      <ProcessSteps processSteps={processSteps} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Loan Query */}
      <LoanQueryForm />

      {/* Blog Section */}
      <BlogSection blogs={blogs} />

      {/* Banks Associated with Us */}
      <BankLogos bankLogos={bankLogos} />

      <StickyContactSection />
    </Box>
  );
};

export default HomePage;
