import "./Hero.scss";
import { Gallery, HeroText } from "../../components";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <HeroText />
      <Gallery />
    </section>
  );
};

export default Hero;
