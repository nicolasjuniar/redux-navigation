import {CHANGE_COLOR, RED} from "../Constants";

const initialState={
    colorName: '#DE5448'
}

const colorReducer=(state=initialState,action)=>{
    switch(action.type){
        case CHANGE_COLOR:{
            return{
                ...state,
                colorName: action.payload
            }
        }
        default:
            return state
    }
}

export default colorReducer
