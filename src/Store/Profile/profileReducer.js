import { TOGGLE_SHOW } from "./Actions"

const initialState = {
    show: false
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SHOW:
            return {
                ...state,
                show: !state.show
            }
        default:
            return state
    }
}