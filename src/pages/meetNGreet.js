import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';

function meetNGreet() {
  return (
   <div className='container'>
    <div className='MeetGrid'>
      <div className='grid-item' style={{paddingLeft:'10%'}}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.imgur.com/RMpwRDf.jpg" />
      <Card.Body>
        <Card.Title>Madeline Wight</Card.Title>
        <Card.Text>
         Dedicated Branch leader and coordinator for lesson planning. Madeline loves to include new hands on ways of learning.
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
          Studying for a sports medicine degree, Ney spends her time with the children she'd love to work with one day.
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
          Training to be a speech specialist, Josephine gets a head start on teaching the alphabet and words to toddlers!
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      </div>
   </div>
  )
}

export default meetNGreet