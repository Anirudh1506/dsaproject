import React from 'react';
import {Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Route
import Login from './components/Login';
import Homepage from './components/Homepage'; // Import your homepage component
import GitHubStats from './components/Github';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Nav from './components/Nav';
const App = () => {
  return (
      <>
        <Routes>
            <Route index element={<Landing/>}/>
            <Route path='/sign-in' element={<Login/>}/>
            <Route path='/sign-up' element={<Signup/>}/>
            <Route path='/homepage' element={<Homepage/>}/>
        </Routes>
      </>
  );
};

export default App;
