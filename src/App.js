import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.js';
import Navbar from './Navbar.js'
import Posts from './Posts.js'
import PostWrite from './PostWrite.js'
import PostEdit from './PostEdit.js'
import PostView from './PostView.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<div><Navbar /><Posts /></div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/write" element={<div><Navbar /><PostWrite /></div>} />
          <Route path="/edit" element={<div><Navbar /><PostEdit /></div>} />
          <Route path="/view/*" element={<div><Navbar /><PostView /></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
