import { CalculatorProvider } from '../context/calculator/calculator.context'
import Transition from '../hoc/Transition'

import { Pricing, Features, Hero, Portfolio, Services, Showcase } from '../layouts'
import { useSetPageTitle } from '../hooks/useSetPageTitle'

const Home = () => {
  useSetPageTitle('Visiocraft Studio | Home')
  
  return (
    <>
        <Hero />
        <Showcase />
        <Services />
        <Features />
        <Portfolio /> 

        <CalculatorProvider>
          <Pricing />
        </CalculatorProvider>

        
    </>
  )
}


export default Transition(Home)