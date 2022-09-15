import React from 'react'
import Card from 'react-bootstrap/Card';

function activities () {
  return (
    <div className='container spacer'>
    <div className='spacer'>
      <h1 style={{textAlign:'center'}}>Activity Outlines</h1>
    <Card style={{ width: '70rem' }}>
      <Card.Body>
      <Card.Title style={{fontWeight:'bold'}}>Cognitive Stimulation</Card.Title>
      <Card.Text>
      Activities designed to stimulate the mind are one of the major components of adult care activities. Games with pattern recognition and repetitive interaction can help seniors who suffer from a failing memory. Monopoly, Scrabble, and other word games require seniors to exercise their minds while encouraging social interaction with other players. Card games are also great for cognitive stimulation.
      </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='spacer'>
    <Card style={{ width: '70rem' }}>
      <Card.Body>
      <Card.Title style={{fontWeight:'bold'}}>Relaxation</Card.Title>
      <Card.Text>
      At some point, everyone needs a break. Seniors may sit in a lounge area and shoot the breeze with friends or get their hair and nails done. Other fun but relaxing activities include watching old movies and eating popcorn.
      </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='spacer'>
    <Card style={{ width: '70rem' }}>
      <Card.Body>
      <Card.Title style={{fontWeight:'bold'}}>Daily Tasks</Card.Title>
      <Card.Text>
      For seniors who miss the days when they could perform many routine tasks on their own, spending a day in the kitchen cooking and baking are a real treat. Other times, activity coordinators may plan special outdoor gardening activities or trips to the local supermarket. These activities allow seniors to perform routine tasks for themselves in a safe environment.
      </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='spacer'>
    <Card style={{ width: '70rem' }}>
      <Card.Body>
      <Card.Title style={{fontWeight:'bold'}}>Medical Activities</Card.Title>
      <Card.Text>
      Adult day care programs sometimes offer health services. Activities for seniors that involve medical care such as physician visits, podiatry, nursing visits, and nursing staff help with medication management; while therapists help with rehabilitation services like physical therapy, occupational therapy, and speech therapy.
      </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='spacer'>
    <Card style={{ width: '70rem' }}>
      <Card.Body>
      <Card.Title style={{fontWeight:'bold'}}>Games</Card.Title>
      <Card.Text>
      Games are multi-functional: for mental exercises and sometimes to strengthen the body. The activities director adds games create interaction between recipients, so you won't find just bingo and cards.<br/>
      1. Crossword<br/>
      2. Scenic Puzzles <br/>
      3. Beach-ball Volleyball<br/>
      4. Sudoku Puzzles <br/>
      5. and many more!
      </Card.Text>
      </Card.Body>
    </Card>
    </div>
  </div>
  )
}

export default activities