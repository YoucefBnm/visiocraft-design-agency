import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CtaBtn, StaggerContainer } from '../../components'

import './Footer.scss'
import { fadeVariants } from '../../libs/motion/motion.variants'
import { IconMail, IconPhone } from '../../assets'

const Footer = () => {
  const MotionLink = motion(Link)

  return (
    <footer className="footer pad--default flex flex--wrap flex--align-start flex--justify-between gap--4">
      <StaggerContainer style="flex flex--col gap--1 width--50">
        <motion.h3 variants={fadeVariants('bottom')} className="display display--sm">We're excited to hear about your project</motion.h3>
        <motion.p variants={fadeVariants('bottom')} className="text--lead text--sm">Contact us today, and let's embark on a journey to create something extraordinary together.</motion.p>
        <MotionLink variants={fadeVariants('bottom')} to='/contact'>
          <CtaBtn btnStyle='bg' btnText='Contact' />
        </MotionLink>
      </StaggerContainer>

      <StaggerContainer style='flex flex--col gap--2'>
        <a href="" className="link">Linkedin</a>
        <a href="" className='link'>Xtwitter</a>
        <a href="" className='link'>Github</a>
        <a href="" className="link">Dribbble</a>
      </StaggerContainer>

      <div className="flex flex--col gap--2">
        <StaggerContainer>
          <motion.div variants={fadeVariants('left')} className='bg--dark-3 radius--1 pad--4 flex width--100'>
            <div className="flex flex--center">
              <img src={IconPhone} alt='phone icon' />
            </div>

            <div className="flex gap--1 flex--col">
              <h4 className="text--md color--white">Give us a Call</h4>
              <p className="text--sm">+213 777 804 636</p>
            </div>
          </motion.div>
        </StaggerContainer>
        <StaggerContainer>
          <motion.div variants={fadeVariants('left')} className='bg--dark-3 gap--2 radius--1 pad--4 flex width--100'>
            <div className="flex flex--center">
              <img src={IconMail} alt='mail icon' />
            </div>

            <div className="flex gap--1 flex--col">
              <h4 className="text--md color--white">Leave us a Message</h4>
              <a href='mailto:ssefbnm@gmail.com' className="text--sm">ssefbnm@gmail.com</a>
            </div>
          </motion.div>
        </StaggerContainer>
      </div>

      
    </footer>
  )
}

export default Footer