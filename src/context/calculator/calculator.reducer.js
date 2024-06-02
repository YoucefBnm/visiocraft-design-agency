import { CALCULATOR_ACTION_TYPES } from "./calculator.types";

export const calculatorReducer = (state, { type, payload }) => {
  switch (type) {
    case CALCULATOR_ACTION_TYPES.SET_MAIN_CATEGORY_SELECTED:
      return {
        ...state,
        mainCategorySelected: payload,
      };

    case CALCULATOR_ACTION_TYPES.SET_SUB_CATEGORY:
      return {
        ...state,
        subCategory: payload,
      };

    case CALCULATOR_ACTION_TYPES.SET_ADDITIONAL_CATEGORY:
      return {
        ...state,
        additionalCategory: payload,
      };

    default:
      return state;
  }
};
