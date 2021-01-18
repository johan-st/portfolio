import React from 'react';
import './App.css';
import me from './assets/me.jpg'

function App(): JSX.Element {
  return (
    <div className="App">
      <section className="header">
        <img className="header__img" src={me} alt="Johan Strand" />
        <div className="header__card">
          <h1 className="header__title">Johan Strand</h1>
          <h2 className="header__subtitle">full stack developer</h2>
        </div>
      </section>
      <div className="description">
        <h3>lorem</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officia dolorem cupiditate nobis, temporibus nihil dicta necessitatibus debitis nemo eaque eveniet neque ad enim omnis non beatae a. Cupiditate, molestiae?</p>
      </div>
      <section className="stack">
        <section className="stack__item">
          <h3 className="stack__itemTitle">React</h3>
        </section>
        <section className="stack__item">
          <h3 className="stack__itemTitle">NGINX</h3>
        </section>
        <section className="stack__item">
          <h3 className="stack__itemTitle">Docker</h3>
        </section>
        <section className="stack__item">
          <h3 className="stack__itemTitle">aws ec2</h3>
        </section>
      </section>
    </div >
  );
}

export default App;
