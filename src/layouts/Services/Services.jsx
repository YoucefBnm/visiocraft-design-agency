import { ServiceRow, StaggerContainer } from "../../components"
import { motion,  useTransform } from "framer-motion"
import { fadeVariants } from "../../libs/motion/motion.variants"
import { services } from "../../constants"

import './Services.scss'
import { useScrollAnimation } from "../../hooks/useScrollAnimation"

const Services = () => {
  const { targetRef, scrollYProgress } = useScrollAnimation()

  const x1 = useTransform(scrollYProgress, [.2,.45], [0, -700])
  const x1Reverse = useTransform(scrollYProgress, [.2,.45], [0, 900])
  
  const x2 = useTransform(scrollYProgress, [.35, .55, .85], [-700, 0, -700])
  const x2Reverse = useTransform(scrollYProgress, [.35,.55,.85], [900, 0, 900])

  const x3 = useTransform(scrollYProgress, [.75, 1], [-500, 0])
  const x3Reverse = useTransform(scrollYProgress, [.75, 1], [900, 0])

  return (
    <section id='services' ref={targetRef} className="services pos--relative">
        
       
        <div ref={targetRef} className="services__wrap">
          <div className="services__container pad--y-default">
            <StaggerContainer direction={-1} style='flex flex--col flex--center gap--1 text--center mar--b-2'>
              <motion.h4 className="display display--xs" variants={fadeVariants('top')}>we visualize stories that capture your esence.</motion.h4>
              <motion.h2 className="display display--md" variants={fadeVariants('top')}>
                Visual Solutions Tailored to Your Needs
              </motion.h2>
            </StaggerContainer>
            <ServiceRow
              xLeft={x1}
              xRight={x1Reverse}
              icon={services[0].icon}
              titleMain={services[0].titleMain}
              titleSup={services[0].titleSup}
              paragraph={services[0].paragraph}
            />
            <ServiceRow
              xLeft={x2}
              xRight={x2Reverse}
              icon={services[1].icon}
              titleMain={services[1].titleMain}
              titleSup={services[1].titleSup}
              paragraph={services[1].paragraph}
            />
            <ServiceRow
              xLeft={x3}
              xRight={x3Reverse}
              icon={services[2].icon}
              titleMain={services[2].titleMain}
              titleSup={services[2].titleSup}
              paragraph={services[2].paragraph}
            />
          </div>
        </div>
    </section>
  )
}

export default Services