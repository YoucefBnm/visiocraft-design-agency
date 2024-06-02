import { Suspense } from "react";
import { HeroText } from "../components";
import RouteTransition from "../hoc/RouteTransition";
import { PricingWrap } from "../sections";

const Pricing = () => {
  return (
    <Suspense>
      <HeroText
        title={"Ready to transform your online presence"}
        description={
          "Starting from 650$, our design services are for everyone from small, mid-size to large businisses."
        }
      />

      <PricingWrap />
    </Suspense>
  );
};

const AsyncPricing = RouteTransition(Pricing);
export default AsyncPricing;
