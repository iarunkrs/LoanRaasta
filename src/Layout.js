// src/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Layout = () => {
  return (
    <Box>
      <Header />
      <Box component="main" sx={{ minHeight: '80vh' }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
