import { motion } from "framer-motion";
import { useContext } from "react";
import { CustomCursorContext } from "../../context/customCursor/customCursor.context";
import { useFollowMouse } from "../../hooks/useFollowMouse";
import { customCursorVariants } from "../../libs/motion/motion.variants";

const CustomCursor = () => {
  const { cursorVariant } = useContext(CustomCursorContext);

  const { cursorXSpring, cursroYSpring } = useFollowMouse();

  return (
    <motion.div
      className="customCursor color--primary flex flex--center text--center pos--fixed z--full width--2 height--2 bg--light border--rad-full pointer-events--none"
      variants={customCursorVariants}
      animate={customCursorVariants[cursorVariant]}
      style={{
        translateX: cursorXSpring,
        translateY: cursroYSpring,
        fontSize: "6px",
      }}
    >
      {cursorVariant === "project" ? "view" : ""}
    </motion.div>
  );
};

export default CustomCursor;
