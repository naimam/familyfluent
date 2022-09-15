import React from 'react'
import Card from 'react-bootstrap/Card';

function childcare() {
  return (
      <div className='spacer' >
        <div className='left childcare' >
    <Card style={{ width: '30em'}}>
    <Card.Img variant="top" src="https://i.imgur.com/6Q51cfM.jpg" />
      <Card.Body>
      <Card.Title style={{fontWeight:'bold',textAlign:'center'}}>Six weeks to 2 years:</Card.Title>
      <Card.Text style={{textAlign:'center'}}> 
        Monthly: $$
      </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='right childcare'>
    <Card style={{ width: '30em' }}>
    <Card.Img variant="top" src="https://i.imgur.com/RVNg3M6.jpeg" />
      <Card.Body>
      <Card.Title style={{fontWeight:'bold',textAlign:'center'}}>2 years to 6 Years:</Card.Title>
      <Card.Text style={{textAlign:'center'}}> 
        Monthly: $$
      </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default childcare