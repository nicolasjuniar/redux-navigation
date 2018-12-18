import {CHANGE_SCREEN} from "../action/ActionTypes";

const initialState = {
    screen: ''
}

const screenReduer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SCREEN: {
            return {
                ...state,
                screen: 'change'
            }
        }
        default: {
            return state
        }
    }
}

export default screenReduer
