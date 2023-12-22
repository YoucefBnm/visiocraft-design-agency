import { CalculatorWrap, StaggerContainer } from '../../components'
import { motion } from 'framer-motion'

import './Pricing.scss'
import { fadeVariants } from '../../libs/motion/motion.variants'
import { calculateSecionText } from '../../constants'
import { UserFormWrap } from '..'

const Pricing = () => {
  const { heading, paragraph } = calculateSecionText

  return (
    <section id='pricing' className="pricing pad--y-default pad--x-default">
     
     <div className="pricing__container flex flex--col flex--center text--center gap--2">
      <StaggerContainer style='flex flex--col gap--2 flex--center'>
      <motion.h4 className='display display--xs' variants={fadeVariants('bottom')}>
          {paragraph}
        </motion.h4>

        <motion.h2 className='display display--md' variants={fadeVariants('bottom')}>
          {heading}
        </motion.h2>
      </StaggerContainer>

      <div className="flex pricing__wrap">
        <CalculatorWrap />
        <UserFormWrap />
      </div>
     </div>

      
    </section>
  )
}

export default Pricing