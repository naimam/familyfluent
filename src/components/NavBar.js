import React from 'react'
import { Link } from 'react-router-dom'
import {
  Nav, Navbar, NavDropdown, Button, Form, Modal, ToggleButton, ButtonGroup, InputGroup, Container,
} from 'react-bootstrap';


const NavBar = () => {

  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
        {/* <Navbar.Brand as= {Link} to="/">
         
        {' '}
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as= {Link} to="/about">About</Nav.Link>
            <Nav.Link as= {Link} to="/FAQs">FAQs</Nav.Link>
            <Nav.Link as= {Link} to="/meetNGreet">Meet N Greet</Nav.Link>

            
            <NavDropdown title="Childcare" id="basic-nav-dropdown">
              <NavDropdown.Item as= {Link} to="/childcare">About</NavDropdown.Item>
              <NavDropdown.Item href="#"> Services </NavDropdown.Item>
              <NavDropdown.Item href="#"> Curriculum </NavDropdown.Item>
              <NavDropdown.Item href="#"> Testimonials </NavDropdown.Item>
              <NavDropdown.Item href="#"> Contact </NavDropdown.Item>

            </NavDropdown>

            <NavDropdown title="Eldercare" id="basic-nav-dropdown">
              <NavDropdown.Item as= {Link} to="/eldercare">About</NavDropdown.Item>
              <NavDropdown.Item href="#"> Services </NavDropdown.Item>
              <NavDropdown.Item href="#"> Testimonials </NavDropdown.Item>
              <NavDropdown.Item href="#"> Contact </NavDropdown.Item>
              
            </NavDropdown>
           

           

          </Nav>

          <Nav.Item className="ms-auto" variant>
              <Nav.Link as= {Link} to="/login">Login</Nav.Link>
          </Nav.Item>
            
          
        </Navbar.Collapse>
        


      </Navbar>
    
    
  
    </>
  );


}
export default NavBar;