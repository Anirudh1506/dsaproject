import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'
import Nav from './Nav'
const Landing = () => {
  return (
    <div>
      <div class="main"></div>
<div class="heading">
    <h1>Welcome to Compass</h1>
    <div class="but">
        <Link to='/sign-in'><button class="log">Login</button></Link>
        <Link to='/sign-up'><button class="Sign">Sign Up</button></Link>
    </div>
    </div>
</div>
  )
}

export default Landing
