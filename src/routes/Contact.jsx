import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Transition } from '../hoc'
import { useSetPageTitle } from '../hooks/useSetPageTitle'
import { InlineWidget } from 'react-calendly'

const Contact = () => {

  useSetPageTitle('Visiocraft Studio | Contact')
  return (
    
    <main className="pad--x-default">
      <InlineWidget url="https://calendly.com/ycf-bnm" /> 
    </main>
  )

}

export default Transition(Contact)