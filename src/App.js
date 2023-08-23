import { Box, Stack, height } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './App.css';
import { useState, useEffect } from 'react';
import Container1 from './components/Container1';
import Container2 from './components/Container2';
import Container3 from './components/Container3';


function App() {

  return (
    <Box display='flex'>
      {/* <Container1/> */}
      {/* <Container2/> */}
      <Container3/>
      {/* <Container3/> */}
    </Box>
  )

  
}

export default App;
