import React from 'react';
import PicSlides from '../components/PicSlides';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    
    <div>
      <div className='blogPost left'>
        <div className='topthird'>
      <Card style={{ width: '17rem'}}>
      <Card.Body>
        <Card.Title>New Experiences</Card.Title>
        <Card.Text>
          "My child loves to bring home what he made at daycare each day, and tell me about his new friends" - Naomi G.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='middlethird'>
    <Card style={{ width: '17rem' }}>
      <Card.Body>
        <Card.Title>Energized Twins</Card.Title>
        <Card.Text>
          "My twins seem to be never ending batteries, and the teachers are very patient with them" - Fiona E.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    
    <div className='topthird spacer'>
      <Card style={{ width: '17rem'}}>
      <Card.Body>
        <Card.Title>New Customer</Card.Title>
        <Card.Text>
         "As a new customer and a first time mother, things are overwhelming... but this is a peace of mind" - Bailey T.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='middlethird spacer'>
    <Card style={{ width: '17rem' }}>
      <Card.Body>
        <Card.Title>Long time Fan</Card.Title>
        <Card.Text>
          "I have been using their services since it started up at my office! It makes picking up my kid at the end of the day much easier" - Howard F.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
      </div>
      
      <div className='right'>
      <PicSlides />
      </div>
    </div>
  );
}

export default Home;