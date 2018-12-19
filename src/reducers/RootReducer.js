import {combineReducers} from "redux";
import ColorReducer from './ColorReducer'
import AppNavigator from '../components/AppNavigator'

const navReducer = (state, action) => {
    const appState = AppNavigator.router.getStateForAction(action, state)
    return appState || state
}

const appReducer = combineReducers({
    nav: navReducer,
    color: ColorReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer
