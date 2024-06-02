import { motion } from "framer-motion";
import { heroContent } from "../../constants";
import AnimatedText from "../AnimatedText/AnimatedText";
import "./HeroText.scss";
import { fadeVariants } from "../../utils/motion/motion.variants";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { easeTransition } from "../../utils/motion/motion.transition";

const HeroText = () => {
  const { description } = heroContent;

  const navigate = useNavigate();
  const navigateToBookCall = () => navigate("/contact");
  return (
    <div className="heroText">
      <AnimatedText
        className="display display--1 heroText__heading"
        direction="bottom"
        text="Crafting Digital"
      />
      <AnimatedText
        className="display display--1 heroText__heading"
        direction="bottom"
        text="Experiences"
      />
      <AnimatedText
        className="display display--1 heroText__heading"
        direction="bottom"
        text="through Design"
      />
      <motion.p
        variants={fadeVariants()}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 1.7,
          type: "linear",
        }}
        className="heroText__desc"
      >
        {description}
      </motion.p>

      <motion.div
        className="heroText__btn"
        variants={fadeVariants()}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 1.5,
          type: easeTransition,
        }}
      >
        <Button
          variant={"link btn--link--secondary"}
          text="Book a call"
          handleClick={navigateToBookCall}
        >
          <span>Book a Call</span>
        </Button>
      </motion.div>
    </div>
  );
};

export default HeroText;
