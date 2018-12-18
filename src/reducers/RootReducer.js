import {combineReducers} from "redux";
import ColorReducer from './ColorReducer'
import AppNavigator from '../components/AppNavigator'

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state)
    return newState || state
}

const appReducer = combineReducers({
    nav: navReducer,
    color: ColorReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer
