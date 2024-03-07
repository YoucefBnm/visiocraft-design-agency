import { motion, useTransform } from "framer-motion";
import { portfolioImages } from "../../constants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Cta.scss";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Cta = () => {
  const { targetRef, scrollYProgress } = useScrollAnimation();

  const translateLeft = useTransform(scrollYProgress, [0, 0.4], ["0", "100%"]);
  const translateRight = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["0", "-100%"]
  );
  const rotateLeft = useTransform(scrollYProgress, [0, 0.8], [0, -45]);
  const ratateRight = useTransform(scrollYProgress, [0, 0.8], [0, 45]);
  const imagesOpacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.5]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  //   style="translate: none; rotate: none; scale: none; transform: translate3d(-470.508px, 207.609px, 0px) rotate(-41.943deg);"
  return (
    <section id="cta" className="cta">
      <motion.div
        style={{ opacity: textOpacity }}
        className="cta__text flex flex--col flex--center text--center gap--2 z--2"
      >
        <h3 className="h h--3 color--light">
          Ready to Transform Your Online Presence
        </h3>
        <p>
          Let VisioCraft be your guide in creating a website that reflects your
          vision and captivates your audience.
        </p>
        <Button variant={"shadow btn--shadow--primary"}>
          <Link to="/contact">Get Started</Link>
        </Button>
      </motion.div>
      <div
        ref={targetRef}
        className="cta__container pos--relativ overflow--hidden"
      >
        <div className="cta__images flex flex--wrap flex--justify-center gap--3 ">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={image.id}
              style={
                index % 2 === 0
                  ? {
                      x: translateRight,
                      rotate: rotateLeft,
                      opacity: imagesOpacity,
                    }
                  : {
                      x: translateLeft,
                      rotate: ratateRight,
                      opacity: imagesOpacity,
                    }
              }
            >
              <picture>
                <img
                  width={463}
                  height={304}
                  className="vertical--middle"
                  src={image.image}
                  loading="lazy"
                />
              </picture>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cta;
