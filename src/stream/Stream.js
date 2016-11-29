import React, { Component } from 'react';
import { Grid,  Row, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class Stream extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={8} mdOffset={2} xs={12}>
                        <StreamItem title="First title" source="Slashdot"/>
                        <StreamItem title="Second title" source="Slashdot"/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

class StreamItem extends Component {
    render() {
        return (
            <Panel>
                <ListGroup fill>
                    <ListGroupItem><small>{ this.props.source }</small></ListGroupItem>
                    <ListGroupItem><h4>{ this.props.title }</h4></ListGroupItem>
                </ListGroup>
            </Panel>
        );
    }
}

export default Stream;
