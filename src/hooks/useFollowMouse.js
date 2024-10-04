import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { customCursorSpringConfig } from "../utils/motion/motion.transitions";

export function useFollowMouse() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const cursorXSpring = useSpring(cursorX, customCursorSpringConfig);
  const cursroYSpring = useSpring(cursorY, customCursorSpringConfig);

  useEffect(() => {
    const followMouse = (e) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    window.addEventListener("mousemove", followMouse);

    return () => {
      window.removeEventListener("mousemove", followMouse);
    };
  }, []);

  return {
    cursorXSpring,
    cursroYSpring,
  };
}
