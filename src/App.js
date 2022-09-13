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

import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {

 

  return (
    <div className="container">
      <Header/>
      <NavBar/>
      <h1>test</h1>
      <Footer/>
    </div>
  );
}

export default App;


