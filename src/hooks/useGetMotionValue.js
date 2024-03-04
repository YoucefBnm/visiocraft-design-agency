import { useMotionValueEvent } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import { useState } from "react";

export const useGetMotionValue = () => {
  const { targetRef, scrollYProgress } = useScrollAnimation();
  const [currentScrollY, setCurrentScrollY] = useState();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCurrentScrollY(latest);
  });

  return {
    targetRef,
    scrollYProgress,
    currentScrollY,
  };
};
