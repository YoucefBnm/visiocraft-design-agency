import { HeroWrap, Seo } from "../components";
import { HeroBtn, HeroTitle } from "../components/HeroWrap/HeroWrap";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { PricingWrap } from "../sections";

const Pricing = () => {
  useScrollToTop();

  return (
    <>
      <Seo
        title={"Start your Project | Visiocraft"}
        description="get in touch with our team to discuss your project."
        url={"https://visiocraft.netlify.app/pricing"}
      />
      <HeroWrap title={"Put your business in motion"} route={"/contact"}>
        <HeroTitle />
        <HeroBtn label={"Book a Call"} />
      </HeroWrap>
      <PricingWrap />
    </>
  );
};

export default Pricing;
