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
import childcare from './pages/childcare';
import login from './pages/login';
import about from './pages/about';
import FAQs from './pages/FAQs';
import meetNGreet from './pages/meetNGreet';

import Eldercare from './pages/eldercare';
function App() {

 

  return (
    <Router>
      <NavBar />
      <Routes>
          <Route path='/login' element={<login/>}/>
          <Route path='/about' element={<about/>}/>
          <Route path='/FAQs' element={<FAQs/>}/>
          <Route path='/meetNGreet' element={<meetNGreet/>}/>         
          <Route path='/childcare' element={<childcare/>}/>
          <Route path='/eldercare' element={<Eldercare/>}/>
      </Routes>
    </Router>

   
  );
};

export default App;


