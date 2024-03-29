import React from 'react'
import logo from '../img/logo.png'
import './Nav.css'
import { Outlet } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='navbar'>
      <ul>  
      <li><img src={logo} class="image"/></li>
      <li><a href="homepage">Home</a></li>
      <li><a href="#">Contests</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    </div>
  )
}

export default Nav
