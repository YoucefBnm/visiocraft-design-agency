import { createContext, useReducer } from "react";
import { customCursorReducer } from "./customCursor.reducer";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CUSTOM_CURSOR_ACTION_TYPES } from "./customCursor.types";

export const CustomCursorContext = createContext({
  cursorVariant: "",
  setCursorVariant: () => {},
});

const INITIAL_STATE = {
  cursorVariant: "default",
};

export const CustomCursorProvider = ({ children }) => {
  const [{ cursorVariant }, dispatch] = useReducer(
    customCursorReducer,
    INITIAL_STATE
  );

  const setCursorVariant = (variant) =>
    dispatch(
      createAction(CUSTOM_CURSOR_ACTION_TYPES.SET_CURSOR_VARIANT, variant)
    );

  const value = {
    cursorVariant,
    setCursorVariant,
  };

  return (
    <CustomCursorContext.Provider value={value}>
      {children}
    </CustomCursorContext.Provider>
  );
};
