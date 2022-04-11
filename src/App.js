import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.js';
import Navbar from './Navbar.js'
import Posts from './Posts.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<div><Navbar /><Posts /></div>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
