import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {AppWithNavigationState, store,TopWithNavigationState} from './Store'
import ContainerScreen from "../source/ContainerScreen";

export default class App extends Component {
    render() {
        return (
          <Provider store={store}>
              <TopWithNavigationState/>
          </Provider>
        );
    }
}
