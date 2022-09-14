import React from 'react'
import '../App.css';

function about() {
  return (
    <div className='container'>
      <div className='body'>
        <div className='AboutHeader' style={{paddingTop:'10px'}}> About <img src='https://i.imgur.com/nBpjMln.png' style={{width:'20%'}}></img></div>
          <div className='AboutBody'>
            <div className='pictures left'>
            <img src='https://i.imgur.com/deU8gbt.jpg' alt='Child and adult highfiving' style={{width:'90%', borderRadius:'20px', filter: 'drop-shadow(30px 40px)' }}/>
            </div>
          <div className='Summary right'>
           <h1> Where your family becomes our family too...</h1>
           <p> FamilyFluent, once known as Helping Hands CC, is a dedicated care provider to ease the busy work-day stress</p>
         </div>
        </div>
      </div>
    </div>
  )
}

export default about