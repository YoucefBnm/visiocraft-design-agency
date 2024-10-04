import { motion } from "framer-motion";
import "./CustomCursor.scss";
import {
  customCursorTextVariants,
  customCursorVariants,
} from "../../utils/motion/motion.variants";
import { useContext } from "react";
import { CustomCursorContext } from "../../context/customCursor/customCursor.context";
import { useFollowMouse } from "../../hooks/useFollowMouse.js";

const CustomCursor = () => {
  const { cursorVariant } = useContext(CustomCursorContext);
  const { cursorXSpring, cursroYSpring } = useFollowMouse();

  return (
    <motion.div
      className="customCursor"
      variants={customCursorVariants}
      animate={cursorVariant}
      style={{
        translateX: cursorXSpring,
        translateY: cursroYSpring,
      }}
    >
      <motion.div className="customCursor__wrap" animate={cursorVariant}>
        <span className="customCursor__text">
          <motion.span
            variants={customCursorTextVariants}
            animate={cursorVariant}
          >
            {customCursorTextVariants[cursorVariant]["text"]}
          </motion.span>
        </span>
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
