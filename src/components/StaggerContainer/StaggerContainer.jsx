import { motion } from "framer-motion"
import { useAnimationOnScroll } from "../../libs/motion/motion.scroll"

const StaggerContainer = ({ direction, children, style }) => {
    const { targetRef, isInView } = useAnimationOnScroll()

  return (
    <motion.div 
        transition={{
            staggerChildren: .5,
            staggerDirection: direction
        }}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        className={style}
    >
        {children}

        <div ref={targetRef} />
    </motion.div>
  )
}

export default StaggerContainer