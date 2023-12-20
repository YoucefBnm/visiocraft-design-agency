import React, { useRef } from 'react'
import { Transition } from '../hoc'
import { motion, useScroll } from 'framer-motion'
import { processPhases } from '../constants'
import { ProcessCard } from '../components'

const Process = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    })

  return (
    <main className="pad--x-default">
        <div ref={containerRef} className="process__container flex flex--col gap--4 pos--relative overflow--hidden">
            {
                processPhases.map((phase, index) => (
                    <ProcessCard
                        key={phase.id}
                        phase={phase}
                        index={index}
                    />
                ))
            }

            <motion.div 
                className='process__progress bg--success-dark' 
                style={{ 
                    scaleY: scrollYProgress,
                    position: 'absolute',
                    height: '100%',
                    width: '.3rem',
                    top: 0,
                    left: 'calc(50% - .15rem)',
                    transform: 'translateX(-50%)',
                    transformOrigin: 'top',
                }} 
            />
        </div>
    </main>
  )
}

export default Transition(Process)