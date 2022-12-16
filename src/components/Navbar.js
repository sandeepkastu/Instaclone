import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    
    <nav>
    <div className="nav-wrapper white" >
      <Link to="/" className="brand-logo left">Instagram</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/signin">Signin</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/createpost">Create Post</Link></li>
      </ul>
    </div>
  </nav>
    
  )
}