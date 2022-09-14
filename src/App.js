import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Childcare from './pages/childcare';
import Login from './pages/login';
import About from './pages/about';
import FAQs from './pages/FAQs';
import MeetNGreet from './pages/meetNGreet';
import Eldercare from './pages/eldercare';
import Home from './pages/home';

function App() {

 

  return (
    <><Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/FAQs' element={<FAQs />} />
        <Route path='/meetNGreet' element={<MeetNGreet />} />
        <Route path='/childcare' element={<Childcare />} />
        <Route path='/eldercare' element={<Eldercare />} />
      </Routes>
      </Router>
      
      
      {/* <div className="container">
        
        <Footer />
      </div> */}
    </>
  );
};

export default App;