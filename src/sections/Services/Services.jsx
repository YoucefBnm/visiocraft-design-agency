import { motion, useTransform } from "framer-motion";
import "./Services.scss";
import { easeTransition } from "../../utils/motion/motion.transition";
import { AnimatedText, Button } from "../../components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { services } from "../../constants";
import { useWindowSize } from "@uidotdev/usehooks";

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

  const y = useTransform(progress, range, [50 * (order + 1), 0]);

  const clipPathVisible = "polygon(0 0,100% 0,100% 100%,0 100%)";
  const clipPathHidden = "polygon(50% 0,50% 0,50% 100%,50% 100%)";

  const { width } = useWindowSize();

  const words = title.split(" ");
  console.log(words);
  return (
    <motion.div
      className="card"
      onMouseEnter={toggleIsMouseIn}
      onMouseLeave={toggleIsMouseIn}
      style={width > 900 ? { y } : { y: 0 }}
    >
      <motion.picture
        className="card__pic"
        animate={
          isMouseIn
            ? { clipPath: clipPathVisible }
            : { clipPath: clipPathHidden }
        }
        transition={easeTransition}
      >
        <img
          loading="lazy"
          decoding="async"
          width={1024}
          height={825}
          src={imageUrl}
          alt={title}
        />
      </motion.picture>

      <div className="card__content">
        <motion.h2
          className="card__title"
          animate={isMouseIn ? { y: 0 } : width > 900 ? { y: 138 } : { y: 50 }}
          transition={easeTransition}
        >
          <AnimatedText
            text={title}
            direction={"bottom"}
            className={"display text--xl"}
            style={{ y }}
          />
        </motion.h2>

        <motion.div
          className="card__desc"
          transition={easeTransition}
          animate={
            isMouseIn
              ? { clipPath: clipPathVisible }
              : { clipPath: clipPathHidden }
          }
        >
          {description}
        </motion.div>

        <div className="card__link">
          <Button text={"Discover"} variant={"link"}>
            <Link to={route}>Discover</Link>
          </Button>
        </div>

        <motion.div
          className="card__bg"
          transition={easeTransition}
          animate={isMouseIn ? { scaleX: 1 } : { scaleX: 0 }}
        />
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { scrollRef, scrollYProgress } = useScrollAnimation();
  return (
    <section className="services" id="services">
      <div className="services__container" ref={scrollRef}>
        <div className="services__wrap">
          {services.map((service, index) => {
            const start = (index / services.length) * 0.4;
            const { id, imageUrl, title, description } = service;
            return (
              <ServiceCard
                key={id}
                title={title}
                imageUrl={imageUrl}
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
