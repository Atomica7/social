import logo from './logo.svg';
import React from 'react';
import Header from './components/header/Header.js';
import Menu from './components/menu/Menu.js';
import Profile from './components/profile/Profile.js';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Menu/>
      <Profile/>
    </div>
  );
}

export default App;
