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
import Contact from './pages/contact'
import Tour from './pages/tour'
import Registration from './pages/registration'
import Activities from './pages/activities.js'
import Cirriculm from './pages/curriculm.js'
import Sustain from './pages/sustain'

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
        <Route path='/contact' element={<Contact />} />
        <Route path='/tour' element={<Tour />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/activites' element={<Activities />} />
        <Route path='/cirriculm' element={<Cirriculm />} />
        <Route path='/sustain' element={<Sustain />} />
      </Routes>
      </Router>
      
      
      {/* <div>
      <Footer/>
      </div> */}
    </>
  );
};

export default App;