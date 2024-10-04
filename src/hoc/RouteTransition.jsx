import { motion } from "framer-motion";

const RouteTransition = ({ children }) => {
  const pageTransition = {
    initial: {
      clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
      opacity: 0,
    },
    animate: {
      clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
      opacity: 1,
    },
    exit: {
      clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
      opacity: 0,
    },
  };
  const transition = {
    duration: 1.4,
    ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for enter animation
  };
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default RouteTransition;
