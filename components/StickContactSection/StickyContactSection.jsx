import React from 'react';
import { Box, IconButton, Tooltip, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const StickyContactSection = () => {
  const theme = useTheme();

  const iconStyle = {
    marginBottom: '16px',
    // color: theme.palette.primary.main,
    color:'#fff',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  };

  return (
    <Box
      sx={{
        
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: {
          xs:'none',
          md:'flex',
        },
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1000,
        padding: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // backgroundColor:'#f2082347',
        backdropFilter: 'blur(50px)', 
        borderRadius: '8px', 
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', 
      }}
    >
      <Tooltip title="WhatsApp" arrow placement="left">
        <IconButton sx={iconStyle}>
          <WhatsAppIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Phone" arrow placement="left">
        <IconButton sx={iconStyle}>
          <PhoneIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Download Brochure" arrow placement="left">
        <IconButton sx={iconStyle}>
          <DownloadIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Email" arrow placement="left">
        <IconButton sx={iconStyle}>
          <EmailIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default StickyContactSection;
