import { ServiceRow, StaggerContainer } from "../../components"
import { motion, useScroll, useTransform } from "framer-motion"
import { fadeVariants } from "../../libs/motion/motion.variants"
import { useRef } from "react"
import { services } from "../../constants"

import './Services.scss'
import { EllipseBlur1, EllipseBlur2 } from "../../assets"

const Services = () => {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef
  })
  const x1 = useTransform(scrollYProgress, [.2,.45], [0, -700])
  const x1Reverse = useTransform(scrollYProgress, [.2,.45], [0, 900])
  const opacity1 = useTransform(scrollYProgress, [.4, .45], [1, 0])
  
  const x2 = useTransform(scrollYProgress, [.35, .55, .85], [-700, 0, -700])
  const x2Reverse = useTransform(scrollYProgress, [.35,.55,.85], [900, 0, 900])

  const x3 = useTransform(scrollYProgress, [.75, 1], [-500, 0])
  const x3Reverse = useTransform(scrollYProgress, [.75, 1], [900, 0])

  return (
    <section id='services' ref={targetRef} className="services pad--y-default pos--relative">
        <StaggerContainer direction={-1} style='flex flex--col flex--center gap--1 text--center pad--y-4'>
          <motion.h2 className="display display--md" variants={fadeVariants('top')}>
            Visual Solutions Tailored to Your Needs
          </motion.h2>
          <motion.p variants={fadeVariants('top')} className="text--lead">
            we visualize stories that capture your esence.
          </motion.p>
        </StaggerContainer>
       
        <div ref={targetRef} className="services__wrap">
          <div className="services__container">
            
            <ServiceRow
              xLeft={x1}
              xRight={x1Reverse}
              icon={services[0].icon}
              title={services[0].title}
              paragraph={services[0].paragraph}
            />
            <ServiceRow
              xLeft={x2}
              xRight={x2Reverse}
              icon={services[1].icon}
              title={services[1].title}
              paragraph={services[1].paragraph}
            />
            <ServiceRow
              xLeft={x3}
              xRight={x3Reverse}
              icon={services[2].icon}
              title={services[2].title}
              paragraph={services[2].paragraph}
            />
          </div>
        </div>
    </section>
  )
}

export default Services