import {createStore, combineReducers} from 'redux'
import ScreenReducer from './reducer/ScreenReducer'

const rootReducer = combineReducers({
    screen: ScreenReducer
})

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore
