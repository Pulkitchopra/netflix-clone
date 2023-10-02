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

  




const product = [
  {
    id: 1,
    name: 'Basic',
    priceID: 'price_1NwQlNSFazfVLS6YF6G17GLX'
  },
  {
    id: 2,
    name: 'Standard',
    priceID: 'price_1NwoCISFazfVLS6YOPjirRtV'
  },  
  {
    id: 3,
    name: 'Premium',
    priceID: 'price_1NwoD0SFazfVLS6YgaoyThqT'
  },
]





const UserProfile = () => {

    const user = useSelector(selectUser);


    const item =  
      {
        price: 'price_1NwQlNSFazfVLS6YF6G17GLX',
        quantity: 1,
      }  

    const standard =  
      {
        price: 'price_1NwoCISFazfVLS6YOPjirRtV',
        quantity: 1,
      }  







    const premium = 
    
    
      {
        price: 'price_1NwoD0SFazfVLS6YgaoyThqT',
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







    const checkoutOption = {
      lineItems: [standard],
      mode: 'subscription',
      successUrl: `${window.location.origin}/`,

      cancelUrl: `${window.location.origin}/login`,
      
    }
    const redirectToStandard = async () => {
      console.log('redirectToCheckout');
      const stripe = await getStripe();
      const {error} = await stripe.redirectToCheckout(checkoutOption);
      console.log(error)
    }




    const checkoutPremium = {
      lineItems: [premium],
      mode: 'subscription',

      successUrl: `${window.location.origin}/`,
      cancelUrl: `${window.location.origin}/login`,
      
    }


    const redirectToPremium = async () => {
      console.log('redirectToCheckout');
      const stripe = await getStripe();
      const {error} = await stripe.redirectToCheckout(checkoutPremium);
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

    <div className='subscription'>


        <div>
        <p>Basic</p>

        </div>
        <button className='netflix-subscription-button' onClick={redirectToCheckout} >Subscribe</button>
        </div>
        
         <div className='subscription'>


        <div>
        <p>Standard</p>
        </div>
        <button className='netflix-subscription-button' onClick={redirectToStandard} >Subscribe</button>

        </div>

    <div className='subscription'>




        <div>
        <p>Premium</p>
        </div>
        
        <button className='netflix-subscription-button' onClick={redirectToPremium} >Subscribe</button>

        </div>


    <button className='logout-button' onClick={() => auth.signOut()}>LogOut</button>





    </div>
    </div>
    </div>
    </div> 
    </div>
  )
}

export default UserProfile
