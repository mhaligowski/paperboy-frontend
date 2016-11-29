import React, { Component } from 'react';
import { Navbar, Grid, Accordion, Panel, Row, Col } from 'react-bootstrap';

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

        <Grid>
          <Row>
            <Col md={8} mdOffset={2} xs={12}>
              <Accordion accordion>
                <Panel header="First title">
                </Panel>
                <Panel header="Second title">
                </Panel>
              </Accordion>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
