import React from 'react'
import {useSelector} from 'react-redux';
import {selectUser} from '../features/counter/userSlice';


import {auth} from '../firebase';

const UserProfile = () => {

    const user = useSelector(selectUser);



  return (

    <div className='profile-screen'>

    <div className='profile-screen-box'>

    <h1>Edit Profile</h1>

    <div className='profile-screen-info'>

    <div className='profile-screen-details'>



    <h4>{user.email}</h4>



    <div className='profile-screen-netflix-plans'>

    <h4>Netflix Plans</h4>

    <button>Subscribe</button>

    <button onClick={() => auth.signOut()}>LogOut</button>

    </div>
    </div>
    </div>
    </div> 
    </div>

  )
}




export default UserProfile
