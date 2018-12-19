import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {AppWithNavigationState, store} from './Store'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        );
    }
}
