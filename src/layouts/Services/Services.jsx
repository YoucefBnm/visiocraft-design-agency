import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { services } from "../../constants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Services.scss";
import { useState } from "react";
import { layoutTransition } from "../../libs/motion/motion.transitions";

const Services = () => {
  const { targetRef, scrollYProgress } = useScrollAnimation();
  const [currentScrollY, setCurrentScrollY] = useState();

  const y = useTransform(
    scrollYProgress,
    [0, services.length],
    [0, services.length]
  );

  useMotionValueEvent(y, "change", (latest) => {
    const prog = Math.floor((latest / (services.length - 1)) * 10);
    setCurrentScrollY(prog);
  });

  return (
    <section ref={targetRef} id="services" className="services">
      <div className="services__container pad--x-lg pad--y-lg">
        <div id="services-tabs" className="services__tabs">
          {services.map((service, index) => (
            <div className="services__tab" key={`${service.id}-${service}`}>
              <motion.h4
                className="h bg--dark color--light"
                style={
                  index === currentScrollY ? { opacity: 0.8 } : { opacity: 0.2 }
                }
              >
                {service.mainTitle}
              </motion.h4>
              {index === currentScrollY && (
                <motion.span
                  layoutId="services-tabs"
                  className="bg--primary services__tab-indic"
                  transition={layoutTransition}
                />
              )}
            </div>
          ))}
        </div>

        <div className="services__cards-wrap ">
          <motion.div
            layout
            style={{
              translateY: -currentScrollY * 300,
            }}
            className="services__cards"
          >
            {services.map((service, index) => (
              <motion.div
                key={`${service.id}-${index}`}
                className="services__card"
              >
                <h4 className="h h--4 color--primary">{service.subTitle}</h4>
                <p className="text--sm">{service.paragraph}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="services__images flex flex--col flex--align-start flex--justify-start">
          {services.map((service, index) => (
            <div key={`${service.id}`} className="services__image-wrap">
              <AnimatePresence>
                {index === currentScrollY && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="services__image"
                  >
                    <img
                      loading="lazy"
                      width={320}
                      height={230}
                      alt="service image"
                      src={service.image}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
