import React from 'react'
import { Box, Stack } from '@mui/system';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

const Container1 = () => {
    const [ users, setUsers ] = useState([]);

    useEffect( () => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then( (resp) => resp.json() )
            .then( (data) => setUsers(data) );
    }, [])
    
  
    return (
      <Box display={users.length>0 ? 'block' : 'none'} m={5} p={5} bgcolor='palegreen'> 
        <Stack spacing={2} direction="row">
          {
            users.map( (item, index) => {
              return (
                <Card key={index} sx={ {
                  border: 3,
                  padding: 3
                }}>
                  <Stack spacing={2} direction="column">
                    <Typography textAlign='center'>
                      {item.name}
                    </Typography>
                    <Button onClick={ () => {
                      const remainingCards = users.filter( (item_, index_) => {
                        return item.id !== item_.id;
                      })
                      setUsers(remainingCards);
                    }}>Delete</Button>
                  </Stack>
                </Card>
              )
            })
          }  
        </Stack>
      </Box>
    );
}

export default Container1
