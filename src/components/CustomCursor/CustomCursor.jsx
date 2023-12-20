import './CustomCursor.scss'
import { motion } from 'framer-motion'
import { customCursorVariants } from '../../libs/motion/motion.variants';
import { useFollowMouse } from '../../hooks/useFollowMouse';
import { useContext } from 'react';
import { CustomCursorContext } from '../../context/customCursor/customCursor.context';

const CustomCursor = () => {

    useFollowMouse()

    const { cursorXSpring, cursorYSpring } = useFollowMouse()

    const {cursorOption, cursorText} = useContext(CustomCursorContext)
    
  return (
    <motion.div 
        className="customCursor pos--fixed index--2"
        variants={customCursorVariants[cursorOption]}
        animate={customCursorVariants[cursorOption]}
        style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
        }}
    >
        {cursorText}
    </motion.div>
  )
}

export default CustomCursor