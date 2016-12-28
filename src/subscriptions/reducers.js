export default function update(state = {}, action) {
    if (action.type === 'ADD_SUBSCRIPTION') {
        var oldSubscriptions = state.hasOwnProperty("subscriptions") ?
            state.subscriptions :
            [];
        var subscriptions = [action.subscription, ...oldSubscriptions];

        return Object.assign({}, state, {
            subscriptions: subscriptions
        });
    }

    return state;
}