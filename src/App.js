import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './Components/style.css';
import Kids from './Components/Kids';
import Drama from './Components/Drama';
import Comedy from './Components/Comedy';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/drama' element={<Drama />}/>
        <Route path='/kids' element={<Kids />}/>
        <Route path='/comedy' element={<Comedy />}/>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
