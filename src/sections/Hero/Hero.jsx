import { Gallery, HeroTitle, HeroWrap } from "../../components";
import { HeroBtn, HeroDescription } from "../../components/HeroWrap/HeroWrap";
import { heroContent } from "../../constants";

const Hero = () => {
  const { title, description } = heroContent;
  return (
    <>
      <HeroWrap title={title} description={description} route={"/contact"}>
        <HeroDescription />

        <HeroTitle />
        <HeroBtn />
      </HeroWrap>

      <Gallery />
    </>
  );
};

export default Hero;
