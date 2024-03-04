import { CalculatorProvider } from "../context/calculator/calculator.context";
import About from "../layouts/About/About";
import Hero from "../layouts/Hero/Hero";
import Pricing from "../layouts/Pricing/Pricing";
import Services from "../layouts/Services/Services";
import Showcase from "../layouts/Showcase/Showcase";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Showcase />
      <CalculatorProvider>
        <Pricing />
      </CalculatorProvider>
    </>
  );
};

export default Home;
