import { CalculatorProvider } from "../context/calculator/calculator.context";
import About from "../layouts/About/About";
import Hero from "../layouts/Hero/Hero";
import Pricing from "../layouts/Pricing/Pricing";
import Services from "../layouts/Services/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <CalculatorProvider>
        <Pricing />
      </CalculatorProvider>
    </>
  );
};

export default Home;
