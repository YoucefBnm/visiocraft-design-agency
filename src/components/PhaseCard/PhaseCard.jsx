import { motion } from "framer-motion";
import "./PhaseCard.scss";
import { transformVariants } from "../../utils/motion/motion.variants";
import AnimatedText from "../AnimatedText/AnimatedText";

const PhaseCard = ({ step, title, description, isInview, index }) => {
  const isPair = index % 2 === 0;
  return (
    <div className={isPair ? "phaseCard" : "phaseCard phaseCard--reverse"}>
      <div className="phaseCard__step">
        <h4 className="display text--md">{step}</h4>
      </div>
      <div className="phaseCard__title">
        <AnimatedText text={title} className="display display--2">
          {title}
        </AnimatedText>
      </div>
      <motion.div
        variants={transformVariants("opacity")}
        initial="hidden"
        animate={isInview ? "visible" : "hidden"}
        className="phaseCard__desc"
      >
        <p>{description}</p>
      </motion.div>
    </div>
  );
};

export default PhaseCard;
