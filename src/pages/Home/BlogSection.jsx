import React from "react";
import { Box, Typography, Container, CardMedia, CardContent, CardActions, Button, Card } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const BlogSection = ({ blogs }) => {
  return (
    <Box sx={{ textAlign: "center", marginTop: "3rem", mb: 5 }}>
      <Typography variant="h4" component="h2" sx={{ marginBottom: "2rem", fontWeight: "bold" }}>
        Latest Blogs
      </Typography>
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gap: "2rem",
          }}
        >
          {blogs.map((blog, index) => (
            <Card
              key={index}
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.15)"
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <CardMedia component="img" height="140" image={blog.image} alt={blog.title} />
              <CardContent sx={{ height: '150px' }}>
                <Typography gutterBottom variant="h6" component="h4" sx={{ fontWeight: "bold" }}>
                  {blog.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="#000"
                  sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
                >
                  <AccessTimeIcon fontSize="small" sx={{ marginRight: "0.5rem" }} />
                  {blog.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", paddingBottom: "1rem" }}>
                <Button size="small" color="primary" sx={{ fontWeight: "bold" }}>
                  Read More
                </Button>
              </CardActions>
            </Card>
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
