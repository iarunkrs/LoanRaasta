import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

// Example blog data
const blogDetails = {
  1: { title: 'Blog 1', content: 'Detailed content for blog 1' },
  2: { title: 'Blog 2', content: 'Detailed content for blog 2' },
  3: { title: 'Blog 3', content: 'Detailed content for blog 3' },
  4: { title: 'Blog 4', content: 'Detailed content for blog 4' },
  // Add more blog details here
};

const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogDetails[id];

  if (!blog) {
    return <Typography variant="h4">Blog not found</Typography>;
  }

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h3" sx={{ color: 'black', marginBottom: '2rem' }}>
        {blog.title}
      </Typography>
      <Typography variant="body1">{blog.content}</Typography>
    </Box>
  );
};

export default SingleBlog;
