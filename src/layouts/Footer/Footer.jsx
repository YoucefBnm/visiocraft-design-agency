import { motion } from 'framer-motion'
import {  StaggerContainer } from '../../components'
import { fadeVariants } from '../../libs/motion/motion.variants'
import {  Logo } from '../../assets'
import { footerLinks } from '../../constants'
import './Footer.scss'

const Footer = () => {

  return (
    <footer className="footer pad--default flex flex--wrap flex--align-start flex--justify-between gap--4">
      <StaggerContainer style="flex flex--col gap--1 flex--center  color--grey overflow--hidden">
        <motion.div variants={fadeVariants('bottom')}>
          <img src={Logo} alt='visiocarft logo' />
        </motion.div>
        <motion.p variants={fadeVariants('bottom')} className='footer__copyright'>
          &copy; 2024 developed by YCF All rights resereved.
        </motion.p>
      </StaggerContainer>

      <StaggerContainer style='flex flex--col gap--1 overflow--hidden'>
        {
          footerLinks.map(link => (
            <a 
              className='display display--xs text--sm' 
              target='_black' 
              key={link.id}
              href={link.link}
            >
              {link.name}
            </a>
          ))
        }
      </StaggerContainer>

      <div className="flex flex--col gap--2">
        <StaggerContainer style='overflow--hidden'>
          <motion.div variants={fadeVariants('left')} className='flex width--100'>
            <div className="flex gap--1 flex--col">
              <h4 className="display display--xs">Give us a Call</h4>
              <p className="text--sm">+213 777 804 636</p>
            </div>
          </motion.div>
        </StaggerContainer>
        <StaggerContainer style='overflow--hidden'>
          <motion.div variants={fadeVariants('left')} className='gap--2 radius--1 flex width--100'>
            <div className="flex gap--1 flex--col">
              <h4 className="display display--xs">Leave us a Message</h4>
              <a href='mailto:ssefbnm@gmail.com' className="text--sm">ssefbnm@gmail.com</a>
            </div>
          </motion.div>
        </StaggerContainer>
      </div>
    </footer>
  )
}

export default Footer