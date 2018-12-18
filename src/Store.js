import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {connect} from 'react-redux'
import {applyMiddleware, compose, createStore} from 'redux'
import {createReactNavigationReduxMiddleware, reduxifyNavigator} from 'react-navigation-redux-helpers'
import RootReducer from './reducers/RootReducer'
import AppNavigator from './components/AppNavigator'
import TopNavigator from '../source/Top/TopNavigator'
import BottomNavigator from '../source/Bottom/BottomNavigator'

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav)
const Container = reduxifyNavigator(AppNavigator, 'root')
const mapStateToProps = state => ({
    state: state.nav
})
const AppWithNavigationState = connect(mapStateToProps)(Container)

const Top = reduxifyNavigator(TopNavigator, 'root')
const Bottom = reduxifyNavigator(BottomNavigator, 'root')

const BottomWithNavigationState = connect(mapStateToProps)(Bottom)
const TopWithNavigationState = connect(mapStateToProps)(Top)

const store = createStore(
    RootReducer,
    compose(applyMiddleware(middleware, thunk, logger)),
)

export {store, AppWithNavigationState, BottomWithNavigationState, TopWithNavigationState}
