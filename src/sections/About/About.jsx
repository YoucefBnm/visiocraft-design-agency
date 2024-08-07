import { motion, useTransform } from "framer-motion";
import "./About.scss";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { aboutContent } from "../../constants";
import { AnimatedText, Button } from "../../components";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const Character = memo(function Character({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.02, 1]);
  return (
    <motion.span style={{ opacity }} className="anim--char">
      {children}
    </motion.span>
  );
});

const Word = memo(function Word({ children, range, progress }) {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="anim--word">
      {characters.map((char, index) => {
        const start = range[0] + step * index;
        const end = range[0] + step * (index + 1);

        return (
          <Character
            key={`${char}-${index}`}
            range={[start, end]}
            progress={progress}
          >
            {char}
          </Character>
        );
      })}
      &nbsp;
    </span>
  );
});
const About = () => {
  const { scrollRef, scrollYProgress } = useScrollAnimation();

  const { title, description } = aboutContent;
  const words = description.split(" ");

  const navigate = useNavigate();
  const navigateToProcess = () => navigate("/process");

  return (
    <section className="about" id="about">
      <div ref={scrollRef} className="about__container">
        <div className="about__wrap">
          <div className="about__text">
            <AnimatedText
              text={title}
              className="display about__title text--accent"
            />
            <motion.h2 className="display display--3 about__desc">
              {words.map((word, index) => {
                const start = index / words.length;
                const end = start + 1 / words.length;
                return (
                  <Word
                    key={`${word}-${index}`}
                    range={[start, end]}
                    progress={scrollYProgress}
                  >
                    {word.toUpperCase()}
                  </Word>
                );
              })}
            </motion.h2>

            <Button
              variant={"bg btn--bg--accent"}
              handleClick={navigateToProcess}
              text={"Our Process"}
            >
              <span>Our Process</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
