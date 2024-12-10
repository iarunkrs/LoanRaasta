import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled, useTheme } from "@mui/system";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-real.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { color } from "chart.js/helpers";

// Styled components
const Logo = styled("img")({
  width: "80px",
});

const NavMenu = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  flexGrow: 1,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const StyledAccordion = styled(Accordion)({
  boxShadow: "none",
  backgroundColor: "transparent",
});

const DrawerContent = styled(Box)({
  width: 250,
});

const fontStyle = {
  color: "#0a1023", 
  "&:hover": {
    color: "#f20823", // Hover color
  }, 
};

const textHover = {
  "& :hover" : {
    color:'red',
  }
}

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [headerStyle, setHeaderStyle] = useState({
    background: "transparent",
    backdropFilter: "none",
  }); // Initial style

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
          background: "rgba(255, 255, 255, 1)", // Light background
          // backdropFilter: 'blur(10px)', // Blur effect-
        });
      } else {
        setHeaderStyle({
          background: "transparent",
          backdropFilter: "none",
          boxShadow: "none",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Drawer content for mobile
  const drawer = (
    <DrawerContent role="presentation" onClick={handleDrawerToggle}>
      <List>
        <ListItem
          button
          component={Link}
          to="/"
          onClick={() => handleItemClick("/")}
          sx={{...textHover}}
        >
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/msmeloan"
          onClick={() => {
            handleItemClick("/msmeloan");
            setServicesOpen(false);
          }}
        >
          <ListItemText primary="MSME Loan" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/subsidyloan"
          onClick={() => {
            handleItemClick("/subsidyloan");
            setServicesOpen(false);
          }}
        >
          <ListItemText primary="Subsidy Loan" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/projectloan"
          onClick={() => {
            handleItemClick("/projectloan");
            setServicesOpen(false);
          }}
        >
          <ListItemText primary="Project Loan" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/ccodloan"
          onClick={() => {
            handleItemClick("/ccodloan");
            setServicesOpen(false);
          }}
        >
          <ListItemText primary="CC/OD Loan" />
        </ListItem>
        {/* <ListItem
          button
          component={Link}
          to="/overdraftloan"
          onClick={() => {
            handleItemClick("/overdraftloan");
            setServicesOpen(false);
          }}
        >
          <ListItemText primary="Overdraft Loan" />
        </ListItem> */}
        <ListItem
          button
          component={Link}
          to="/businessloan"
          onClick={() => {
            handleItemClick("/businessloan");
            setServicesOpen(false);
          }}
        >
          <ListItemText primary="Business Loan" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/personalloan"
          onClick={() => {
            handleItemClick("/personalloan");
            setServicesOpen(false);
          }}
        >
          <ListItemText primary="Personal Loan" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/houseloan"
          onClick={() => {
            handleItemClick("/houseloan");
            setServicesOpen(false);
          }}
        >
          <ListItemText primary="House Loan" />
        </ListItem>

        
        <ListItem
          button
          component={Link}
          to="/blogs"
          onClick={() => handleItemClick("/blogs")}
        >
          <ListItemText primary="Blogs" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/news"
          onClick={() => handleItemClick("/news")}
        >
          <ListItemText primary="News" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/contact"
          onClick={() => handleItemClick("/contact")}
        >
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </DrawerContent>
  );

  return (
    <AppBar
      position="sticky"
      sx={{ ...headerStyle, py: 2, boxShadow: "none" }}
      elevation={0}
    >
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Logo src={logo} alt="LoanRaasta Logo" />
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <NavMenu>
              <Button
                component={Link}
                to="/"
                sx={{ ...fontStyle, ...textHover, padding: "0 10px" }}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/about"
                sx={{ ...fontStyle, padding: "0 10px" }}
              >
                About
              </Button>
              <Button
                onClick={handleMenuClick}
                sx={{ ...fontStyle, padding: "0 10px" }}
                endIcon={<ArrowDropDownIcon />}
              >
                Loans
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <MenuItem
                  component={Link}
                  to="/msmeloan"
                  onClick={handleMenuClose}
                >
                  MSME Loan
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/subsidyloan"
                  onClick={handleMenuClose}
                >
                  Subsidy Loan
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/projectloan"
                  onClick={handleMenuClose}
                >
                  Project Loan
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/ccodloan"
                  onClick={handleMenuClose}
                >
                  CC/OD Loan
                </MenuItem>
                {/* <MenuItem
                  component={Link}
                  to="/overdraftloan"
                  onClick={handleMenuClose}
                >
                  Overdraft Loan
                </MenuItem> */}
                <MenuItem
                  component={Link}
                  to="/businessloan"
                  onClick={handleMenuClose}
                >
                  Business Loan
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/personalloan"
                  onClick={handleMenuClose}
                >
                  Personal Loan
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/houseloan"
                  onClick={handleMenuClose}
                >
                  House Loan
                </MenuItem>
              </Menu>
              <Button
                component={Link}
                to="/blogs"
                sx={{ ...fontStyle, padding: "0 10px" }}
              >
                Blogs
              </Button>
              <Button
                component={Link}
                to="/contact"
                sx={{ ...fontStyle, padding: "0 10px" }}
              >
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
          <MobileMenuButton
            edge="start"
            color="main.primary"
            onClick={handleDrawerToggle}
          >
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
