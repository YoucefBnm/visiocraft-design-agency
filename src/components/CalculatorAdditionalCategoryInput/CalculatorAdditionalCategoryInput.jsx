import { motion } from "framer-motion"

const CalculatorAdditionalCategoryInput = ({ label, id, isChecked, handleChange }) => {
  return (
    <div className="calculatorInputItem flex flex--align-center gap--1">
        <label 
            style={{
                width: '10.5rem'                
            }} 
            htmlFor={label} 
            className="text--md input--label text--left"
        >
            {label}
        </label>

        <motion.div 
            className={isChecked ? 'input--switch input--switch--active flex flex--justify-end' : 'input--switch flex flex--justify-start'}
            whileHover={{ opacity: .8}}
        >

            <input
                id={id}
                className="input--switch--input"
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
            />

            <motion.span
                layout
                transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 30
                }}
                className="input--switch--handle"
            />

        </motion.div>
    </div>
  )
}

export default CalculatorAdditionalCategoryInput