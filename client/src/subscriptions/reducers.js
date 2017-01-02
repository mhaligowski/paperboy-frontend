var addSubscriptionToState = function (state, subscription) {
    var oldElements = state.subscriptions.elements;

    var newSubscriptions = Object.assign({}, state.subscriptions, {
        elements: [subscription, ...oldElements]
    });

    return Object.assign({}, state, {
        subscriptions: newSubscriptions
    });
}

export function subscriptions(state, action) {
    if (action.type === 'ADD_SUBSCRIPTION') {
        return addSubscriptionToState(state, action.subscription);
    }

    if (action.type === 'NEW_SUBSCRIPTION') {
        var body = {
            url: action.url
        };
        fetch("http://feeds.paperboy-149314.appspot.com/feeds", {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => {
            if (!r.ok) {
                var error = new Error(r.statusText);
                error.response = r;
                throw error;
            } else {
                r.headers.forEach((v, n) => console.log(v, n));
            }
        }).catch(e => {
            e.response
                .text()
                .then(t => console.error(t));
        })
    }

    return state;
}