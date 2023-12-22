import { useContext } from "react"
import { CalculatorContext } from "../../context/calculator/calculator.context"
import { formatPrice } from "../../utils/formatPrice/formatPrice"
import { CtaBtn } from "../"

const CalculatorTotal = () => {

    const { mainCategoryPrice, subCategoryPrice, additionalCategoryPrice } = useContext(CalculatorContext)
    
    const totalPrice = mainCategoryPrice + subCategoryPrice + additionalCategoryPrice
    const displayPrice = formatPrice(totalPrice)

  return (
    <div 
      className="calculatorTotal flex flex--col flex--justify-center gap--4 flex--align-center"
        style={{
          padding: '0 2rem 0 2rem',
          background: 'linear-gradient(180deg, rgba(56, 48, 227, 0.20) 99.45%, rgba(191, 148, 246, 0.05) 100%)',
          maxWidth: '29rem'
        }}
      >
        <div className="calculatorTotal__container flex flex--col flex--align-center gap--2">
          <Step1 step={currentStep} totalPrice={displayPrice} />
          <Step2 step={currentStep} />
        </div>
        
        <div className="calculatorTotal__btn flex flex--col flex--align-center gap--1">
          <CtaBtn
            btnText={currentStep===1 ? 'Next' : 'Back'}
            handleClick={handleSteps}
            btnStyle='bg'

          />
          <p className="text--sm text--center color--secondary-2">
            <sup>*</sup> You can add extra services during service discussion

          </p>
        </div>
    </div>
  )
}

export default CalculatorTotal