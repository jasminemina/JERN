import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar.js';
import Login from './Login.js';
import Home from './Home.js';
import CreateDecks from './CreateDecks.js';
import AllDecks from './AllDecks.js';
import DeckProfile from './DeckProfile.js';
import Summary from './Summary.js';
import Profile from './Profile.js';
import DeckView from './DeckView.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route exact path='/' component={Home}/>
            <Route path='/all-decks' component={AllDecks}/>
            <Route path='/creat-decks' component={CreateDecks}/>
            <Route path='/deck-profile' component={DeckProfile}/>
            <Route path='/deck-view' component={DeckView}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/summary' component={Summary}/>
            <Route path='/login' component={Login}/>
          </div>
        </Router>
    </div>)
  }
}

export default App
