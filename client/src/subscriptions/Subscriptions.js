import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Grid, Row, Col,
    Form, FormGroup, FormControl, Button, InputGroup
} from 'react-bootstrap';

import SubscriptionItem from './SubscriptionItem'

class Subscriptions extends Component {

    constructor(props) {
        super(props);
        this.state = {url: ''};
        this.handleInput = this.handleInput.bind(this);
    }

    loadData() {
        fetch("http://subscriptions.paperboy-149314.appspot.com/subscriptions?user_id=dummy_id")
            .then(r => r.json())
            .then((l) => {
                l.forEach((element) => {
                    this.props.addSubscription(element);
                }, this);
            });
    }

    componentDidMount() {
        this.loadData();
    }

    handleInput(e) {
        this.setState({url: e.target.value});
    }

    render() {
        let items = this.props.subscriptions.elements.map(s => {
            return (
                <SubscriptionItem key={s.SubscriptionId} subscription={s} />
            );
        });

        return (
            <Grid>
                <Row>
                    <Col md={8} mdOffset={2} xs={12}>
                        <h4>Add new subscription</h4>
                        <Form onSubmit={() => this.props.createSubscription(this.state.url)}>
                            <FormGroup>
                                <InputGroup>
                                    <FormControl type="text"
                                        value={this.state.url}
                                        onChange={this.handleInput}
                                        placeholder="https://gravityfallsnews.com/feed/rss.xml" />
                                    <InputGroup.Button>
                                        <Button type="submit">
                                            Add
                                        </Button>
                                    </InputGroup.Button>
                                </InputGroup>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>

                <Row>
                    <Col md={8} mdOffset={2} xs={12}>
                        <h4>Your subscriptions</h4>
                    </Col>
                </Row>

                <Row>
                    <Col md={8} mdOffset={2} xs={12}>
                        {items}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        subscriptions: state.subscriptions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSubscription: (s) => {
            dispatch({
                type: "ADD_SUBSCRIPTION",
                subscription: s
            });
        },
        createSubscription: (url) => {
            dispatch({
                type: "NEW_SUBSCRIPTION",
                url: url
            });
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Subscriptions);