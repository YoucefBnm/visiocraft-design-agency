import { motion, useTransform } from "framer-motion";
import { accomplishmentContent } from "../../constants";
import "./Accomplishment.scss";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Accomplishment = () => {
  const { targetRef, scrollYProgress } = useScrollAnimation();

  const rotate = useTransform(scrollYProgress, [0, 0.2], [-45, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.1], [160, 0]);

  return (
    <section ref={targetRef} id="accomplishment" className="accomplishment">
      <div className="accomplishment__container pad--x-lg">
        {accomplishmentContent.map((accomplishment, index) => (
          <motion.div
            key={accomplishment.id}
            className="accomplishment__card"
            style={
              index === 2 || index === 3
                ? { y, rotate, opacity }
                : { rotate, opacity }
            }
          >
            <div className="accomplishment__card--titleMain color--primary-5">
              <h2 className="h h--2">{accomplishment.number}</h2>
            </div>
            <div className="accomplishment__card--titleSub">
              <h4 className="h h--4 color--light">{accomplishment.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Accomplishment;
