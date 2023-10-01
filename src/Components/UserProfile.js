import React from 'react'
import {useSelector} from 'react-redux';
import {selectUser} from '../features/counter/userSlice';


import {auth} from '../firebase';

import { loadStripe } from '@stripe/stripe-js';





let stripePromise;
const getStripe = () => {


  if(!stripePromise){

    stripePromise = loadStripe('pk_test_51NwPBYSFazfVLS6Y31U7PVhjsNaah2RGtGL5uaKLeJdKAfVisbjfyNrOydqwuUlSvor3NEfNLDcjMznXgonN60Wf00Yx7rcdiW');
  }
  return stripePromise;
}

  


const UserProfile = () => {

    const user = useSelector(selectUser);

    const item = {
      
      price: 'price_1NwQlNSFazfVLS6YF6G17GLX',
  
      quantity: 1,
    }


    const checkoutOptions = {
      lineItems: [item],
      mode: 'subscription',

      successUrl: `${window.location.origin}/`,
      cancelUrl: `${window.location.origin}/login`,
      
    }




    const redirectToCheckout = async () => {
      console.log('redirectToCheckout');
      const stripe = await getStripe();
      const {error} = await stripe.redirectToCheckout(checkoutOptions);
      console.log(error)
    }


  return (
    

    <div className='profile-screen'>

    <div className='profile-screen-box'>

    <h1>Edit Profile</h1>

    <div className='profile-screen-info'>

    <div className='profile-screen-details'>



    <h4>{user.email}</h4>



    <div className='profile-screen-netflix-plans'>

    <h4>Netflix Plans</h4>

    <button onClick={redirectToCheckout} >Subscribe</button>

    <button onClick={() => auth.signOut()}>LogOut</button>





    </div>
    </div>
    </div>
    </div> 
    </div>
  )
}

export default UserProfile
