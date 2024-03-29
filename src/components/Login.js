import React, { Fragment } from 'react';
import { Routes,BrowserRouter,Route, Link } from 'react-router-dom'; // Import BrowserRouter, Route, and Link
import logo from '../img/logo.png';
import './Login.css';
import Homepage from './Homepage';
import Signup from './Signup'
import Nav from './Nav';

const Login = () => {


  return (
    <div>
      <div className="main"></div>
      <Link to="/"><button className='homeroute'>Back to Home page</button></Link>

      <div className="login">
        <img src={logo} className="log" />
        <form action='/homepage'>
          <table>
            <tr>
              <td>Enter your Username</td>
              <td><input type="text" required/></td>
            </tr>
            <tr>
              <td>Enter your Password</td>
              <td><input type="password" required/></td>
            </tr>
            <tr>
              <td colSpan="2"><input type="submit" style={{ marginLeft: '170px', marginTop: '140px' }} /></td>
            </tr>
          </table>
        </form>
      </div>
      </div>
  );
};

export default Login;
