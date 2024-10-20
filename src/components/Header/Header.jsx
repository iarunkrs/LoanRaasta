import { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemText,
  Accordion, AccordionSummary, AccordionDetails, Typography, Menu, MenuItem, Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled, useTheme } from '@mui/system';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-real.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';

// Styled components
const Logo = styled('img')({
  width: '50px',
});

const NavMenu = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexGrow: 1,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const StyledAccordion = styled(Accordion)({
  boxShadow: 'none',
  backgroundColor: 'transparent',
});

const DrawerContent = styled(Box)({
  width: 250,
});

const fontStyle = {
  color: '#0a1023',
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [headerStyle, setHeaderStyle] = useState({ background: 'transparent', backdropFilter: 'none' }); // Initial style

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);

  const handleMenuClose = () => setAnchorEl(null);

  const handleAccordionToggle = () => {
    setServicesOpen((prev) => !prev);
  };

  const handleItemClick = (path) => {
    setMobileOpen(false); // Close the drawer for mobile after selecting an item
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderStyle({
          background: 'rgba(255, 255, 255, 1)', // Light background
          // backdropFilter: 'blur(10px)', // Blur effect-
        });
      } else {
        setHeaderStyle({
          background: 'transparent',
          backdropFilter: 'none',
          boxShadow:'none'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Drawer content for mobile
  const drawer = (
    <DrawerContent role="presentation" onClick={handleDrawerToggle}>
      <List >
        <ListItem button component={Link} to="/" onClick={() => handleItemClick('/')}>
          <ListItemText primary="Home" />
        </ListItem>

        {/* Services Accordion for mobile */}
        <StyledAccordion expanded={servicesOpen} onChange={handleAccordionToggle}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} onClick={(e) => e.stopPropagation()}>
            <Typography>Loans</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem button component={Link} to="/personalloan" onClick={() => { handleItemClick('/personalloan'); setServicesOpen(false); }}>
                <ListItemText primary="Personal Loan" />
              </ListItem>
              <ListItem button component={Link} to="/businessloan" onClick={() => { handleItemClick('/businessloan'); setServicesOpen(false); }}>
                <ListItemText primary="Business Loan" />
              </ListItem>
              <ListItem button component={Link} to="/professionalloan" onClick={() => { handleItemClick('/professionalloan'); setServicesOpen(false); }}>
                <ListItemText primary="Professional Loan" />
              </ListItem>
              <ListItem button component={Link} to="/secureloan" onClick={() => { handleItemClick('/secureloan'); setServicesOpen(false); }}>
                <ListItemText primary="Secure Loan" />
              </ListItem>
              <ListItem button component={Link} to="/secureloan" onClick={() => { handleItemClick('/secureloan'); setServicesOpen(false); }}>
                <ListItemText primary="CC/OD Loan" />
              </ListItem>
              <ListItem button component={Link} to="/secureloan" onClick={() => { handleItemClick('/secureloan'); setServicesOpen(false); }}>
                <ListItemText primary="Business Loan" />
              </ListItem>
              <ListItem button component={Link} to="/secureloan" onClick={() => { handleItemClick('/secureloan'); setServicesOpen(false); }}>
                <ListItemText primary="Personal Loan" />
              </ListItem>
              <ListItem button component={Link} to="/secureloan" onClick={() => { handleItemClick('/secureloan'); setServicesOpen(false); }}>
                <ListItemText primary="House Loan" />
              </ListItem>
            </List>
          </AccordionDetails>
        </StyledAccordion>

        <ListItem button component={Link} to="/blogs" onClick={() => handleItemClick('/blogs')}>
          <ListItemText primary="Blogs" />
        </ListItem>
        <ListItem button component={Link} to="/news" onClick={() => handleItemClick('/news')}>
          <ListItemText primary="News" />
        </ListItem>
        <ListItem button component={Link} to="/contact" onClick={() => handleItemClick('/contact')}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </DrawerContent>
  );

  return (
    <AppBar position="sticky" sx={{ ...headerStyle, py: 2, boxShadow:'none' }} elevation={0}>
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Logo src={logo} alt="LoanRaasta Logo" />
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <NavMenu>
              <Button component={Link} to="/" sx={{ ...fontStyle, padding: '0 10px', }}>
                Home
              </Button>
              <Button component={Link} to="/about" sx={{ ...fontStyle, padding: '0 10px', }}>
                About
              </Button>
              <Button onClick={handleMenuClick} sx={{ ...fontStyle, padding: '0 10px', }} endIcon={<ArrowDropDownIcon />}>
                Loans
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
              >
                <MenuItem component={Link} to="/personalloan" onClick={handleMenuClose}>
                  MSME Loan
                </MenuItem>
                <MenuItem component={Link} to="/businessloan" onClick={handleMenuClose}>
                  Project Loan
                </MenuItem>
                <MenuItem component={Link} to="/professionalloan" onClick={handleMenuClose}>
                  Factory Loan
                </MenuItem>
                <MenuItem component={Link} to="/secureloan" onClick={handleMenuClose}>
                  CC/OD Loan
                </MenuItem>
                <MenuItem component={Link} to="/secureloan" onClick={handleMenuClose}>
                  Business Loan
                </MenuItem>
                <MenuItem component={Link} to="/secureloan" onClick={handleMenuClose}>
                  Personal Loan
                </MenuItem>
                <MenuItem component={Link} to="/secureloan" onClick={handleMenuClose}>
                  House Loan
                </MenuItem>
              </Menu>
              <Button component={Link} to="/blogs" sx={{ ...fontStyle, padding: '0 10px', }}>
                Blogs
              </Button>
              <Button component={Link} to="/contact" sx={{ ...fontStyle, padding: '0 10px', }}>
                Contact
              </Button>
            </NavMenu>
          )}

          {/* Apply Now Button */}
          {!isMobile && (
            <Button variant="contained" color="primary">
              Apply Now
            </Button>
          )}

          {/* Mobile Menu Button */}
          <MobileMenuButton edge="start" color="main.primary" onClick={handleDrawerToggle}>
            <MenuIcon />
          </MobileMenuButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
