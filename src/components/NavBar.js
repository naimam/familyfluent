import React from 'react'
import { Link } from 'react-router-dom'
import {
  Nav, Navbar, NavDropdown, Button, Form, Modal, ToggleButton, ButtonGroup, InputGroup, Container,
} from 'react-bootstrap';

import './NavBar.css';

import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import awsExports from "../aws-exports";
Amplify.configure(awsExports);



const NavBar = () => {

  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
        {/* <Navbar.Brand as= {Link} to="/">
         
        {' '}
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='m-auto'>
            <Nav.Link as= {Link} to="/">Home</Nav.Link>
            <Nav.Link as= {Link} to="/about">About</Nav.Link>
            <Nav.Link as= {Link} to="/FAQs">FAQs</Nav.Link>
            <Nav.Link as= {Link} to="/meetNGreet">Meet N Greet</Nav.Link>
            <Nav.Link as= {Link} to="/registration">Schedule</Nav.Link>

            
            <NavDropdown title="Childcare" id="basic-nav-dropdown">
              <NavDropdown.Item as= {Link} to="/childcare">Tuition</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cirriculm"> Curriculum </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tour"> Tour </NavDropdown.Item>

            </NavDropdown>

            <NavDropdown title="Eldercare" id="basic-nav-dropdown">
            <NavDropdown.Item as= {Link} to="/activities">Activities</NavDropdown.Item>
              <NavDropdown.Item as= {Link} to="/eldercare">Pricing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tour" > Tour </NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link as= {Link} to="/sustain">Sustainability</Nav.Link>
            <Nav.Link as= {Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as= {Link} to="/login">Account</Nav.Link>

          </Nav>

          
        </Navbar.Collapse>
        


      </Navbar>
    
    
  
    </>
  );


}
export default NavBar;