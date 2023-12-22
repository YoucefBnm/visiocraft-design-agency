import { cubicBezier, motion, useTransform } from 'framer-motion'
import { featuresItems } from '../../constants'
import './Features.scss'
import { CtaBtn, FeatureCard, StaggerContainer } from '../../components'
import { IconRocket } from '../../assets'
import { Link } from 'react-router-dom'
import { fadeVariants } from '../../libs/motion/motion.variants'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const Features = () => {
    
    const { targetRef, scrollYProgress } = useScrollAnimation()

    const { heading, items, lead } = featuresItems

    const x = (index) => 
        useTransform(
            scrollYProgress, 
            [(index/(items.length + 1)), ((index+1) / (items.length + 1))], 
            [(-700 * index), 0],
            { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) }
        )
    
    const MotionLink = motion(Link)
    
  return (
    <section id="why-us" className="features pos--relative flex flex--col gap--4">
        <StaggerContainer  style='flex flex--col flex--center text--center width--75 mar--x-auto gap--2 pos--relative'>
            <motion.h4 variants={fadeVariants('bottom')} className='display display--xs'>{lead}</motion.h4>
            <motion.h2 variants={fadeVariants('bottom')} className='display display--md'>{heading}</motion.h2>
            <MotionLink to='/process' variants={fadeVariants('bottom')}>
                <CtaBtn btnText='Learn more' btnStyle='shadow ctaBtn--shadow--primary' />
            </MotionLink>
        </StaggerContainer>
        <div className="features__wrap" ref={targetRef}>
            <div className="features__container flex bg--dark-3">
                {
                    items.map((feature, index) => (
                        <motion.div 
                            className="features__col pos--relative"
                            style={{
                                zIndex: items.length+1 - index,
                                x: x(index)
                            }}
                            key={feature.id}
                        >
                            <FeatureCard 
                                icon={feature.icon}
                                title={feature.title}
                                paragraph={feature.description}
                            />
                        </motion.div>
                    ))
                }
                <motion.div 
                    className="features__col pos--relative"
                    style={{
                        zIndex: items.length+1 - items.length,
                        x: x(items.length)
                    }}
                >
                    <div className="features__card features__card--cta flex flex--col flex--center gap--2">
                        <div className="features__card--icon flex flex--center">
                            <img src={IconRocket} aria-hidden='true' />
                        </div>
                        <h4 className="display display--xs">Let's start something incredible</h4>
                        <Link to='/contact'>
                            <CtaBtn btnStyle='bg ctaBtn--bg--primary' btnText='Start Now' />
                        </Link>
                    </div>

                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Features