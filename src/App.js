import React from 'react';
import Card from './Card';
import Navbar from './Navbar';
import "./App.css"

const App = () => {
  return (
    <div className="App">
      

      <Navbar/>

      <div className="big-title">
        <h3>Popular Tour Places In The World </h3>
      </div>

      <Card/>

    </div>
  );
}

export default App;
