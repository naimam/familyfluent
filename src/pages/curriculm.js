import React from 'react'
import Card from 'react-bootstrap/Card';

function curriculm (){
  return (
    <div className='container spacer'>
      <div className='spacer'>
        <h1 style={{textAlign:'center'}}>Curriculum Outlines</h1>
        <p style={{textAlign:'center'}}>Lesson plans change daily</p>
      <Card style={{ width: '70rem' }}>
        <Card.Body>
        <Card.Title style={{fontWeight:'bold'}}>Ages: 6 weeks to 1 year</Card.Title>
        <Card.Text>
         -Music and Movement: Singing and dancing to new Rhythms to work on motor and balance <br></br>
        -Phonological Awareness: Hearing and manipulating sounds and groups of sounds 
        </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className='spacer'>
      <Card style={{ width: '70rem' }}>
        <Card.Body>
        <Card.Title style={{fontWeight:'bold'}}>Ages: 1 year to 2 years</Card.Title>
        <Card.Text>
          -Art/Creative Representation: expressing personal feelings and refining hand-eye coordination <br/>
          -Dramatic play:  Expressing creavity and self-awareness
        </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className='spacer'>
      <Card style={{ width: '70rem' }}>
        <Card.Body>
        <Card.Title style={{fontWeight:'bold'}}>Ages: 2 years to 3 years</Card.Title>
        <Card.Text>
          -Language and Literacy: Listening and understanding speech <br/>
          -Counting: Learning to sort objects and compare numbers
        </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className='spacer'>
      <Card style={{ width: '70rem' }}>
        <Card.Body>
        <Card.Title style={{fontWeight:'bold'}}>Ages: 3 years to 6 years</Card.Title>
        <Card.Text>
          -Fine tuning Previously Introduced concepts and more indepth learning on grammar and math <br/>
          -Large Group Activities: introducing social awareness
        </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}

export default curriculm