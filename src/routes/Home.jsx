import { CalculatorProvider } from "../context/calculator/calculator.context";
import About from "../layouts/About/About";
import Hero from "../layouts/Hero/Hero";
import Pricing from "../layouts/Pricing/Pricing";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <CalculatorProvider>
        <Pricing />
      </CalculatorProvider>
    </>
  );
};

export default Home;
