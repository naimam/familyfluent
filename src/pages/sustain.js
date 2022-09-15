import React from 'react'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';



function sustain () {
  return (
    <div className='container sustain spacer'>
      <div className='goal-statement'>
      <Card style={{ marigin:'20px' }}>
      <Card.Img variant="top" src="https://i.imgur.com/t6GHBsg.png" className='sustain-pic'/>
      <Card.Body>
        <Card.Title style={{color:'Green',fontWeight:'bold'}}>Our Goal:</Card.Title>
        <Card.Text>
        Family Fluent is committed to reducing 30% of our carbon emissions in the next 5 years by making sustainable changes to reach science-based targets. Join us as we embark on making the world a better place for all our families. 
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='spacer'>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>

        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </div>
    </div>
  )
}

export default sustain