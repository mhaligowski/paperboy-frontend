import React, { Component } from 'react';
import {
    Panel, Grid, Row, Col, Label,
    Form, FormGroup, FormControl, Button, InputGroup
} from 'react-bootstrap';

class Subscriptions extends Component {
    constructor() {
        super();

        this.state = {
            subscriptions: []
        }
    }

    loadData() {
        fetch("http://subscriptions.paperboy-149314.appspot.com/subscriptions?user_id=dummy_id")
            .then(r => r.json())
            .then(j => this.setState({
                subscriptions: j
            }));
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        let items = this.state.subscriptions.map(s => {
            return (
                <SubscriptionItem key={s.SubscriptionId} subscription={s} />
            );
        });

        return (
            <Grid>
                <Row>
                    <Col md={8} mdOffset={2} xs={12}>
                        <h4>Add new subscription</h4>
                        <Form>
                            <FormGroup>
                                <InputGroup>
                                    <FormControl type="text"
                                        placeholder="https://gravityfallsnews.com/feed/rss.xml" />
                                    <InputGroup.Button>
                                        <Button>Add</Button>
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

class SubscriptionItem extends Component {
    render() {
        var title;
        if (this.props.subscription.Title) {
            title = this.props.subscription.Title;
        } else {
            title = <Label bsStyle="warning">No title given</Label>;
        }

        return (
            <Panel>{title}</Panel>
        );
    }
}

export default Subscriptions;