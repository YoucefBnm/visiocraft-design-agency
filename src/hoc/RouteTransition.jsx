import { motion } from "framer-motion";
import { useScrollToTop } from "../hooks/useScrollToTop";

const RouteTransition = (Component) =>
  // const clipPathHidden = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
  // const clipPathVisible = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

  function Hoc() {
    useScrollToTop();

    return (
      <>
        <Component />

        <motion.div
          className="slide-in"
          initial={{
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          }}
          animate={{
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          }}
          exit={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          style={{
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "#fbfbff",
            transformOrigin: "bottom",
            zIndex: 999,
          }}
        />

        <motion.div
          className="slide-out"
          initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          animate={{
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          }}
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "#ffd23f",
            transformOrigin: "top",
            zIndex: 999,
          }}
        />
      </>
    );
  };

export default RouteTransition;
