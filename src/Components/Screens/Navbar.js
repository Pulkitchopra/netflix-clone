import React from 'react'
import { AppBar, Container, Toolbar, Button, Box, Avatar } from '@mui/material'
import { useNavigate } from 'react-router-dom'


import {useSelector} from 'react-redux';

import {selectUser} from '../../features/counter/userSlice';

const Navbar = () => {



  const navigate = useNavigate();

  const user = useSelector(selectUser);

  return (

    <div>

    <Box sx={{flexGrow: '1'}} >






    
     <AppBar position='static' sx={{ backgroundColor: 'black' }} >
     
     <Container>

    <Toolbar sx={{cursor: 'pointer'}} >

    <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' height= '80px' alt='netflix logo' onClick={() => navigate('/')} />

    <div style={{display: 'flex', justifyContent: 'right', flexGrow: '1' }} >

   {user ? <Avatar onClick={ () => navigate('/profile') } sx = {{bgcolor: 'blue'}} > {user.email.substr(0, 1).toUpperCase()} </Avatar> :
   <Button variant="contained" sx={{backgroundColor: 'red'}} onClick={ () => navigate('/profile') } > Sign In </Button> }

    
    </div>

    </Toolbar>
    
   </Container>


   </AppBar>



    </Box>
    </div>



  )
}

export default Navbar
