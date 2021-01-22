import React from 'react';
import './App.css';
import { Header, Foot, Viewer } from "..";
import { content } from '../../content';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Viewer content={content} />
      <Foot />
    </div >
  );
}

export default App;
