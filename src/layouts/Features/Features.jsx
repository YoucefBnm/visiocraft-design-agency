import { CtaBtn, FeatureCard, StaggerContainer } from '../../components'
import { motion, useScroll, useTransform } from 'framer-motion'
import { featuresItems } from '../../constants'
import { fadeVariants } from '../../libs/motion/motion.variants'
import { Link } from 'react-router-dom'
import { EllipseDark } from '../../assets'
import './Features.scss'
import { useSetAnimation } from '../../hooks/useSetAnimation'
import { useRef } from 'react'

const Features = () => {
    const { heading, lead, items } = featuresItems
    const {targetRef, bottom} = useSetAnimation([.1, .25], [-800, 0])

    const contaierRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: contaierRef
    })

    const x = useTransform(scrollYProgress, [0, .45], [-700, 1])
    const x2 = useTransform(scrollYProgress, [.45, .7], [-1400, 1])
    const x3 = useTransform(scrollYProgress, [.7, 1], [-2100, 1])

    const opacityx = useTransform(scrollYProgress, [.1, .45], [0, 1])
    const opacityx2 = useTransform(scrollYProgress, [.45, .7], [0, 1])
    const opacityx3 = useTransform(scrollYProgress, [.7, 1], [0, 1])

  return (
    <section id='why-us' ref={targetRef} className="features pos--relative">
        <StaggerContainer style='flex pad--default flex--col text--center flex--center width--75 mar--x-auto gap--2 mar--b-4 pos--relative'>
            <motion.div style={{top: bottom}} className="features__ellipse pos--absolute">
                <img src={EllipseDark} alt='ellipse dark' />
            </motion.div>
            <motion.h2 className='display display--md' variants={fadeVariants('bottom')}>
                {heading}
            </motion.h2>
            <motion.p className='text--lead text--center' variants={fadeVariants('bottom')}>
                {lead}
            </motion.p>
            <motion.div variants={fadeVariants('bottom')}>
                <Link to='/process'>
                    <CtaBtn
                        btnStyle='bg'
                        btnText='See how it works'
                    />
                </Link>
            </motion.div>
        </StaggerContainer>


        {/* <StaggerContainer style='flex flex--center gap--2 flex--wrap'>
            {
                items.map((item,index) => (
                    <motion.div 
                        key={item.id}
                        variants={fadeVariants('z')}
                    >
                        <FeatureCard 
                            icon={item.icon}
                            title={item.title}
                            paragraph={item.description}
                        />
                    </motion.div>
                ))
            }
        </StaggerContainer> */}
        <div
            ref={contaierRef}
            style={{
                height: '200rem',
            }}
        >
            <div 
                className="flex"
                style={{
                    position: 'sticky',
                    top: 0,
                    left: 0,
                    width: '100%',
                }}
            >
                <div 
                    style={{ 
                        flexBasis: '25%',
                        position: 'relative',
                        zIndex: 5
                    }}>
                    <FeatureCard 
                        icon={items[0].icon} 
                        title={items[0].title} 
                        paragraph={items[0].description}
                    />
                </div>
                <motion.div 
                    style={{ 
                        flexBasis: '25%',
                        position: 'relative',
                        zIndex: 4,
                        x: x,
                        opacity: opacityx,
                        transformOrigin: 'left',
                    }}>
                    <FeatureCard 
                        icon={items[1].icon} 
                        title={items[1].title} 
                        paragraph={items[1].description}
                    />
                </motion.div>
                <motion.div 
                    style={{ 
                        flexBasis: '25%',
                        position: 'relative',
                        x: x2,
                        opacity: opacityx2,
                        transformOrigin: 'left',
                        zIndex: 3

                    }}>
                    <FeatureCard 
                        icon={items[2].icon} 
                        title={items[2].title} 
                        paragraph={items[2].description}
                    />
                </motion.div>
                <motion.div 
                    style={{ 
                        flexBasis: '25%',
                        position: 'relative',
                        x: x3,
                        opacity: opacityx3,
                        transformOrigin: 'left',
                        zIndex: 2
                    }}>
                    <FeatureCard 
                        icon={items[0].icon} 
                        title={items[0].title} 
                        paragraph={items[0].description}
                    />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Features