import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
  const loc = useLocation().pathname.split('/');
  const inactive = "header__nav-link"
  const active = "header__nav-link header__nav-link--active"


  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li><Link className={loc[1] === "stack" ? active : inactive} to="/stack">my-stack</Link></li>
        <li><Link className={loc[1] === "projects" ? active : inactive} to="/projects">projects</Link></li>
        <li><Link className={loc[1] === "contact" ? active : inactive} to="/contact">contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
