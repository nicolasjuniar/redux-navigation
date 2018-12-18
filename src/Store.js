import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {connect} from 'react-redux'
import {applyMiddleware, compose, createStore} from 'redux'
import {createReactNavigationReduxMiddleware, reduxifyNavigator} from 'react-navigation-redux-helpers'
import RootReducer from './reducers/RootReducer'
import AppNavigator from './components/AppNavigator'

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav)
const App = reduxifyNavigator(AppNavigator, 'root')
const mapStateToProps = state => ({
    state: state.nav,
})
const AppWithNavigationState = connect(mapStateToProps)(App)

const store = createStore(
    RootReducer,
    compose(applyMiddleware(middleware, thunk, logger)),
)

export {store, AppWithNavigationState}
