import { motion } from "framer-motion";
import "./RouteTransition.scss";

const RouteTransition = (Component) => {
  const Hoc = () => (
    <>
      <Component />
      <motion.div
        className="slide slide--in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="slide slide--out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );

  return Hoc;
};

export default RouteTransition;
