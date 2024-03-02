import { inView, useInView } from "framer-motion";
import { useRef } from "react";

export const useRevealOnScroll = () => {
  const targetRef = useRef(null);

  const isInView = useInView(targetRef, {
    once: true,
    amount: inView,
  });

  return {
    targetRef,
    isInView,
  };
};
