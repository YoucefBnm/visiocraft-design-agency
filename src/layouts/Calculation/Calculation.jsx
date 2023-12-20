import { CalculatorTotal, CalculatorWrap, StaggerContainer } from '../../components'
import { motion } from 'framer-motion'

import './Calculation.scss'
import { fadeVariants } from '../../libs/motion/motion.variants'
import { calculateSecionText } from '../../constants'

const Calculation = () => {
  const { heading, paragraph } = calculateSecionText

  return (
    <section id='pricing' className="calculation pad--y-default pad--x-default">
     
     <div className="calculation__container flex flex--col flex--center text--center gap--2">
      <StaggerContainer style='flex flex--col gap--2 flex--center'>
        <motion.h2 className='display display--md' variants={fadeVariants('bottom')}>
          {heading}
        </motion.h2>

        <motion.p className='text--lead' variants={fadeVariants('bottom')}>
          {paragraph}
        </motion.p>
      </StaggerContainer>

      <div className="flex calculation__calculator">
        <CalculatorWrap />
        <CalculatorTotal />
      </div>
     </div>

    </section>
  )
}

export default Calculation