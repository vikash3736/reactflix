import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
