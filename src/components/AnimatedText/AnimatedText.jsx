import { motion } from "framer-motion";
import { memo } from "react";
import { fadeVariants } from "../../utils/motion/motion.variants";
import { useRevealAnimation } from "../../hooks/useRevealAnimation";

const Character = memo(function Character({ children, direction }) {
  return (
    <motion.span
      className="anim--char"
      variants={fadeVariants(direction)}
      transition={{
        damping: 600,
      }}
    >
      {children}
    </motion.span>
  );
});

const Word = memo(function Word({ children, className, direction }) {
  const characters = children.split("");
  const { isInView, targetRef } = useRevealAnimation();

  return (
    <motion.div
      className={`anim--word ${className}`}
      ref={targetRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delayChildren: 0.5, staggerChildren: 0.1 }}
    >
      {characters.map((char, index) => (
        <Character key={`${char}-${index}`} direction={direction}>
          {char}
        </Character>
      ))}
    </motion.div>
  );
});

const AnimatedText = ({ text, className, direction, style }) => {
  const words = text.split(" ");
  return (
    <motion.span style={style} className={`anim ${className}`}>
      {words.map((word, index) => (
        <Word direction={direction} key={`${word}${index}`}>
          {word}
        </Word>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
