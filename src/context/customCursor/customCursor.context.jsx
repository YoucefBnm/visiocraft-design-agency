import { createContext, useReducer } from "react";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CUSTOM_CURSOR_ACTION_TYPES } from "./customCursor.types";
import { customCursorReducer } from "./customCursor.reducer";

export const CustomCursorContext = createContext({
    cursorOption: '',
    cursorText: '',

    setCursorOption: () => {},
    setCursorText: () => {}
})

const INITIAL_STATE = {
    cursorOption: 'default',
    cursorText: ''
}

export const CustomCursorProvider = ({ children }) => {

    const [{cursorOption, cursorText}, dispatch] = useReducer(customCursorReducer, INITIAL_STATE)

    const setCursorOption = option => dispatch(
        createAction(CUSTOM_CURSOR_ACTION_TYPES.SET_CURSOR_OPTION, option)
    )

    const setCursorText = text => dispatch(
        createAction(CUSTOM_CURSOR_ACTION_TYPES.SET_CURSOR_TEXT, text)
    )

    const value = {
        cursorOption, 
        cursorText,
        setCursorOption,
        setCursorText,
    }

    return <CustomCursorContext.Provider value={value}>{children}</CustomCursorContext.Provider>
}