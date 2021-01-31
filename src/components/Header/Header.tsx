import React from 'react'
import { Link } from 'react-router-dom';
import { Nav } from '..'
import './Header.css'
import me from './me.jpg';

type HeaderProps = {
  content: ContentModel
}

const Header = (props: HeaderProps) => {
  return (
    <section className="header">
      <Link className="header__img-link" to={'/'}>
        <img className="header__img" src={me} alt="Johan Strand" />
      </Link>
      <Link className="header__card" to={'/'}>
        <h1 className="header__title">Johan Strand</h1>
        <h2 className="header__subtitle">full stack developer</h2>
      </Link>
      <Nav />
    </section>
  )
}

export default Header
