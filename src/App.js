import React from 'react';
import Card from './Card';
import Navbar from './Navbar';
import Header from './Header';
import "./App.css"

const App = () => {
  return (
    <div className="App">
      
      <Navbar/>

      <Header/>
      
      <Card/>

    </div>
  );
}

export default App;
