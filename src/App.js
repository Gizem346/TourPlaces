import React from 'react';
import Card from './Card';
import Navbar from './Navbar';
import "./App.css"

const App = () => {
  return (
    <div className="App">
      

      <Navbar/>
      {/* <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form> */}

      <div className="big-title">
        <h3>Popular Tour Places In The World </h3>
      </div>

      <Card/>

    </div>
  );
}

export default App;
