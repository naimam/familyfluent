import React from 'react'
import NavBar from './NavBar'


const Header = () => {
  return (
   <header className='Header'>
    <div><img src='https://i.imgur.com/AdJh1wp.png' alt='Logo' className='brand' ></img></div>
    <img src='https://i.imgur.com/nBpjMln.png' alt='logo' className='logo' style={{textAlign:'right'}}></img>
   </header>
  )
}

export default Header