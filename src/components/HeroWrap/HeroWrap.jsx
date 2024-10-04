import { createContext, useContext } from "react";
import "./HeroWrap.scss";
import { useRevealAnimation } from "../../hooks/useRevealAnimation";
import { motion } from "framer-motion";
import { AnimatedText, Button } from "../";
import { transformVariants } from "../../utils/motion/motion.variants";
import { useNavigate } from "react-router-dom";

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

const HeroWrap = ({ title, description, children, route }) => {
  const { isInView, revealRef } = useRevealAnimation();

  return (
    <HeroWrapContext.Provider value={{ title, description, children, route }}>
      <motion.div
        animate={isInView ? "visible" : "hidden"}
        initial="hidden"
        className="hero"
        ref={revealRef}
        transition={{
          duration: 0.4,
          ease: [0.42, 0, 0.58, 1],
          staggerChildren: 0.15,
        }}
      >
        <div className="hero__container">{children}</div>
      </motion.div>
    </HeroWrapContext.Provider>
  );
};

const HeroTitle = () => {
  const { title } = useHeroWrapContext();

  return (
    <div className="hero__title">
      <AnimatedText text={title} className="hero__title display display--1" />
    </div>
  );
};

const HeroDescription = () => {
  const { description } = useHeroWrapContext();

  return (
    <motion.div className="hero__desc" variants={transformVariants("opacity")}>
      <h3>{description}</h3>
    </motion.div>
  );
};

const HeroBtn = ({ label }) => {
  const { route } = useHeroWrapContext();
  const navigate = useNavigate();
  const navigateToPage = () => navigate(route);
  return (
    <motion.div className="hero__btn" variants={transformVariants("opacity")}>
      <Button
        aria-label="book a call"
        onClick={navigateToPage}
        variant={"bg btn--bg--primary"}
        handleClick={navigateToPage}
        text={label || "Get Started"}
      />
    </motion.div>
  );
};
export { HeroWrap, HeroTitle, HeroDescription, HeroBtn };
