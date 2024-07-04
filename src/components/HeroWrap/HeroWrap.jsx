import { createContext, useContext } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText/AnimatedText";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useRevealAnimation } from "../../hooks/useRevealAnimation";
import { fadeVariants } from "../../utils/motion/motion.variants";
import "./HeroWrap.scss";

const HeroWrapContext = createContext({
  title: "",
  description: "",
  route: "",
});

function useHeroWrapContext() {
  const context = useContext(HeroWrapContext);

  if (!context) {
    throw new Error("useHeroWrapContext must be used within a HeroWrap");
  }

  return context;
}

const HeroWrap = ({ title, description, route, className, children }) => {
  const { revealRef, isInView } = useRevealAnimation();

  return (
    <HeroWrapContext.Provider value={{ title, description, route }}>
      <section className={`hero ${className}`}>
        <motion.div
          ref={revealRef}
          className="hero__wrap"
          transition={{ staggerChildren: 0.2 }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {children}
        </motion.div>
      </section>
    </HeroWrapContext.Provider>
  );
};

const HeroTitle = ({ className }) => {
  const { title } = useHeroWrapContext();

  return (
    <AnimatedText
      className={`hero__title display display--1 ${className}`}
      text={title}
    />
  );
};

const HeroDescription = ({ className }) => {
  const { description } = useHeroWrapContext();

  return (
    <motion.p
      transition={{ delay: 0.5 }}
      variants={fadeVariants()}
      className={`hero__desc ${className}`}
    >
      {description}
    </motion.p>
  );
};

const HeroBtn = ({ className }) => {
  const { route } = useHeroWrapContext();

  const navigate = useNavigate();
  const navigateToPage = () => navigate(route);

  return (
    <motion.div
      transition={{ delay: 0.6 }}
      variants={fadeVariants()}
      className={`hero__btn ${className}`}
    >
      <Button
        variant={"bg btn--bg--secondary"}
        handleClick={navigateToPage}
        text={"Get Started"}
      >
        <span>Get Started</span>
      </Button>
    </motion.div>
  );
};
export { HeroWrap, HeroTitle, HeroDescription, HeroBtn };
