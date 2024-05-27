import React, { useState } from 'react'
import {Link } from 'react-router-dom';
import '../style/navbar.css'

function Navbar() {
    const [menu, setmenu] = useState('home');
  return (
    <nav className='navbar'>
        <ul className='navleft'>
          <Link style={{textDecoration:'none'}} to='/'><img className='imagefluke' src='unfluke.png' alt="Loading.." active="true" /></Link>
        </ul>
        <ul className="navright">
          <li onClick={()=>{setmenu('dashboard')}}><Link style={{textDecoration:'none'}} to='/dashboard'>Dashboard{menu==='dashboard'?<hr/>:''}</Link></li>
          <li onClick={()=>{setmenu('scanner')}}><Link style={{textDecoration:'none'}} to='/scanner'>Scanner{menu==='scanner'?<hr/>:''}</Link></li>
        </ul>
          
      </nav>
  )
}

export default Navbar
