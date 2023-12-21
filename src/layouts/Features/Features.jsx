import { CtaBtn, FeatureCard, StaggerContainer } from '../../components'
import { motion, useScroll, useTransform } from 'framer-motion'
import { featuresItems } from '../../constants'
import { fadeVariants } from '../../libs/motion/motion.variants'
import { Link } from 'react-router-dom'
import './Features.scss'
import { useSetAnimation } from '../../hooks/useSetAnimation'
import { useRef } from 'react'
import { IconRocket } from '../../assets'

const Features = () => {
    const { heading, lead, items } = featuresItems
    const {targetRef, bottom} = useSetAnimation([.1, .25], [-800, 0])

    const contaierRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: contaierRef
    })

    const x = useTransform(scrollYProgress, [0, .45], [-700, 0])
    const x2 = useTransform(scrollYProgress, [.45, .7], [-1400, 0])
    const x3 = useTransform(scrollYProgress, [.7, 1], [-2100, 0])

    const opacityx = useTransform(scrollYProgress, [.1, .45], [0, 1])
    const opacityx2 = useTransform(scrollYProgress, [.45, .7], [0, 1])
    const opacityx3 = useTransform(scrollYProgress, [.7, 1], [0, 1])

  return (
    <section id='why-us' ref={targetRef} className="features pos--relative">
        <StaggerContainer style='flex pad--default flex--col text--center flex--center width--75 mar--x-auto gap--2 mar--b-4 pos--relative'>
            <motion.h4 className='display display--xs' variants={fadeVariants('bottom')}>
                {lead}
            </motion.h4>
            <motion.h2 className='display display--md' variants={fadeVariants('bottom')}>
                {heading}
            </motion.h2>
            
            <motion.div variants={fadeVariants('bottom')}>
                <Link to='/process'>
                    <CtaBtn
                        btnStyle='bg ctaBtn--shadow--primary'
                        btnText='See how it works'
                    />
                </Link>
            </motion.div>
        </StaggerContainer>
        <div className='features__wrap' ref={contaierRef}>
            <div className="features__container flex bg--dark-3">
                <div className='features__col' style={{ zIndex: 5}}>
                    <FeatureCard 
                        icon={items[0].icon} 
                        title={items[0].title} 
                        paragraph={items[0].description}
                    />
                </div>
                <motion.div 
                    className='features__col'
                    style={{ 
                        zIndex: 4,
                        x: x,
                        opacity: opacityx,
                    }}>
                    <FeatureCard 
                        icon={items[1].icon} 
                        title={items[1].title} 
                        paragraph={items[1].description}
                    />
                </motion.div>
                <motion.div 
                    className='features__col'
                    style={{ 
                        x: x2,
                        opacity: opacityx2,
                        zIndex: 3

                    }}>
                    <FeatureCard 
                        icon={items[2].icon} 
                        title={items[2].title} 
                        paragraph={items[2].description}
                    />
                </motion.div>
                <motion.div 
                    className='features__col'
                    style={{ 
                        x: x3,
                        opacity: opacityx3,
                        zIndex: 2
                    }}>
                    <div className="features__card pad--x-1 pad--y-4 flex flex--col flex--center gap--2 text--center bg--primary color--dark">
                        <div className="features__card--icon features__card--icon--cta flex flex--center">
                            <img src={IconRocket} alt='cta icon' />
                        </div>
                        <h4 className="display display--xs color--dark">Let's start somethin incredible</h4>
                        <h3 className="display display--sm mar--b-2">get started</h3>
                        <Link to='/contact'>
                        <CtaBtn btnStyle='bg ctaBtn--bg--dark' btnText="Let's Talk" />

                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Features