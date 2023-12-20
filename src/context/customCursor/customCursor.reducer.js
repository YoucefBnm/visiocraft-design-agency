import { CUSTOM_CURSOR_ACTION_TYPES } from "./customCursor.types"

export const customCursorReducer = (state, { type, payload }) => {

    switch(type) {
        case CUSTOM_CURSOR_ACTION_TYPES.SET_CURSOR_OPTION:
            return {
                ...state,
                cursorOption: payload
            }

        case CUSTOM_CURSOR_ACTION_TYPES.SET_CURSOR_TEXT:
            return {
                ...state,
                cursorText: payload
            }
        default:
            return state
    }
}