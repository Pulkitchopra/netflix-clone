import React from 'react'
import { AppBar, Container, Toolbar, Button, Box } from '@mui/material'



const Navbar = () => {

  return (

    <div>



    <Box sx={{flexGrow: '1'}} >

   <AppBar position='static' sx={{ backgroundColor: 'black' }} >

   <Container>

    <Toolbar>

    <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' height= '80px' alt='netflix logo' />

    <div style={{display: 'flex', justifyContent: 'right', flexGrow: '1' }} >
    <Button variant="contained" sx={{backgroundColor: 'red'}} >Sign In</Button>
    </div>

    </Toolbar>
    
   </Container>


   </AppBar>
  
    </Box>
    </div>


  )
}

export default Navbar
