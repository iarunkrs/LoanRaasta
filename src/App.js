// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/Home/HomePage';
import AboutUsPage from './pages/AboutUs/AboutUsPage';
import ContactUsPage from './pages/ContactUs/ContactUsPage';
import BlogsPage from './pages/Blogs/BlogsPage';
import BusinessLoan from './pages/Loan/BusinessLoan/BusinessLoan'
import PersonalLoan from './pages/Loan/PersonalLoan/PersonalLoan'
import ProfessionalLoan from './pages/Loan/ProfessionalLoan/ProfessionalLoan'
import SecureLoan from './pages/Loan/SecureLoan/SecureLoan'
import SingleBlog from './components/Blog/SingleBlog';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="businessloan" element={<BusinessLoan />} />
          <Route path="personalloan" element={<PersonalLoan />} />
          <Route path="professionalloan" element={<ProfessionalLoan />} />
          <Route path="secureloan" element={<SecureLoan />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
