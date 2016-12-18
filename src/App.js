import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

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

        { this.props.children }
      </div>
    );
  }
}

export default App;
