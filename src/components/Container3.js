import React from 'react'
import { Box, Container, Stack } from '@mui/system';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

const Container3 = () => {

    return (
      <Box display='flex' bgcolor='black'> 
        <Stack display='flex' direction='row' justifyContent='start' alignItems='center' bgcolor='blue' flexWrap='wrap'>
          <Box bgcolor='pink' width={300} >box1</Box>
          <Box bgcolor='red' width={300} height={50}>box2</Box>
          <Box bgcolor='green' width={300} height={50}>box3</Box>
          <Box bgcolor='yellow' width={300} height={50}>box4</Box>
          <Box bgcolor='pink' width={100} height={50}>box1</Box>
          <Box bgcolor='red' width={300} height={50}>box2</Box>
          <Box bgcolor='green' width={300} height={50}>box3</Box>
          <Box bgcolor='yellow' width={300} height={50}>box4</Box>
        </Stack>
      </Box>
    );
}

export default Container3
