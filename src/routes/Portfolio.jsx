import { Suspense } from "react";
import RouteTransition from "../hoc/RouteTransition";

const Portfolio = () => {
  return <Suspense>Portfolio</Suspense>;
};

const AsyncPortfolio = RouteTransition(Portfolio);
export default AsyncPortfolio;
