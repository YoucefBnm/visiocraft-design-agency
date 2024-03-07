import { useScroll } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  return {
    targetRef,
    scrollYProgress,
  };
};
