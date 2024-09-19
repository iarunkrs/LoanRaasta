import { Box, Typography, Link, IconButton, Container } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { styled } from '@mui/system';
import logoImg from '../../assets/images/logoImg.png';

// Styled Typography for body2
const StyledTypography = styled(Typography)(({ theme }) => ({
  color: '#000',
  fontFamily: 'Outfit',
  fontWeight: 400,
  fontSize: '14px',
}));

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  color: '#fff',
  padding: '5rem 0',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '20px',
  textAlign: 'left',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

const Logo = styled('img')({
  width: '150px',
  marginBottom: '20px',
});

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#fff', pt:4, borderTop:'1px solid red' }}>
      {/* Footer Section */}
      <Container>
        <FooterContainer>
          {/* Logo Section */}
          <Box>
            <Logo src={logoImg} alt="LoanRaasta" />
            {/* <Typography variant="body2">
              Creating innovative solutions for the future.
            </Typography> */}
          </Box>

          {/* Company Information Section */}
          <Box>
            <Typography variant="h6" sx={{ color: '#000', fontFamily: 'Outfit', fontWeight: 700 }} gutterBottom>
              Company
            </Typography>
            <StyledTypography>
              <Link href="/about" color="inherit" underline="none">
                About Us
              </Link>
            </StyledTypography>
            <StyledTypography>
              <Link href="/contact" color="inherit" underline="none">
                Contact
              </Link>
            </StyledTypography>
            <StyledTypography>
              <Link href="/careers" color="inherit" underline="none">
                Careers
              </Link>
            </StyledTypography>
            <StyledTypography>
              <Link href="/blog" color="inherit" underline="none">
                Blog
              </Link>
            </StyledTypography>
          </Box>

          {/* Legal Information Section */}
          <Box>
            <Typography variant="h6" sx={{ color: '#000', fontFamily: 'Outfit', fontWeight: 700 }} gutterBottom>
              Legal
            </Typography>
            <StyledTypography>
              <Link href="/terms" color="inherit" underline="none">
                Terms & Conditions
              </Link>
            </StyledTypography>
            <StyledTypography>
              <Link href="/privacy" color="inherit" underline="none">
                Privacy Policy
              </Link>
            </StyledTypography>
          </Box>

          {/* Address and Social Links Section */}
          <Box>
            <Typography variant="h6" sx={{ color: '#000', fontFamily: 'Outfit', fontWeight: 700 }} gutterBottom>
              Address
            </Typography>
            <StyledTypography>
              1234 Example St, Suite 567
            </StyledTypography>
            <StyledTypography>
              City, State, ZIP Code
            </StyledTypography>

            {/* Social Links */}
           
          </Box>
        </FooterContainer>

        
      </Container>

      {/* Copyright Section */}
      <Box sx={{ backgroundColor: '#222', color: '#aaa', textAlign: 'center', padding: '10px 0' }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} LoanRaasta. All rights reserved.
        </Typography>

        <Box mt={2}>
              <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" aria-label="Twitter" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" aria-label="Instagram" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" aria-label="LinkedIn" color="inherit">
                <LinkedIn />
              </IconButton>
            </Box>
      </Box>
    </Box>
  );
};

export default Footer;
