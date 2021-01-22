import React from 'react'
import './Header.css'
import me from './me.jpg';

const Header = () => {
  return (
    <section className="header">
      <img className="header__img" src={me} alt="Johan Strand" />
      <div className="header__card">
        <h1 className="header__title">Johan Strand</h1>
        <h2 className="header__subtitle">full stack developer</h2>
      </div>
    </section>
  )
}

export default Header
