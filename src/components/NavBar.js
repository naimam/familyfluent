import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='NavBar'>
       <ul>
        <il><Link to='/src/App.js'>Home</Link></il>
        <il><Link to='/src/pages/eldercare.js'>Elder Care</Link></il>
        <il><Link to='/src/pages/childcare.js'>Child Care</Link></il>
       </ul>
    </div>
  )
}

export default NavBar