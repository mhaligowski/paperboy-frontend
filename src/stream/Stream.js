import React, { Component } from 'react';
import { Grid, Row, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

import 'whatwg-fetch';

class Stream extends Component {

    constructor() {
        super();

        this.state = {
            items: []
        }
    }

    loadData() {
        fetch("http://streams.paperboy-149314.appspot.com/items")
            .then(r => r.json())
            .then(j => this.setState({
                items: j
            }));
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        var items = this.state.items.map((item) => {
            return (
                <StreamItem key={item.StreamItemId} item={item} />
            );
        });

        return (
            <Grid>
                <Row>
                    <Col md={8} mdOffset={2} xs={12}>
                        {items}
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
                    <ListGroupItem><small>Slashdot</small></ListGroupItem>
                    <ListGroupItem>
                        <a href={this.props.item.TargetId} target="_blank">
                            <h4>{this.props.item.Title}</h4>
                        </a>
                    </ListGroupItem>
                </ListGroup>
            </Panel>
        );
    }
}

export default Stream;
