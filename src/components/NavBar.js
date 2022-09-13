import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to='/' classname='nav-link'>Home</Link>
        <ul>
            <Link to='/src/pages/eldercare.js'>Elder care</Link>
            <Link to='/src/pages/childcare.js'>Child care</Link>
        </ul>
    </nav>
  )
}

export default NavBar