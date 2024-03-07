import { motion } from "framer-motion";
import "./ProcessWrap.scss";
import { fadeVariants } from "../../libs/motion/motion.variants";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { processPhases } from "../../constants";

const ProcessCard = ({ phase, index }) => {
  const { step, titleSub, titleMain, paragraph } = phase;
  const { targetRef, isInView } = useRevealOnScroll();

  const checkIsPair = index % 2 === 0;

  return (
    <div className="processCard">
      <div className="processCard__col processCard__col--sm bg--primary-2 color--dark">
        <span className="h h--4">{step}</span>
      </div>

      <motion.div
        className={`processCard__col processCard__col--lg ${
          checkIsPair
            ? "processCard__col--lg--left"
            : "processCard__col--lg--right"
        }`}
        variants={checkIsPair ? fadeVariants("left") : fadeVariants("right")}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="processCard__body">
          <div className="processCard__headings">
            <h5 className="h h--5 color--primary">{titleSub}</h5>
            <h4 className="h h--4">{titleMain}</h4>
          </div>

          <div className="processCard__paragraph">
            <p>{paragraph}</p>
          </div>
        </div>

        <div ref={targetRef} />
      </motion.div>
    </div>
  );
};

const ProcessWrap = () => {
  const { targetRef, scrollYProgress } = useScrollAnimation();

  return (
    <main className="processWrap pad--x-lg pad--y-lg">
      <div ref={targetRef} className="processWrap__container">
        {processPhases.map((phase, index) => (
          <ProcessCard key={phase.id} phase={phase} index={index} />
        ))}

        <motion.div
          className="processWrap__progress bg--primary-3"
          style={{ scaleY: scrollYProgress }}
        />
      </div>
    </main>
  );
};

export default ProcessWrap;
