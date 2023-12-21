import React, { useRef } from 'react'
import { Transition } from '../hoc'
import { motion, useScroll } from 'framer-motion'
import { processPhases } from '../constants'
import { ProcessCard } from '../components'

const Process = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    })

  return (
    <main className="pad--x-default">
        <div ref={containerRef} className="process__container mar--b-4 flex flex--col gap--4 pos--relative overflow--hidden">
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
                className='process__progress bg--success' 
                style={{ 
                    scaleY: scrollYProgress,
                }} 
            />
        </div>
    </main>
  )
}

export default Transition(Process)