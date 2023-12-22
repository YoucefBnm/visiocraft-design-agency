import { motion } from 'framer-motion'
import { StaggerContainer } from '../../components'
import { fadeVariants } from '../../libs/motion/motion.variants'
import './Hero.scss'
import { heroContent } from '../../constants'
import { useContext } from 'react'
import { CustomCursorContext } from '../../context/customCursor/customCursor.context'

const Hero = () => {

  const { headings, paragraph } = heroContent
  const { setCursorOption } = useContext(CustomCursorContext)

  const handleMouseEnter = () => setCursorOption('difference')
  const handleMouseLeave = () => setCursorOption('default')

  return (
   <section id='home' className="hero pos--relative flex pad--x-default pad--y-4">

    <StaggerContainer direction={-1} style='hero__wrap overflow--hidden pos--relative'>
      {
        headings.map((heading, index) => 
          <motion.h1
            className='display display--xl'
            variants={fadeVariants('top')}
            key={`${heading}-${index}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {heading}
          </motion.h1>

        )
      }
      <motion.p 
        className='display display--xs color--grey'
        variants={fadeVariants('left')}
      >
        {paragraph}
      </motion.p>
    </StaggerContainer>
   </section>
  )
}

export default Hero