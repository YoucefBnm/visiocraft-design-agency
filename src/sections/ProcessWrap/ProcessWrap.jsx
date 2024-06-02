import { memo, useRef } from "react";
import "./ProcessWrap.scss";
import { processPhases } from "../../constants";
import { motion, useScroll } from "framer-motion";
import { useRevealAnimation } from "../../hooks/useRevealAnimation";
import { fadeVariants } from "../../utils/motion/motion.variants";
import AnimatedText from "../../components/AnimatedText/AnimatedText";

const ProcessCard = memo(function ProcessCard({ phase }) {
  const { titleSub, titleMain, paragraph } = phase;

  const { targetRef, isInView } = useRevealAnimation();
  return (
    <>
      <motion.div
        className="process__content"
        transition={{
          delayChildren: 0.4,
          staggerChildren: 0.2,
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h4
          className="display process__titleSub"
          variants={fadeVariants("bottom")}
          transition={{
            type: "spring",
            damping: 30,
          }}
        >
          {titleSub}
        </motion.h4>
        <AnimatedText
          className="display display--2 process__title"
          direction={"bottom"}
          transition={{
            type: "spring",
            damping: 30,
          }}
          text={titleMain}
        />
        <motion.p
          ref={targetRef}
          className="process__desc"
          variants={fadeVariants()}
          transition={{ ease: "linear" }}
        >
          {paragraph}
        </motion.p>
      </motion.div>
    </>
  );
});

const ProcessWrap = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <section className="process">
      <div ref={targetRef} className="process__container">
        {processPhases.map((phase) => (
          <div className="process__card" key={phase.id}>
            <div className="process__step">
              <span className="display">{phase.step}</span>
            </div>
            <ProcessCard phase={phase} />
          </div>
        ))}
      </div>
      <motion.div
        className="process__progress"
        style={{ scaleY: scrollYProgress }}
      />
    </section>
  );
};

export default ProcessWrap;
