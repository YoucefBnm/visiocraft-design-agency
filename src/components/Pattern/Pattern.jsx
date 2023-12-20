import { motion } from "framer-motion"
import './Pattern.scss'
import { patternBoxSpringConfig } from "../../libs/motion/motion.variants"

const PatternBox = ({path, children}) => {

    return (
        <motion.div 
            className='pattern__box'
            animate={{offsetDistance: '100%'}}
            transition={patternBoxSpringConfig}
            style={{
                offsetPath: `path("${path}")`,
            }}
        >
            {children}
        </motion.div>
    )
}

const Pattern = ({width, height, path, children, strokeColor}) => {

    return (
        <div className="pattern pos--relative">
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill='none'
                stroke={strokeColor} 
            >
                <path
                    d={path}
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </svg>
            {
                children 
                && (
                    <PatternBox path={path}>
                        {children}
                    </PatternBox>
                        
                )
            }
        </div>
    )
}

export default Pattern