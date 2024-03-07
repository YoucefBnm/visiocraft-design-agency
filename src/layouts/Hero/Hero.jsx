import { motion, useTransform } from "framer-motion";
import StaggerContainer from "../../components/StaggerContainer/StaggerContainer";
import { heroContent } from "../../constants";
import "./Hero.scss";
import { fadeVariants } from "../../libs/motion/motion.variants";
import { HeroVideo } from "../../assets";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useContext } from "react";
import { CustomCursorContext } from "../../context/customCursor/customCursor.context";

const Hero = () => {
  const { headings, paragraph } = heroContent;

  const { targetRef, scrollYProgress } = useScrollAnimation();
  const scaleVideo = useTransform(scrollYProgress, [0, 0.8], [1, 5]);

  const scaleText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.2], [300, 8]);

  const { setCursorVariant } = useContext(CustomCursorContext);

  const handleMouseEnter = () => setCursorVariant("difference");
  const handleMouseLeave = () => setCursorVariant("default");

  return (
    <section ref={targetRef} className="hero">
      <StaggerContainer className="hero__container">
        <StaggerContainer
          className="hero__text"
          direction={-1}
          style={{ scale: scaleText, opacity }}
        >
          {headings.map((heading) => (
            <motion.h1
              className="h h--1 color--light"
              key={heading}
              variants={fadeVariants("top")}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {heading}
            </motion.h1>
          ))}
          <motion.div variants={fadeVariants("bottom")}>
            <p>{paragraph}</p>
          </motion.div>
        </StaggerContainer>

        <motion.div
          layout
          style={{
            scale: scaleVideo,
            borderRadius,
          }}
          className="hero__video "
        >
          <video
            width={"100%"}
            loop
            muted
            autoPlay
            playsInline
            itemType="video/mp4"
            src={HeroVideo}
          />
        </motion.div>
      </StaggerContainer>
    </section>
  );
};

export default Hero;
