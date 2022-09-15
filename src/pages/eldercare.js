import React from 'react'
import Card from 'react-bootstrap/Card';


function eldercare() {
  return (
    <div className='conatiner'>
    <div className='childcare spacer' style={{marginLeft:'5%'}}>
    <Card style={{ width: '70em'}}>
      <Card.Body>
      <Card.Title style={{fontWeight:'bold',textAlign:'center'}}>Eldercare Pricing:</Card.Title>
      <Card.Text style={{textAlign:'center'}}> 
        As each person is special, each situation calls for different metrics
        <br/>
        <br/>
        <h4>Companion Care: $$$</h4>
        <h4>Custodial Care: $$$</h4>
        <h4>Palliative Care: $$$$</h4>
      </Card.Text>
      <Card.Img variant="top" src="https://i.imgur.com/UMqBLJO.jpeg" />
      </Card.Body>
    </Card>
    </div>
  
    </div>
  )
}

export default eldercare