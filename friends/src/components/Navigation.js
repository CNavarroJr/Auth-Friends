import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation (props) {

  return (
    <div className='nav'>
      <Link className='nav-links' to='/login' >Login</Link>
      {localStorage.getItem('token') && <Link className='nav-links' to='/friendlist'>Friends</Link>}
      {localStorage.getItem('token') && <Link className='nav-links' to='/addfriend'>Add Friend</Link>}
    </div>
  )

}