import React from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';

// Define the custom theme
const theme = createTheme({
  typography: {
    fontFamily: 'Thicccboi, Manrope, Outfit, Arial, sans-serif',
    h1: {
      fontFamily: 'Thicccboi, Manrope, Outfit, Arial, sans-serif',
    },
    h2: {
      fontFamily: 'Thicccboi, Manrope, Outfit, Arial, sans-serif',
    },
    body2: {
      fontFamily: 'Thicccboi, Manrope, Outfit, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '14px',
    },
  },
  palette: {
    primary: {
      // main:'#1649ff', //blue
      main:'#f20823', //red
      // main:'#f26008' //orange
    },
    secondary: {
      main: '#FF5722', // Example secondary color, adjust as needed
    },
    
  },
  typography: {
    fontFamily: 'Thicccboi, Arial, sans-serif', // Default font family
    h1: {
      fontFamily: 'Thicccboi, Arial, sans-serif', // Custom font for h1
      fontWeight: 700,         // Example: Bold
      color: '#0a1023',        // Primary color for h1
    },
    h2: {
      fontFamily: 'Thicccboi, Arial, sans-serif',
      fontWeight: 700,         // SemiBold
      color: '#0a1023',        // Primary color for h2
    },
    h3: {
      fontFamily: 'Thicccboi, Arial, sans-serif',
      fontWeight: 700,         // Medium
      color: '#0a1023',        // Secondary color for h3
    },
    h4: {
      fontFamily: 'Thicccboi, Arial, sans-serif',
      fontWeight: 600,         // Medium
      color: '#0a1023',        // Primary color for h4
    },
    h5: {
      fontFamily: 'Thicccboi, Arial, sans-serif',
      fontWeight: 600,         // Regular
      color: '#0a1023',        // Secondary color for h5
    },
    h6: {
      fontFamily: 'Thicccboi, Arial, sans-serif',
      fontWeight: 600,         // Regular
      color: '#0a1023',        // Primary color for h6
    },
    body1: {
      fontFamily: 'Thicccboi, Arial, sans-serif',
      fontSize: '16px',
      color: '#0a1023',        // Default body color
    },
    body2: {
      fontFamily: 'Thicccboi, Arial, sans-serif',
      fontSize: '14px',
      color: '#0a1023',        // Body2 text color
    },
  },
  components: {
  
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '15px 25px',
          borderRadius: '80px',
          fontSize: '16px',
          fontWeight: 500,
          textTransform: 'none',
          transition: 'all 0.3s ease-in-out', 
          '&:hover': {
            backgroundColor: 'primary.main',
            color: '#fff',
            transform: 'scale(1.01)',
          },
        },
        contained: {
          backgroundColor: 'primary.main',
          color: '#fff',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        },
        outlined: {
          borderColor: 'primary.main',
          color: 'primary.main', 
          backgroundColor: '#fff',
          transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: '#f20823',
            color: '#fff',
            borderColor: '#f20823',
          },
        },
      },
    },
    
  },
});

const ThemeProvider = ({ children }) => {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
