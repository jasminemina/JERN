import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.css';

const Navbar = () => (
  <div>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/all-decks'>All Decks</Link></li>
      <li><Link to='/creat-decks'>Create Decks</Link></li>
      <li><Link to='/deck-profile'>Deck Profile</Link></li>
      <li><Link to='/deck-view'>Deck View</Link></li>
      <li><Link to='/profile'>Profile</Link></li>
      <li><Link to='/summary'>Summary</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/logout'>Logout</Link></li>
    </ul>
  </div>
)

export default Navbar;
