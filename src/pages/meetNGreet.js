import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';

function meetNGreet() {
  return (
   <div className='container'>
    <div className='MeetGrid'>
      <div className='grid-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='grid-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.imgur.com/7iNVHYT.jpg" />
      <Card.Body>
        <Card.Title>Ney Rivari</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='grid-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.imgur.com/1nSRFYw.jpg"  />
      <Card.Body>
        <Card.Title>Josephine Flore</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      </div>
   </div>
  )
}

export default meetNGreet