import { CUSTOM_CURSOR_ACTION_TYPES } from "./customCursor.types";


export const customCursorReducer = (state, { type, payload }) => {

    switch(type) {
        case CUSTOM_CURSOR_ACTION_TYPES.SET_CURSOR_VARIANT:
            return {
                ...state,
                cursorVariant: payload
            }
        default:
            return state
    }
}