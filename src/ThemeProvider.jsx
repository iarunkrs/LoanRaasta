import React from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';

// Define the custom theme
const theme = createTheme({
  typography: {
    fontFamily: 'Outfit, Arial, sans-serif',
    h1: {
      fontFamily: 'Outfit, Arial, sans-serif',
    },
    h2: {
      fontFamily: 'Outfit, Arial, sans-serif',
    },
    body2: {
      fontFamily: 'Outfit, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '14px',
    },
  },
  palette: {
    primary: {
      main: '#1A4CFF', // Custom primary color
    },
    secondary: {
      main: '#FF5722', // Example secondary color, adjust as needed
    },
    // You can define other palette colors here if needed
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        body2: {
          fontFamily: 'Outfit, Arial, sans-serif',
          fontWeight: 400,
          fontSize: '14px',
        },
      },
    },
  },
});

const ThemeProvider = ({ children }) => {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
