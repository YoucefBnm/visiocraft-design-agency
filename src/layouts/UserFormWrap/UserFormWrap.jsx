import { useContext } from 'react'
import { UserForm, UserTotalPrice } from '../../components'
import { CalculatorContext } from '../../context/calculator/calculator.context'
import { formatPrice } from '../../utils/formatPrice/formatPrice'
import './UserFormWrap.scss'

const UserFormWrap = () => {
    const { mainCategoryPrice, subCategoryPrice, additionalCategoryPrice } = useContext(CalculatorContext)

    const totalPrice = mainCategoryPrice + subCategoryPrice + additionalCategoryPrice
    const displayTotalPrice = formatPrice(totalPrice)

  return (
    <div className='flex calculatorWrap pad--y-4 pad--x-2 flex--col flex--center gap--2 formWrap'>
        <UserTotalPrice totalPrice={displayTotalPrice} />
        <UserForm />
    </div>
  )
}

export default UserFormWrap