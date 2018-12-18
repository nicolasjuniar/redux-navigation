import {CHANGE_COLOR} from "../Constants";

export const changeColor = colorName => {
    return {
        type: CHANGE_COLOR,
        payload: colorName
    }
}
