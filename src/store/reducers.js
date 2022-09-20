import { SET_USERNAME} from "./actionType";


const initialState = {
    username: "",
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return { ...state, username: action.payload }
        default:
            return state
    }
}