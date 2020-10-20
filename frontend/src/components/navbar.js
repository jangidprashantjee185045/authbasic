import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
const Navbar=()=>{
    return(
    <div className="Navbar">
         <div className="icon-navbar"><Link to="/">Scholarship Portal</Link></div>
         <div className="icon-navbar"><Link to="/signup">Signup</Link></div>
         <div className="icon-navbar"><Link to="/signin">Signin</Link></div>
    </div>
    
        )}

export default Navbar