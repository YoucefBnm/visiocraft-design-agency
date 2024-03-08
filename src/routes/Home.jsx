import ReactLenis from "@studio-freight/react-lenis";
import { CalculatorProvider } from "../context/calculator/calculator.context";
import About from "../layouts/About/About";
import Accomplishment from "../layouts/Accomplishment/Accomplishment";
import Cta from "../layouts/Cta/Cta";
import Hero from "../layouts/Hero/Hero";
import Pricing from "../layouts/Pricing/Pricing";
import Services from "../layouts/Services/Services";
import Showcase from "../layouts/Showcase/Showcase";
import RouteTransition from "../hoc/RouteTransition";

const Home = () => {
  return (
    <ReactLenis root options={{ duration: 5 }}>
      <Hero />
      <About />
      <Services />
      <Showcase />
      <Accomplishment />
      <Cta />
      <CalculatorProvider>
        <Pricing />
      </CalculatorProvider>
    </ReactLenis>
  );
};

const AsyncHome = RouteTransition(Home);

export default AsyncHome;
