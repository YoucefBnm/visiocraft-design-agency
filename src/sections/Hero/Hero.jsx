import { heroContent } from "../../constants/data";
import { transformVariants } from "../../utils/motion/motion.variants";
import { AnimatedText, Button } from "../../components";
import "./Hero.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const navigateToBooking = () => navigate("/booking");

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__col-md">
          <AnimatedText
            text={heroContent.heading1}
            className="hero__heading display display--1"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={transformVariants("opacity")}
            className={`hero__btn `}
            transition={{ delay: 1.5, duration: 0.4, ease: "linear" }}
          >
            <Button
              variant={"bg btn--bg--primary"}
              handleClick={navigateToBooking}
              text={"GET STARTED"}
            >
              <span>GET STARTED</span>
            </Button>
          </motion.div>
        </div>

        <div className="hero__col-sm">
          <motion.h3
            className="hero__desc display text--md"
            variants={transformVariants("opacity")}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.7, duration: 0.4, ease: "linear" }}
          >
            {heroContent.description}
          </motion.h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
