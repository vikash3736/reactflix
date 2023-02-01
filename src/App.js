import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
// import Banner from './components/Banner/Banner';

function App() {
  const user = null;
  return (
    <div className="App">
      <BrowserRouter>
      {
        !user ? <Login /> : <Routes>
        <Route exact path='/' element={<Home />} />
        {/* <Route exact path='/test' element={<Banner />} /> */}
      </Routes>
      }
        
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
