import { HeroWrap, Seo } from "../components";
import { HeroBtn, HeroTitle } from "../components/HeroWrap/HeroWrap";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { ProcessPhases } from "../sections";
import { ReactLenis } from "@studio-freight/react-lenis";

const Process = () => {
  useScrollToTop();

  return (
    <>
      <Seo
        title={"Process | Visiocraft"}
        description={"See how we will Plan your project"}
      />
      <ReactLenis root>
        <HeroWrap
          title={"Planning your Website Design Journey"}
          route={"/pricing"}
        >
          <HeroTitle />
          <HeroBtn label={"Request Project"} />
        </HeroWrap>

        <ProcessPhases />
      </ReactLenis>
    </>
  );
};

export default Process;
