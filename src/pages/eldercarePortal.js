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



function eldercarePortal() {
  return (
    <Container className='login-container'>
      <h1> Eldercare Portal</h1>

      <Row className="g-2">
          <Col>

            <Link to='/login/eldercarePortal/frenchie-blue'>
              <Card style={{ width: '14rem' }}>
                <Card.Img style={{ height: '12rem' }} variant="top" src={require('../pictures/Icons/child.png')} />
              <Card.Body>
                <Card.Title>Frenchie Blue</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          </Col>

          

          

        
        

      </Row>

      <Row>

        <Button className="addButton" variant="primary" size="lg" href="/login/eldercarePortal/add-elder" block> Add Elder </Button>
        

      </Row>

    


    </Container>
  )
}

export default eldercarePortal