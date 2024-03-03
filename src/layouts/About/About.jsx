import { useState } from "react";
import { aboutContent } from "../../constants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { motion, useMotionValueEvent } from "framer-motion";
import "./About.scss";
import StaggerContainer from "../../components/StaggerContainer/StaggerContainer";
import { fadeVariants } from "../../libs/motion/motion.variants";

const About = () => {
  const { paragraph } = aboutContent;
  const splitParagraph = paragraph.split("");

  const { scrollYProgress, targetRef } = useScrollAnimation();
  const [currentScrollY, setCurrentScrollY] = useState();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCurrentScrollY(latest);
  });

  return (
    <section
      ref={targetRef}
      className="about pos--relative pad--x-lg pad--y-lg"
      id="about"
    >
      <StaggerContainer className="about__container width--75  flex flex--col flex--justify-center flex--align-start gap--x-4">
        <motion.h4
          variants={fadeVariants("left")}
          className="h color--primary-2"
        >
          about us
        </motion.h4>
        <div>
          {splitParagraph.map((letter, index) => (
            <motion.span
              className="h h--4"
              key={`${letter}-${index}`}
              initial={{ opacity: 0.2 }}
              animate={
                (index / splitParagraph.length).toFixed(2) <= currentScrollY
                  ? { opacity: 1 }
                  : { opacity: 0.2 }
              }
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
};

export default About;
