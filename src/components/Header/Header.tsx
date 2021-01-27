import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import me from './me.jpg';

const Header = () => {
  return (
    <section className="header">
      <Link className="header__img-link" to={'/'}>
        <img className="header__img" src={me} alt="Johan Strand" />
      </Link>
      <div className="header__card-container">
        <div className="header__card">
          <h1 className="header__title">Johan Strand</h1>
          <h2 className="header__subtitle">full stack developer</h2>
        </div>
      </div>
    </section>
  )
}

export default Header
