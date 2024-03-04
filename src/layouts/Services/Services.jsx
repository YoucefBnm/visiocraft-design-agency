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
    // console.log(latest, "latest");
  });

  console.log(currentScrollY, "scroll y");
  return (
    <section ref={targetRef} id="services" className="services">
      <div className="services__container pad--x-lg pad--y-lg">
        <div
          id="services-tabs"
          className="services__tabs flex flex--col gap--3  flex--align-start"
        >
          {services.map((service, index) => (
            <div
              className="services__tab inline-block pos--relative"
              key={`${service.id}-${service}`}
            >
              <motion.h4
                className={`h pos--relative bg--dark z--2 ${
                  index == currentScrollY ? "opacity--1" : "opacity--2"
                }`}
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
                className="services__card flex flex--col  gap--2 "
              >
                <h4 className="h h--4">{service.subTitle}</h4>
                <p className="text--sm opacity--8">{service.paragraph}</p>
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
                      width={320}
                      height={230}
                      alt="service image"
                      src={service.image}
                    />
                  </motion.div>
                )}

                {/* <div className="serivices__image-icon">
                <img src={service.icon} aria-hidden="true" width={24} />
              </div> */}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
