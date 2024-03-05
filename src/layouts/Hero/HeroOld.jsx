import { motion, useTransform } from "framer-motion";
import StaggerContainer from "../../components/StaggerContainer/StaggerContainer";
import { heroContent } from "../../constants";
import "./Hero.scss";
import { fadeVariants } from "../../libs/motion/motion.variants";
import { HeroVideo } from "../../assets";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Hero = () => {
  const { headings, paragraph } = heroContent;

  const { targetRef, scrollYProgress } = useScrollAnimation();
  const scaleVideo = useTransform(scrollYProgress, [0, 0.8], [1, 3]);

  const scaleText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.5, 0]);

  return (
    <section ref={targetRef} className="hero">
      <StaggerContainer className="hero__container">
        <StaggerContainer
          className={
            "hero__text width--100 flex flex--justify-between pad--x-lg pad--y-lg pos--relative z--2"
          }
          style={{ scale: scaleText, opacity }}
        >
          <StaggerContainer direction={-1}>
            {headings.map((heading, index) => (
              <motion.h3
                key={`${heading}-${index}`}
                className="h h--3"
                variants={fadeVariants("top")}
              >
                {heading}
              </motion.h3>
            ))}
          </StaggerContainer>

          <motion.div
            className="hero__paragraph text--xs flex flex--justify-end"
            variants={fadeVariants(null)}
            style={{}}
          >
            <p>{paragraph}</p>
          </motion.div>
        </StaggerContainer>

        <motion.div
          className="hero__video"
          variants={fadeVariants("z")}
          style={{ scale: scaleVideo }}
        >
          <motion.div
            style={{ opacity: overlayOpacity }}
            className=" pos--absolute top--0 left--0 width--100 height--100 bg--dark"
          />
          <video
            width={"100%"}
            loop
            muted
            autoPlay
            playsInline
            src={HeroVideo}
            itemType="video/mp4"
          />
        </motion.div>
      </StaggerContainer>
    </section>
  );
};

export default Hero;
