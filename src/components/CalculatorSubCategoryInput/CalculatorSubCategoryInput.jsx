import { motion } from "framer-motion"

const CalculatorSubCategoryInput = ({ id, label, value, handleChange}) => {
  return (
    <div className="calculatorInputItem flex flex--col gap--1">
        <div className="flex flex--align-center flex--justify-between gap--2">
            <label className="text--md input--label" htmlFor={label}>{label}</label>
            <span className="input--value text--sm">
                <motion.span 
                    className=""
                    key={value}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {value}
                </motion.span>
            </span>
        </div>
        <div className="pos--relative width--100 overflow--hidden">
            <input 
                className='input input--range'
                type='range'
                min={1}
                step={1}
                max={20}
                value={value}
                id={id}
                onChange={handleChange}
            />
            <div className="input--progress"
                style={{
                    width: `${Number((value - 1) * 100 / (20 - 1))}%`
                }}
            />
        </div>
    </div>
  )
}

export default CalculatorSubCategoryInput