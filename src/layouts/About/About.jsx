import { useContext, useState } from "react";
import { aboutContent } from "../../constants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { motion, useMotionValueEvent } from "framer-motion";
import "./About.scss";
import StaggerContainer from "../../components/StaggerContainer/StaggerContainer";
import { fadeVariants } from "../../libs/motion/motion.variants";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { CustomCursorContext } from "../../context/customCursor/customCursor.context";

const About = () => {
  const { paragraph } = aboutContent;
  const splitParagraph = paragraph.split("");

  const { scrollYProgress, targetRef } = useScrollAnimation();
  const [currentScrollY, setCurrentScrollY] = useState();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCurrentScrollY(latest);
  });

  const { setCursorVariant } = useContext(CustomCursorContext);
  const handleMouseEnter = () => setCursorVariant("difference");
  const handleMouseLeave = () => setCursorVariant("default");

  return (
    <section ref={targetRef} className="about pad--x-lg pad--y-6" id="about">
      <StaggerContainer className="about__container">
        <motion.h4
          variants={fadeVariants("left")}
          className="h h--3 color--primary-3"
        >
          who are we
        </motion.h4>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {splitParagraph.map((letter, index) => (
            <motion.span
              className="h h--4"
              key={`${letter}-${index}`}
              initial={{ opacity: 0.2 }}
              animate={
                (index / (splitParagraph.length - 1)).toFixed(2) <=
                currentScrollY
                  ? { opacity: 1 }
                  : { opacity: 0.2 }
              }
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <Button
          variant={"link color--primary"}
          type="button"
          aria-label="navigate to process page"
        >
          <Link to="/process">How it works</Link>
        </Button>
      </StaggerContainer>
    </section>
  );
};

export default About;
