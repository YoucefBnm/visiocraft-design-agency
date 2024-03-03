import { CalculatorProvider } from "../context/calculator/calculator.context";
import Hero from "../layouts/Hero/Hero";
import Pricing from "../layouts/Pricing/Pricing";

const Home = () => {
  return (
    <>
      <Hero />
      <CalculatorProvider>
        <Pricing />
      </CalculatorProvider>
    </>
  );
};

export default Home;
