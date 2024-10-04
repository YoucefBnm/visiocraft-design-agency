import { ReactLenis } from "@studio-freight/react-lenis";
import { Gallery, HeroWrap, Seo } from "../components";
import {
  HeroBtn,
  HeroDescription,
  HeroTitle,
} from "../components/HeroWrap/HeroWrap";
import { heroContent } from "../constants/data";
import { About, Services, Work, Cta } from "../sections";
import { useScrollToTop } from "../hooks/useScrollToTop";

const Home = () => {
  useScrollToTop();

  return (
    <>
      <Seo />
      <ReactLenis root>
        <HeroWrap
          title={heroContent.title}
          description={heroContent.description}
          route={"/contact"}
        >
          <HeroTitle />
          <HeroDescription />
          <HeroBtn />
        </HeroWrap>

        <Gallery />
        <About />
        <Services />
        <Work />
        <Cta />
      </ReactLenis>
    </>
  );
};

export default Home;
