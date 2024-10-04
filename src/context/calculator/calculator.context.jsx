import { createContext, useReducer } from "react";
import { calculatorReducer } from "./calculator.reducer";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CALCULATOR_ACTION_TYPES } from "./calculator.types";
import {
  updateAdditionalCategoryPrice,
  updateSubCategoryPrice,
} from "../../utils/calculator/calculator.utils";
import { pricing } from "../../constants/data";

const { mainCategories, subCategories, additionnalServices } = pricing;

export const CalculatorContext = createContext({
  mainCategorySelected: "",
  subCategory: [],
  additionalCategory: [],

  setMainCategorySelected: () => {},
  setSubCategory: () => {},
  setAdditionalCategory: () => {},
});

const INITIAL_STATE = {
  mainCategorySelected: "new website",
  subCategory: subCategories,
  additionalCategory: additionnalServices,
};

export const CalculatorProvider = ({ children }) => {
  const [{ mainCategorySelected, subCategory, additionalCategory }, dispatch] =
    useReducer(calculatorReducer, INITIAL_STATE);

  const setMainCategorySelected = (e) =>
    dispatch(
      createAction(
        CALCULATOR_ACTION_TYPES.SET_MAIN_CATEGORY_SELECTED,
        e.target.value
      )
    );

  const setSubCategory = (e) =>
    dispatch(
      createAction(
        CALCULATOR_ACTION_TYPES.SET_SUB_CATEGORY,
        updateSubCategoryPrice(e)
      )
    );

  const setAdditionalCategory = (e) =>
    dispatch(
      createAction(
        CALCULATOR_ACTION_TYPES.SET_ADDITIONAL_CATEGORY,
        updateAdditionalCategoryPrice(e)
      )
    );

  const mainCategoryPrice = mainCategories.find(
    (category) =>
      category.title.toLowerCase() === mainCategorySelected.toLowerCase()
  )["price"];

  const subCategoryPrice = subCategories.reduce(
    (total, category) => total + category.price * category.value,
    0
  );
  const additionalCategoryChecked = additionnalServices.filter(
    (service) => service.isChecked === true
  );

  const additionalCategoryPrice =
    additionalCategoryChecked &&
    additionalCategoryChecked.reduce(
      (acc, category) => acc + category.price,
      0
    );

  const value = {
    mainCategorySelected,
    subCategory,
    additionalCategory,

    setMainCategorySelected,
    setSubCategory,
    setAdditionalCategory,

    mainCategoryPrice,
    subCategoryPrice,
    additionalCategoryPrice,
  };

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};
