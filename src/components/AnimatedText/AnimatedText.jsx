import { motion } from "framer-motion";
import { transformVariants } from "../../utils/motion/motion.variants";
import { useRevealAnimation } from "../../hooks/useRevealAnimation";

const Word = ({ word, style }) => {
  const characters = word.split("");

  return (
    <motion.span
      style={style}
      className="anim--word"
      transition={{ staggerChildren: 0.02 }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="anim--char"
          variants={transformVariants("bottom")}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.65 }}
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
      transition={{ staggerChildren: 0.05 }}
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
