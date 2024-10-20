import React from "react";
import { Box, Typography, Container, Button, Divider, useTheme } from "@mui/material";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  border: 'none',
  background: theme.palette.background.default, // Use a background color
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // Center the content
  padding: '0.5rem 1rem', // Add padding for better size
  transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: 'white',
    transform: 'scale(1.05)', // Slightly enlarge the button on hover
  },
}));

const BlogSection = ({ blogs }) => {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: "center", marginTop: "3rem", mb: 5, backgroundColor: "#f9f9f9", padding: "2rem 0" }}>
      <Container>
        <Box
          sx={{
            textAlign: "center",
            marginBottom: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Divider
            sx={{
              height: "5px",
              backgroundColor: `${theme.palette.primary.main}`,
              width: "100px",
              marginBottom: "1rem",
            }}
          />
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Latest Blogs
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Stay updated with our latest articles and insights
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
            gap: "2rem",
          }}
        >
          {blogs.map((blog, index) => (
            <Box
              key={index}
              sx={{
                borderBottom: `4px solid ${theme.palette.primary.main}`,
                borderLeft: '1px solid #d8dce7',
                borderRight: '1px solid #d8dce7',
                borderTop: '1px solid #d8dce7',
                overflow: "hidden",
                backgroundColor: "white",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <Box
                component="img"
                src={blog.image}
                alt={blog.title}
                sx={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Box sx={{ padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between",  }}>
                <Typography variant="h5" component="h4" sx={{ fontWeight: "bold", textAlign: 'left', mb:2 }}>
                  {blog.title}
                </Typography>
                {/* Uncomment if you want to show the date */}
                {/* <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
                >
                  <AccessTimeIcon fontSize="small" sx={{ marginRight: "0.5rem" }} />
                  {blog.date}
                </Typography> */}
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left', flexGrow: 1 }}>
                  {blog.description}
                </Typography>
                <Box sx={{ mt:2}}>
                <StyledButton>
                Apply Now
                <TrendingFlatIcon sx={{ marginLeft: '0.5rem' }} />
              </StyledButton>
                </Box>
              </Box>
              
            </Box>
          ))}
        </Box>

        {/* View All Blogs Button */}
        <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
          <Button variant="contained" color="primary" sx={{ fontWeight: "bold" }}>
            View All Blogs
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogSection;
