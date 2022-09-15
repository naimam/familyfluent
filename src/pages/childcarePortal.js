import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './login.css';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function childcarePortal() {
  return (
    <Container className='login-container'>
      <h1> ChildCare Portal</h1>

      <Row className="g-2">
          <Col>

            <Link to='/login/childcarePortal/huey-blue'>
              <Card style={{ width: '14rem' }}>
                <Card.Img style={{ height: '12rem' }} variant="top" src={require('../pictures/Icons/child.png')} />
              <Card.Body>
                <Card.Title>Huey Blue</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          </Col>

          <Col>
            <Link to='/login/childcarePortal/butcher-blue'>
              <Card style={{ width: '14rem' }}>
                <Card.Img style={{ height: '12rem' }} variant="top" src={require('../pictures/Icons/child.png')} />
              <Card.Body>
                <Card.Title>Butcher Blue</Card.Title>
              </Card.Body>
            </Card>
            </Link>
            </Col>

          

        
        

      </Row>

      <Row>

        <Button className="addButton" variant="primary" size="lg" href="/login/childcarePortal/add-child" block> Add Child </Button>
        

      </Row>

    


    </Container>
  )
}

export default childcarePortal