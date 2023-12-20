import { useRef } from 'react'
import './About.scss'
import { motion, stagger, useScroll, useTransform } from 'framer-motion'

const heading = "Welcome to Visiocraft Studio"
const splitHeading = heading.split('')


const About = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })
  const x = useTransform(scrollYProgress, [0,1],[0,1])

  return (
    <section id='about' ref={targetRef} className="about pad--default">
      
    </section>
  )
}

export default About