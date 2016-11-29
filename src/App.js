import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import Stream from './stream/Stream.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Paperboy</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>

        <Stream />
      </div>
    );
  }
}

export default App;
