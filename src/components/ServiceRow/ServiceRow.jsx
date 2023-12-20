import { motion } from 'framer-motion'

const ServiceRow = ({ xLeft, xRight, icon, title, paragraph }) => {
  return (
    <>
      <motion.div 
        className='services__icon' 
        style={{x: xLeft}}
      >
        <img src={icon} alt='service icon' />
      </motion.div>

      <motion.div 
        className='services__card'
        style={{ x: xRight }}
      >
        <h3 className="display display--sm mar--b-2">{title}</h3>
        <p>{paragraph}</p>
      </motion.div>
    </>
  )
}

export default ServiceRow