import { Suspense } from "react";
import RouteTransition from "../hoc/RouteTransition";
import { PricingWrap } from "../sections";
import { pricingText } from "../constants";
import { HeroWrap } from "../components";
import { HeroDescription, HeroTitle } from "../components/HeroWrap/HeroWrap";

const Pricing = () => {
  const { title, description } = pricingText;

  return (
    <Suspense>
      <HeroWrap title={title} description={description}>
        <HeroDescription />
        <HeroTitle />
      </HeroWrap>

      <PricingWrap />
    </Suspense>
  );
};

const AsyncPricing = RouteTransition(Pricing);
export default AsyncPricing;
