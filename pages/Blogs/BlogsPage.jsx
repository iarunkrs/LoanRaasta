import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent, CardMedia, CardActions } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: 'Blog 1',
    date: 'September 17, 2024',
    description: 'This is a short description for blog 1.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 2,
    title: 'Blog 2',
    date: 'September 16, 2024',
    description: 'This is a short description for blog 2.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 3,
    title: 'Blog 3',
    date: 'September 15, 2024',
    description: 'This is a short description for blog 3.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 4,
    title: 'Blog 4',
    date: 'September 14, 2024',
    description: 'This is a short description for blog 4.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
];

const BlogsPage = () => {
  return (
    <Box>
          {/* Banner Section */}
          <Box
          sx={{
            backgroundImage: `url(https://via.placeholder.com/1200x400)`, // Replace with actual banner image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '2rem',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '1rem 2rem',
              borderRadius: '8px',
            }}
          >
            Our Latest Blogs
          </Typography>
        </Box>
    <Container>
      {/* Blog Cards Grid */}
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
              transition: "transform 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
            component={Link} to={`/blog/${blog.id}`} // Link to individual blog page
          >
            <CardMedia component="img" height="140" image={blog.image} alt={blog.title} />
            <CardContent sx={{ height: '150px' }}>
              <Typography gutterBottom variant="h6" component="h4">
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
              <Button size="small" color="primary">
                Read More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>

      {/* View All Blogs Button */}
      <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
        <Button variant="contained" color="primary" component={Link} to="/blogs">
          View All Blogs
        </Button>
      </Box>
    </Container>
    </Box>
  );
};

export default BlogsPage;
