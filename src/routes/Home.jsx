import RouteTransition from "../hoc/RouteTransition";
import { About, Cta, Hero, Services, Whyus, Work } from "../sections";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Whyus />
      <Cta />
    </>
  );
};

const AsyncHome = RouteTransition(Home);

export default AsyncHome;
