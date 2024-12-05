import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import "../components/Mainlayout.css"

const Mainlayout = () => {
  return (
    <div>
      <h1>Welcome to Homepage</h1>
      <nav>
        <ul className='form'>
            <li><Link to="login">Login</Link></li>
            <li><Link to="registration">Register</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
    
  )
}
export default Mainlayout
