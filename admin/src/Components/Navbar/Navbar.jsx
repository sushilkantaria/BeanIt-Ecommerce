import React from "react";
import './Navbar.css'
import logo from '../../assets/logo.png'
import admin from '../../assets/admin.jpg'
const Navbar=()=>{
    return(
        <div className='navbar'>
            <img src={logo} className='nav-logo' alt="logo img" />
            <img src={admin} className="nav-profile" alt="admin photo" />
        </div>
    )
}

export default Navbar
