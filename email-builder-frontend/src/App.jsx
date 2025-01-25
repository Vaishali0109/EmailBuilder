import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Editor from './components/Editor';
import UploadImage from './components/UploadImage';

const App = () => (
  <Container
    maxWidth="md"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      py: 4,
      bgcolor: '#f5f5f5',
      borderRadius: 2,
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Typography
      variant="h4"
      component="h1"
      sx={{ color: '#333', fontWeight: 'bold', mb: 2 }}
    >
      Email Builder
    </Typography>

    <Box sx={{ width: '100%', bgcolor: 'white', p: 2, borderRadius: 2 }}>
      <Editor />
    </Box>

    <Box sx={{ width: '100%' }}>
      <UploadImage />
    </Box>
  </Container>
);

export default App;
