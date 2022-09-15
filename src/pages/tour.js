import React from 'react'
import Card from 'react-bootstrap/Card';


function tour  () {
  return (
    <div>
    {/* <div className='tour right'>
        <h1>Coming Soon!</h1>
        <p>We are proud to be providing a VR experience of our care center! This will help promote familiarity for all family members involved.</p>
        <p>Until then, Feel free to call (888 888-8888) and ask to tour your local campus</p>
    </div>
     <img src='https://i.imgur.com/ivAolSj.jpg' style={{margin:'10px',width:'40%', borderRadius:'5px',marginLeft:'5%'}} className='left'/> */}
     <div className='virtualTour'>
      <div className='spacer'>
        <Card style={{ width: '90%', margin:'20px'}} >
      <Card.Body>
        <Card.Title style={{textAlign:'center', padding:'10px'}}>Virtual Tour</Card.Title>
        <Card.Text style={{textAlign:'center'}}>
         Click and drag to walk through one of our very own childcare centers! <br/>
         The tab on the right hand side allows you to view additional rooms
        </Card.Text>
      </Card.Body>
    </Card>
       </div >
       <div className='spacer'>
     <iframe width={'100%'} height={'500'}  src="https://www.google.com/maps/embed?pb=!4v1663198414732!6m8!1m7!1sCAoSLEFGMVFpcFB2MXFOTFBnMHBhTHpGM1R4ZXR4X1FicGYwanFUdTl1VjdNLWc0!2m2!1d39.200369020931!2d-84.513128238063!3f340!4f0!5f0.7820865974627469" className='virtualTour' style={{width:'500'}}></iframe>
     </div>
     </div>
     </div>
  )
}

export default tour