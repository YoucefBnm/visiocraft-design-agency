import { motion } from 'framer-motion'

const ServiceRow = ({ xLeft, xRight,  titleMain, titleSup, paragraph,icon }) => {
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
        <h4 className="display display--xs mar--b-1 color--grey">{titleSup}</h4>

        <h3 className="display display--sm mar--b-2">{titleMain}</h3>
        <p className='text--md'>{paragraph}</p>
      </motion.div>
    </>
  )
}

export default ServiceRow