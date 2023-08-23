import { Box, Stack } from '@mui/system';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

const Container2 = () => {

  const [formData, setFormData] = useState({});

  const handleFormData = (name, value) => {
    let data = { [name]: value }
    setFormData({...formData, ...data})
  } 

//   console.log(formData);

  const submitForm = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({})
  }


  return (
    <Box m={5} p={5} bgcolor='lightpink'> 
        <form onSubmit={submitForm}>
            <Stack gap={2} direction='row'>
                <input 
                    name='name' 
                    placeholder='Name'
                    value={formData.name == null ? "" : formData.name}
                    onChange={(e) => {handleFormData(e.target.name, e.target.value)}}
                />
                <input 
                    name='age' 
                    placeholder='Age' 
                    value={formData.age == null ? "" : formData.age}
                    onChange={(e) => {handleFormData(e.target.name, e.target.value)}}
                />
                <Button variant="contained" onClick={submitForm}>Submit</Button>
            </Stack>
        </form>
    </Box>
  )
}

export default Container2
