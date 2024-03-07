import { motion } from "framer-motion";
import { useContext } from "react";
import { CustomCursorContext } from "../../context/customCursor/customCursor.context";
import { useFollowMouse } from "../../hooks/useFollowMouse";
import { customCursorVariants } from "../../libs/motion/motion.variants";
import "./CustomCursor.scss";

const CustomCursor = () => {
  const { cursorVariant } = useContext(CustomCursorContext);

  const { cursorXSpring, cursroYSpring } = useFollowMouse();

  return (
    <motion.div
      className="customCursor color--dark bg--primary-4  "
      variants={customCursorVariants}
      animate={customCursorVariants[cursorVariant]}
      style={{
        translateX: cursorXSpring,
        translateY: cursroYSpring,
      }}
    >
      {cursorVariant === "project" ? "view" : ""}
    </motion.div>
  );
};

export default CustomCursor;
