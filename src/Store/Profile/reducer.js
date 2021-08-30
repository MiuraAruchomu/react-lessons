import { SET_NAME } from "./actionTypes"

const initialState = {
    name: 'Me'
}

export const profileReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case SET_NAME:
            return {
                ...state,
                name: payload
            }
        default:
            return state
    }
}