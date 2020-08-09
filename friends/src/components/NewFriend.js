import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


export function NewFriend (props) {
  const [friend, setFriend] = useState({
    id: Date.now(),
    name: '',
    age: '',
    email: ''
  })

  const handleChange = (e) => {
    setFriend({...friend, [e.target.name]: e.target.value});
  };

  return (

    <form className='add-friend' onSubmit={(e) => {
      e.preventDefault()
      axiosWithAuth()
      .post('/api/friends', friend)
      .then(res => {
        console.log(res)
        props.history.push('/friendslist')
      })
      .catch(err => console.log(err))
    }}>

      <input 
      name='name'
      placeholder='Name'
      value={friend.name}
      onChange={handleChange} />

      <input 
      name='age'
      type='number'
      placeholder='Age'
      value={friend.age}
      onChange={handleChange} />

      <input 
      name='email'
      placeholder='Email'
      value={friend.email}
      onChange={handleChange} />

      <button className='button' type='submit'>Add Friend</button>
      
    </form>

  )

}