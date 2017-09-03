import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = props => (
  <header className='navbar'>
    <Link to='/'>
      <img alt='logo' id='logo' src='/logo.png' />
    </Link>

    {/* <input type='search' /> */}
  </header>
)

export default Navbar
