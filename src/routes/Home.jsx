import { CalculatorProvider } from '../context/calculator/calculator.context'
import Transition from '../hoc/Transition'

import { About, Calculation, Carousel, Features, Hero, Services, Showcase } from '../layouts'
import { useSetPageTitle } from '../hooks/useSetPageTitle'

const Home = () => {
  useSetPageTitle('Visiocraft Studio | Home')
  
  return (
    <>
        <Hero />
        <Carousel />
        <Services />
        <About />
        <Features />
        <Showcase /> 

        <CalculatorProvider>
          <Calculation />
        </CalculatorProvider>

        
    </>
  )
}


export default Transition(Home)