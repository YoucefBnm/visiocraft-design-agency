import { motion } from "framer-motion";
import { fadeVariants } from "../../utils/motion/motion.variants";
import { useRevealAnimation } from "../../hooks/useRevealAnimation";

const Word = ({ word, style }) => {
  const characters = word.split("");

  return (
    <motion.span
      style={style}
      className="anim--word"
      transition={{ staggerChildren: 0.01 }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="anim--char"
          variants={fadeVariants("bottom")}
          transition={{ type: "spring", damping: 20, mass: 2 }}
        >
          {char}
        </motion.span>
      ))}
      &nbsp;
    </motion.span>
  );
};

const AnimatedText = ({ text, className, style }) => {
  const words = text.split(" ");
  const { revealRef, isInView } = useRevealAnimation();

  return (
    <motion.div
      ref={revealRef}
      transition={{ staggerChildren: 0.1 }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`anim ${className}`}
    >
      {words.map((word, index) => (
        <Word style={style} key={`${word}-${index}`} word={word} />
      ))}
    </motion.div>
  );
};

export default AnimatedText;
