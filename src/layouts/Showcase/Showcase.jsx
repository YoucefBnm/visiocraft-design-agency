import { motion, useTransform } from "framer-motion";
import { ShowcaseImage } from "../../assets";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Showcase.scss";

const Showcase = () => {
  const { targetRef, scrollYProgress } = useScrollAnimation();
  const scale = useTransform(scrollYProgress, [0, 0.7], [6, 1]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);

  return (
    <section id="showcase" className="showcase">
      <div ref={targetRef} className="showcase__container">
        <motion.div
          className={
            "showcase__text flex flex--center gap--2 color--dark overflow--hidden"
          }
          style={{ opacity }}
        >
          <div className="width--50 mar--auto flex flex--center flex--col text--center gap--2 overflow--hidden">
            <h3 className="h h--3">witness the creativity</h3>
            <p className="text--sm">
              Take a glimpse into our portfolio to witness the creativity and
              precision we bring to each project. From sleek corporate websites
              to vibrant e-commerce platforms.
            </p>
          </div>
        </motion.div>
        <div className="showcase__image overflow--hidden">
          <motion.img
            style={{ scale }}
            className="width--100 vertical--middle"
            width={1240}
            height={830}
            alt="showcase"
            src={ShowcaseImage}
          />
        </div>
      </div>
    </section>
  );
};
export default Showcase;
