import { IconCheck } from "../../assets"
import { motion } from "framer-motion"

const CalculatorMainCategoryInput = ({ label, inputType, selectedLabel, handleChange }) => {
  return (
    <motion.div 
        className="calculatorInputItem input--main input--main pos--relative flex--inline flex--align-center flex--justify-center"
        style={selectedLabel===label ? { backgroundColor: '#624dbe'} : { backgroundColor: 'transparent'}}
        whileHover={{ opacity: .8}}
    >
        <input 
            className={`input--${inputType}`} 
            type={inputType} 
            name={label} 
            id={label} 
            checked={selectedLabel===label}
            onChange={handleChange}
            value={label}
        />
        <motion.span
            animate={selectedLabel===label ? { width: '14.8px' } : { scale: 0, width: 0 }}
            className="input--check inline"
        >
            <img style={{ verticalAlign: 'middle'}} src={IconCheck} aria-hidden='true' />
        </motion.span>
        <label className="text--md input--label" htmlFor={label}>{label}</label>
    </motion.div>
  )
}

export default CalculatorMainCategoryInput