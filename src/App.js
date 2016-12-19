import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

import { IndexLinkContainer } from 'react-router-bootstrap';

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


          <Navbar.Collapse>
            <Nav pullRight>
              <IndexLinkContainer to="/">
                <NavItem eventKey={1}>
                  <Glyphicon glyph="list-alt"/>
                </NavItem>
              </IndexLinkContainer>
              <IndexLinkContainer to="/subscriptions">
                <NavItem eventKey={2}>
                  <Glyphicon glyph="eye-open" bsSize="large"/>
                </NavItem>
              </IndexLinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


        {this.props.children}
      </div>
    );
  }
}

export default App;
