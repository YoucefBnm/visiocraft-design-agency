import { motion } from "framer-motion";
import { useRevealAnimation } from "../../hooks/useRevealAnimation";
import { staggerTransition } from "../../utils/motion/motion.transition";

const StaggerContainer = ({ className, staggerDirection, style, children }) => {
  const { targetRef, isInView } = useRevealAnimation();

  return (
    <motion.div
      className={className}
      transition={staggerTransition(staggerDirection)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={style}
    >
      {children}
      <div
        style={{ width: 0, height: 0, position: "absolute", bottom: "30%" }}
        ref={targetRef}
      />
    </motion.div>
  );
};

export default StaggerContainer;
