import React from 'react'
import logo from '../img/logo.png'
import './Signup.css'
import Nav from './Nav'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div>
    <div class="main"></div>
    <Link to='/'><button class="homeroute">Back to Home page</button></Link>
<div class="login">
    <img src={logo} style={{width: '350px', position: 'absolute', left:'40px'}}/>
    <form action="\sign-in">
        <table style={{position: 'absolute', top: '120px'}}>
            <tr>
                <td>Enter your Full Name</td>
                <td><input type="text"/></td>
            </tr>
            <tr>
                <td>Enter your Username</td>
                <td><input type="text"/></td>
            </tr>
            <tr>
                <td>Enter your Email ID</td>
                <td><input type="text"/></td>
            </tr>
            <tr>
                <td>Enter your Mobile number</td>
                <td><input type="tel"/></td>
            </tr>
            <tr>
                <td>Enter your Password</td>
                <td><input type="password"/></td>
            </tr>
            <tr>
                <td colspan="2"><input type="submit" style={{position: 'absolute', marginLeft: '150px'}}/></td>
            </tr>
        </table>
    </form>
    </div>
    </div>
  )
}

export default Signup
