import { useState } from 'react';
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemText, Container, Accordion, AccordionSummary, AccordionDetails, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logoImg.png';

const Logo = styled('img')({
  width: '150px',
});

const NavMenu = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
}));

const DrawerContent = styled(Box)(({ theme }) => ({
  width: 250,
}));

const DropdownMenu = styled(Menu)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: 'none',
  backgroundColor: 'transparent',
  '& .MuiAccordionSummary-root': {
    backgroundColor: 'transparent',
  },
  '& .MuiAccordionDetails-root': {
    backgroundColor: 'transparent',
  },
}));

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = () => {
    handleDrawerToggle();
  };

  const drawer = (
    <DrawerContent
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <List>
        <ListItem button onClick={handleItemClick}>
          <ListItemText primary="Home" />
        </ListItem>
        
        {/* Loans Accordion */}
        <StyledAccordion
          expanded={servicesOpen}
          onChange={() => setServicesOpen(!servicesOpen)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Loans</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem button onClick={handleItemClick}>
                <ListItemText primary="Personal Loan" />
              </ListItem>
              <ListItem button onClick={handleItemClick}>
                <ListItemText primary="Business Loan" />
              </ListItem>
              <ListItem button onClick={handleItemClick}>
                <ListItemText primary="Professional Loan" />
              </ListItem>
              <ListItem button onClick={handleItemClick}>
                <ListItemText primary="Secure Loan" />
              </ListItem>
            </List>
          </AccordionDetails>
        </StyledAccordion>
        <ListItem button onClick={handleItemClick}>
          <ListItemText primary="Cards" />
        </ListItem>
        <ListItem button onClick={handleItemClick}>
          <ListItemText primary="Blogs" />
        </ListItem>
        <ListItem button onClick={handleItemClick}>
          <ListItemText primary="News" />
        </ListItem>
        <ListItem button onClick={handleItemClick}>
          <ListItemText primary="Contact" />
        </ListItem>        
      </List>
    </DrawerContent>
  );

  return (
    <AppBar position="sticky" color='#000' elevation={0} sx={{ background:'#fff', borderBottom:'0.5px solid #e8e8e8' }}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Logo src={logo} alt="Logo" />
          </Box>

          {/* Navigation Menu for Desktop */}
          <NavMenu>
            <Button color="inherit" sx={{ marginRight: '20px' }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
            </Button>
            <Button color="inherit" sx={{ marginRight: '20px' }}>
              <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
            </Button>

            {/* Services Dropdown Menu */}
            <Box sx={{ position: 'relative' }}>
              <Button
                color="inherit"
                onClick={handleMenuClick}
                endIcon={<ArrowDropDownIcon />}
                sx={{ marginRight: '20px' }}
              >
                Loans
              </Button>
              <DropdownMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <MenuItem onClick={handleMenuClose}>
                <Link to="/personalloan" style={{ textDecoration: 'none', color: 'inherit' }}>
                MSME Loan
                </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                <Link to="/businessloan" style={{ textDecoration: 'none', color: 'inherit' }}>
                Project Loan
                </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                <Link to="/professionalloan" style={{ textDecoration: 'none', color: 'inherit' }}>
                Factory Loan with subsidy
                </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                <Link to="/secureloan" style={{ textDecoration: 'none', color: 'inherit' }}>
                CC/OD Loan
                </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                <Link to="/secureloan" style={{ textDecoration: 'none', color: 'inherit' }}>
                Business Loan
                </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                <Link to="/secureloan" style={{ textDecoration: 'none', color: 'inherit' }}>
                Personal Loan
                </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                <Link to="/secureloan" style={{ textDecoration: 'none', color: 'inherit' }}>
                House Loan
                </Link>
                </MenuItem>
              </DropdownMenu>
            </Box>

            <Button color="inherit" sx={{ marginRight: '20px' }}>
              <Link to="/blogs" style={{ textDecoration: 'none', color: 'inherit' }}>Blogs</Link>
            </Button>

            <Button color="inherit" sx={{ marginRight: '20px' }}>
              <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
            </Button>
           
          </NavMenu>

          {/* Apply Now Button */}
          <Button variant="contained" color="primary" sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
            Apply Now
          </Button>

          {/* Mobile Menu Button */}
          <MobileMenuButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </MobileMenuButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <DrawerContent
          role="presentation"
          onClick={(event) => event.stopPropagation()} // Prevent closing drawer on Services click
        >
          <List>
            <ListItem button onClick={handleItemClick}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={handleItemClick}>
              <ListItemText primary="Loan" />
            </ListItem>
            <ListItem button onClick={handleItemClick}>
              <ListItemText primary="Cards" />
            </ListItem>
            <ListItem button onClick={handleItemClick}>
              <ListItemText primary="Blogs" />
            </ListItem>
            <ListItem button onClick={handleItemClick}>
              <ListItemText primary="News" />
            </ListItem>
            <ListItem button onClick={handleItemClick}>
              <ListItemText primary="Contact" />
            </ListItem>

            {/* Services Accordion */}
            <StyledAccordion
              expanded={servicesOpen}
              onChange={() => setServicesOpen(!servicesOpen)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Services</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem button onClick={handleItemClick}>
                    <ListItemText primary="Item 1" />
                  </ListItem>
                  <ListItem button onClick={handleItemClick}>
                    <ListItemText primary="Item 2" />
                  </ListItem>
                  <ListItem button onClick={handleItemClick}>
                    <ListItemText primary="Item 3" />
                  </ListItem>
                  <ListItem button onClick={handleItemClick}>
                    <ListItemText primary="Item 4" />
                  </ListItem>
                </List>
              </AccordionDetails>
            </StyledAccordion>
          </List>
        </DrawerContent>
      </Drawer>
    </AppBar>
  );
};

export default Header;
