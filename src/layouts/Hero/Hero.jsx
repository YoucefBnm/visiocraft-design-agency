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
  const scaleVideo = useTransform(scrollYProgress, [0, 0.8], [1, 4]);

  const scaleText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.5, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.2], [200, 10]);

  const { setCursorVariant } = useContext(CustomCursorContext);

  const handleMouseEnter = () => setCursorVariant("difference");
  const handleMouseLeave = () => setCursorVariant("default");

  return (
    <section ref={targetRef} className="hero pos--relative">
      <StaggerContainer className={"hero__container relative"}>
        <StaggerContainer
          className={
            "hero__text text--center pad--y-1 pad--x-sm flex flex--col flex--center"
          }
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
            <p className="opacity--8  mar--t-2">{paragraph}</p>
          </motion.div>
        </StaggerContainer>

        <motion.div
          layout
          style={{
            scale: scaleVideo,
            borderRadius,
          }}
          className="hero__video overflow--hidden"
        >
          <video
            className="vertical--middle"
            width={"100%"}
            loop
            muted
            autoPlay
            playsInline
            itemType="video/mp4"
            src={HeroVideo}
          />
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="hero__video-overlay pos--absolute top--0 left--0 width--100 height--100 bg--dark opacity--5"
          />
        </motion.div>
      </StaggerContainer>
    </section>
  );
};

export default Hero;
