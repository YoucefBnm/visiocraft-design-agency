import { useInView } from "framer-motion";
import { useRef } from "react";

export function useRevealAnimation() {
  const targetRef = useRef(null);

  const isInView = useInView(targetRef, {
    once: true,
    amount: "some",
  });

  return {
    targetRef,
    isInView,
  };
}
