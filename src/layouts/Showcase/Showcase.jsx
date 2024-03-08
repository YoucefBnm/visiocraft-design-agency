import { motion, useTransform } from "framer-motion";
import { ShowcaseImage, ShowcaseImageMd, ShowcaseImageSm } from "../../assets";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Showcase.scss";

const Showcase = () => {
  const { targetRef, scrollYProgress } = useScrollAnimation();
  const scale = useTransform(scrollYProgress, [0, 0.7], [6, 1]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);

  return (
    <section className="showcase" id="showcase">
      <div ref={targetRef} className="showcase__container">
        <motion.div className="showcase__text" style={{ opacity }}>
          <div className="showcase__text showcase__text--wrap color--dark ">
            <h3 className="h h--3">Witness the creativity</h3>
            <p className="text--sm">
              Take a glimpse into our portfolio to witness the creativity and
              precision we bring to each project. From sleek corporate websites
              to vibrante e-commerce platforms.
            </p>
          </div>
        </motion.div>

        <div className="showcase__image">
          <motion.div
            className="showcase__image showcase__image--wrap"
            style={{ scale }}
          >
            <picture>
              <source
                media="(max-width: 850px)"
                srcSet={ShowcaseImageMd}
                width={850}
                height={615}
              />
              <source
                media="(max-width: 600px)"
                srcSet={ShowcaseImageSm}
                width={600}
                height={515}
              />
              <img
                width={1240}
                height={615}
                alt="showcase"
                src={ShowcaseImage}
              />
            </picture>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Showcase;
