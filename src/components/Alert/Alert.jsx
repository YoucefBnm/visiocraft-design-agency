import { motion } from "framer-motion"

const Alert = ({ type, text, variants }) => {
  return (
    <motion.div animate={{variants}} className={`alert bg--${type} text--sm flex--inline pad--x-4 radius--2sm pad--y-1 flex--center`}>
        <span>{text}</span>
    </motion.div>
  )
}

export default Alert