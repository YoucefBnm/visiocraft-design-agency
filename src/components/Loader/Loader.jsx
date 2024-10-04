import { motion } from "framer-motion";
import "./Loader.scss";
const transition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for enter animation
};

const Loader = () => (
  <motion.div
    initial={{
      clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
    }}
    animate={{
      clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
    }}
    exit={{
      scaleX: 0,
    }}
    transition={transition}
    className="loader"
    role="status"
  />
);

export default Loader;
