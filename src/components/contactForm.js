import React from 'react'
import emailjs from 'emailjs-com'
import Card from 'react-bootstrap/Card';



const contactForm = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_cos550m','template_5nwjeay', e.target,'V05nD0_UhsGRHBeiN').then(res=>{console.log(res)}).catch(err=>console.log(err))
    }
  return (
    <div className='spacer'>
    <div className='container'>
        <div className='left'>
        <div style={{display:'flex'}}>
            <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://i.imgur.com/E34ZyYv.jpg" />
            <Card.Body>
            <Card.Title style={{textAlign:'center',fontWeight:'bold'}}>How else can we help you?</Card.Title>
            <Card.Text style={{textAlign:'center'}}>
            You can reach us by phone at 888-888-8888,<br/>Or use the contact form to shoot us an email.<br/> We look forward to helping you!
            </Card.Text>
            </Card.Body>
            </Card>
        </div>
        </div>
        <div className='contactForm right'>
        <h1>Contact us!</h1>
        <p> Send us a message and we'll get back to you!</p>
        <form onSubmit={sendEmail}>
            <label>Name</label>
            <input type='text' name='name' className='form-control'/>

            <label>Email</label>
            <input type='email' name='email' className='form-control'/>

            <label>Message</label>
            <textarea name='message' rows='4' className='form-control'/>
            <input type="submit" value='send' className='form-control btn btn-primary' style={{marginTop:'10px', marginBottom: '5px', backgroundColor:'white', color: 'black'}}/>
        </form>
        </div>
    </div>
    </div>
  )
}

export default contactForm