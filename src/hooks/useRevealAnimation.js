import { useInView } from "framer-motion";
import { useRef } from "react";

export function useRevealAnimation() {
  const revealRef = useRef(null);

  const isInView = useInView(revealRef, {
    once: true,
    amount: "some",
  });

  return {
    revealRef,
    isInView,
  };
}
