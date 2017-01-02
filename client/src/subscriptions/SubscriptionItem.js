import React, { Component } from 'react';
import { Panel, Label } from 'react-bootstrap';

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

export default SubscriptionItem;
