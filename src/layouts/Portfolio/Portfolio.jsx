import { useContext,  useRef } from 'react'
import { PortfolioItems } from '../../constants'
import './Portfolio.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CustomCursorContext } from '../../context/customCursor/customCursor.context'

const Portfolio = () => {

  const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        // offset: ['start end', 'end start']
    })

    const { current } = targetRef

    const opacity = useTransform(scrollYProgress, [0, .4], [.5, 1])
    const scale = useTransform(scrollYProgress, [0, .4], [.25, 1])
    const textOpacity = useTransform(scrollYProgress, [0, .4], [1, 0])

    const position = useTransform(scrollYProgress, (pos) => 
      targetRef.current && pos <= targetRef.current.offsetTop && pos > 0 ? 'sticky' : 'relative'    
    )

    const { setCursorOption } = useContext(CustomCursorContext)

    const handleMouseEnter = () => setCursorOption('project')
    const handleMouseLeave = () => setCursorOption('default')
  
  return (
    <section id='portfolio' ref={targetRef} className='portfolio pos--relative'>
      <motion.div 
        className='portfolio__container'
        style={{ position }}
      >
        {
          PortfolioItems.map(item => (
            <motion.div 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                scale,
                opacity
              }}
              className='portfolio__item' 
              key={item.id}>
              {/* <img src={item.imageXl} alt={item.name} /> */}
              <picture>
                <source media="(max-width: 500px)" srcSet={item?.imageSm} />
                <source media="(max-width: 900px)" srcSet={item?.imageMd} />
                <img src={item?.imageXl} alt="portfolio item link" />
              </picture>
            </motion.div>
          ))
        }
        <motion.div
          className='portfolio__text flex flex--col flex--center text--center gap--1'
          style={{ opacity: textOpacity }}
        >
          <h4 className="display display--xs">Explore our portfolio to witness the diversity and quality of projects we've undertaken. From sleek corporate websites to innovative e-commerce platforms, our work speaks for itself.</h4>
          <h2 className="display display--md">witness our work</h2>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Portfolio