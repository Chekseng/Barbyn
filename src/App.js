import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './Components/Main/Main';
import ScrollToTop from './Components/Navbar/ScrollToTop';

function App() {
  
  return (
    <Router>
      <ScrollToTop />
      <Main/>
    </Router>
  );
}

export default App;
