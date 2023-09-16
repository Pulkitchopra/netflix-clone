import React, { useState } from 'react'
import { Container } from '@mui/material'
import SignUpScreen from './SignUpScreen';


const LoginScreen = () => {



  const [logIn, setLogIn] = useState(false);

  return (





    <div className='login-screen'>

      <div className='login-background'>



        <div className='login-screen-gradient' >

        </div>

      </div>

      <Container sx={{ position: 'absolute', top: '28%', margin: '0 auto', border: 'none', textAlign: 'center', padding: '8px', color: 'white', left: '0', right: '0' }} >

        {logIn ? (

          <SignUpScreen />

        ) : (

          <div>

            <h1> Unlimited Movies, TV Programs and more </h1>

            <h2> Watch Anywhere and Cancel Anytime </h2>

            <p> Ready to Watch? Create your Account to purchase your membership </p>

            <div className='login-screen-input'>

              <form>



                <input type='email' placeholder='Email Address' />

                <button className='login-button' onClick={() => setLogIn(true)} >Login Button</button>

              </form>

            </div>

          </div>
        )
        }

      </Container>
    </div>
  )
}
export default LoginScreen
