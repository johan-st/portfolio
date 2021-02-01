import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li><Link className="header__nav-link" to="/">about</Link></li>
        <li><Link className="header__nav-link" to="/projects">projects</Link></li>
        <li><Link className="header__nav-link" to="/contact">contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
