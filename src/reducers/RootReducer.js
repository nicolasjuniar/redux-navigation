import {combineReducers} from "redux";
import ColorReducer from './ColorReducer'
import AppNavigator from '../components/AppNavigator'
import TopNavigator from '../../source/Top/TopNavigator'
import BottomNavigator from '../../source/Bottom/BottomNavigator'

const navReducer = (state, action) => {
    const appState = AppNavigator.router.getStateForAction(action, state)
    const topState = TopNavigator.router.getStateForAction(action, state)
    const bottomState = BottomNavigator.router.getStateForAction(action, state)
    return appState || topState || bottomState || state
}

const appReducer = combineReducers({
    nav: navReducer,
    color: ColorReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer
