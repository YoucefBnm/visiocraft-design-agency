import { useCycle, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

export function useToggleHeader() {
  const [isOpen, setIsOpen] = useCycle(false, true);
  const [isHidden, setIsHidden] = useState(false);

  const toggleNav = () => setIsOpen((prevState) => !prevState);
  const closeNav = () => setIsOpen(false);
  const showHeader = () => setIsHidden(false);

  const { scrollY } = useScroll();
  const latestYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - latestYRef.current;

    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      latestYRef.current = y;
    }
  });

  return {
    isOpen,
    isHidden,
    toggleNav,
    closeNav,
    showHeader,
  };
}
