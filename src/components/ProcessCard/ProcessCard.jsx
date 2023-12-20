import { motion } from "framer-motion"
import { fadeVariants } from "../../libs/motion/motion.variants"
import { useAnimationOnScroll } from "../../libs/motion/motion.scroll"
import './ProcessCard.scss'

const ProcessCard = ({ phase, index }) => {

    const {step, titleSub, titleMain, paragraph} = phase
    const checkIndexIsPair = index%2===0
    const { targetRef, isInView } = useAnimationOnScroll()

  return (
    <div className="processCard flex gap--4">
        
        <div className="processCard__col processCard__col--sm">
            <div className="processCard__step">
                <span>{step}</span>
            </div>
        </div>

        <motion.div 
            className={
                checkIndexIsPair
                ? 'processCard__col processCard__col--lg processCard__col--lg--left'
                : 'processCard__col processCard__col--lg processCard__col--lg--right'
            }
            variants={checkIndexIsPair ? fadeVariants('right') : fadeVariants('left')}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
        >
            <div className="processCard__body mar--b-2">
                <div className="processCard__titles flex flex--col gap--1">
                    <h4 className="display display--xs color--primary">{titleSub}</h4>
                    <h3 className="display display--sm">{titleMain}</h3>
                </div>
            </div>

            <div className="processCard__footer">
                <div className="parocessCard__paragraph">
                    <p className="text--md">{paragraph}</p>
                </div>

                <div ref={targetRef} />
            </div>
        </motion.div>
    </div>
  )
}

export default ProcessCard