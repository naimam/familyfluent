import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function FAQs() {
  return (
    <div style={{justifyContent:'center',display:'flex', paddingTop: '20px'}}>
    <Accordion defaultActiveKey="0" className='FAQSizing' style={{width:'50%'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is your child to teacher Ratio?</Accordion.Header>
        <Accordion.Body>
          We are happy to provide a 1:10 teacher to child ratio across our classrooms!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What age ranges do you offer service to?</Accordion.Header>
        <Accordion.Body>
          Age ranges from six weeks to 6 years old.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> Will my children be learning during daycare times?</Accordion.Header>
        <Accordion.Body>
          Yes! Each age range has a different lesson planned 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Will I be able to track my child's progress?</Accordion.Header>
        <Accordion.Body>
          Yes! We will be implementing an online gradebook to track children's progress.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Do you provide food and snacks during the day?</Accordion.Header>
        <Accordion.Body>
          Yes! 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>How often Do you clean the toys?</Accordion.Header>
        <Accordion.Body>
          Cleanings happen every 3 hours and disinfection each night.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default FAQs