import { useContext } from "react"
import { CalculatorAdditionalCategoryInput, CalculatorMainCategoryInput, CalculatorSubCategoryInput } from "../"
import { pricing } from "../../constants"
import { CalculatorContext } from "../../context/calculator/calculator.context"

import './CalculatorWrap.scss'

const CalculatorWrap = () => {
  const { mainCategories } = pricing

  const {
    mainCategorySelected,
    subCategory,
    additionalCategory,
    
    setMainCategorySelected,
    setSubCategory,
    setAdditionalCategory,
  } 
  = useContext(CalculatorContext)

  return (
    <div 
      style={{

      }}
      className="calculatorWrap pad--y-4 pad--x-4 bg--dark flex flex--col gap--2"
    >
      <div className="flex flex--align-center flex--justify-start gap--1 flex--wrap">
        {
          mainCategories.map((mainCategory) => (
            <CalculatorMainCategoryInput
              key={mainCategory.id}
              label={mainCategory.title}
              inputType='radio'
              selectedLabel={mainCategorySelected}
              handleChange={setMainCategorySelected}
            />
          ))
        }
      </div>

      <div className="flex flex--col flex--align-start gap--1">
        {
          subCategory.map(category => (
            <CalculatorSubCategoryInput
              key={category.id}
              id={category.id}
              value={category.value}
              label={category.title}
              handleChange={setSubCategory}
            />
          ))
        }
      </div>

      <div className="flex flex--col flex--align-start gap--15">
        {
          additionalCategory.map(category => (
            <CalculatorAdditionalCategoryInput 
              key={category.id}
              id={category.id}
              label={category.title}
              isChecked={category.isChecked}
              handleChange={setAdditionalCategory}
            />
          ))
        }
      </div>
    </div>
  )
}

export default CalculatorWrap