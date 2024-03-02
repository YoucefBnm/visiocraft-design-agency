import { motion } from "framer-motion";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
import { staggerTransition } from "../../libs/motion/motion.transitions";

const StaggerContainer = ({ direction, children, className, style }) => {
  const { targetRef, isInView } = useRevealOnScroll();

  return (
    <motion.div
      transition={staggerTransition(direction)}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={style}
    >
      {children}

      <div ref={targetRef} />
    </motion.div>
  );
};

export default StaggerContainer;
