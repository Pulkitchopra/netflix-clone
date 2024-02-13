import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { auth } from '../../firebase';


const SignUpScreen = () => {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');



        const register = (e) => {
            e.preventDefault();
            
            
            auth.createUserWithEmailAndPassword( email, password )

             .then((authUser) => {

                console.log(authUser);

             })



             .catch((error) => {

                console.log(error.message);
             }
             );
        }


        const signIn = (e) => {

            e.preventDefault();

            auth.signInWithEmailAndPassword( email, password )

             .then((authUser) => {

                console.log(authUser);

             })





             .catch((error) => {

                console.log(error.message);
             }
             );

        }

  return (



    <div className='signup-screen'>

    <form>

        <h1>Sign In</h1>






        <input placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value) } />


        <input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} />

        <button type='submit' onClick={signIn} >Sign In</button>

        <p>

        <span className='sign-up-p'>New to Netflix?</span>

        <Link style={{color: 'white'}} to={''} onClick={register} >Sign up now</Link>

        </p>

    </form>

   
      
    </div>
  )
}





export default SignUpScreen
