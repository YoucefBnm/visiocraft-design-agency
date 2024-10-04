import { useState } from "react";
import { services } from "../../constants/data";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Services.scss";
import { motion, useTransform } from "framer-motion";
import { useIsTouchdevice } from "../../hooks/useIsTouchDevice";
import { useWindowSize } from "@uidotdev/usehooks";
import { easeTransition } from "../../utils/motion/motion.transitions";
import { AnimatedText, Button } from "../../components";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({
  imageUrl,
  title,
  description,
  route,
  progress,
  range,
  order,
}) => {
  const [isMouseIn, setIsMouseIn] = useState(false);
  const toggleIsMouseIn = () => setIsMouseIn((prevState) => !prevState);
  const { width } = useWindowSize();
  const IsMobile = useIsTouchdevice() || width < 900;

  const yCard = useTransform(progress, range, [50 * (order + 1), 0]);

  const y = IsMobile ? 0 : yCard;

  const clipPathVisible = "polygon(0 0,100% 0,100% 100%,0 100%)";
  const clipPathHidden = "polygon(50% 0,50% 0,50% 100%,50% 100%)";
  const clipPath = IsMobile
    ? clipPathVisible
    : !IsMobile && isMouseIn
    ? clipPathVisible
    : clipPathHidden;

  const navigate = useNavigate();
  const navigateToPage = () => navigate(route);
  return (
    <motion.div
      className="card"
      onMouseEnter={toggleIsMouseIn}
      onMouseLeave={toggleIsMouseIn}
      style={{ y }}
    >
      <motion.picture
        className="card__pic"
        animate={{ clipPath }}
        transition={easeTransition}
      >
        <img
          loading="lazy"
          decoding="async"
          width={960}
          height={600}
          src={imageUrl}
          alt={title}
        />
      </motion.picture>

      <div className="card__content">
        <motion.h2
          className="card__title"
          animate={
            IsMobile ? { y: 0 } : !IsMobile && isMouseIn ? { y: 0 } : { y: 108 }
          }
          transition={easeTransition}
        >
          <AnimatedText
            text={title}
            className={"display text--xl"}
            style={{ y }}
          />
        </motion.h2>

        <motion.div
          className="card__desc"
          transition={easeTransition}
          animate={
            isMouseIn || IsMobile
              ? { clipPath: clipPathVisible }
              : { clipPath: clipPathHidden }
          }
        >
          {description}
        </motion.div>

        <div className="card__link">
          <Button
            handleClick={navigateToPage}
            text={"Discover"}
            variant={"link"}
          />
        </div>

        <motion.div
          className="card__bg"
          animate={isMouseIn || IsMobile ? { scaleX: 1 } : { scaleX: 0 }}
          transition={easeTransition}
        />
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { scrollRef, scrollYProgress } = useScrollAnimation();

  const { width } = useWindowSize();
  const IsMobile = useIsTouchdevice() || width < 900;

  return (
    <section className="services" id="services">
      <div
        style={IsMobile ? { height: "auto" } : { height: "150svh" }}
        className="services__container"
        ref={scrollRef}
      >
        <div
          style={
            IsMobile
              ? { position: "relative" }
              : { position: "sticky", top: 0, left: 0 }
          }
          className="services__wrap"
        >
          {services.map((service, index) => {
            const start = (index / services.length) * 0.6;
            const { id, imageUrl, title, description } = service;
            return (
              <ServiceCard
                key={id}
                imageUrl={imageUrl}
                title={title}
                description={description}
                progress={scrollYProgress}
                range={[start, 0.6]}
                order={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
