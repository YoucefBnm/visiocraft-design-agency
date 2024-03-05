import { motion, useTransform } from "framer-motion";
import { accomplishmentContent } from "../../constants";
import "./Accomplishment.scss";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import StaggerContainer from "../../components/StaggerContainer/StaggerContainer";
import { fadeVariants } from "../../libs/motion/motion.variants";

const Accomplishment = () => {
  const { targetRef, scrollYProgress } = useScrollAnimation();

  const rotate = useTransform(scrollYProgress, [0, 0.2], [-45, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 0.1], [160, 0]);

  return (
    <section
      ref={targetRef}
      id="accomplishment"
      className="accomplishment pos--relative "
    >
      <div className="accomplishment__container pad--x-lg">
        {accomplishmentContent.map((accomplishment, index) => (
          <motion.div
            key={accomplishment.id}
            className="accomplishment__card flex flex--col flex--justify-between pad--y-xs gap--2"
            style={
              index === 2 || index === 3
                ? { y, rotate, opacity }
                : { rotate, opacity }
            }
          >
            <div className="text--left pad--l-md">
              <h1 className="h h--1 color--primary opacity--7">
                {accomplishment.number}
              </h1>
            </div>
            <div className="flex flex--justify-end text--right pad--r-md">
              <h4 className="h h--4 color--light">{accomplishment.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Accomplishment;
