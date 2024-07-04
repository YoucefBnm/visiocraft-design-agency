import { motion } from "framer-motion";
import "./Footer.scss";
import { fadeVariants } from "../../utils/motion/motion.variants";
import Logo from "../../assets/icons/logo.svg?react";
import { socialLinks } from "../../constants";
import { useContext } from "react";
import { CustomCursorContext } from "../../context/customCursor/customCursor.context";
import { useRevealAnimation } from "../../hooks/useRevealAnimation";

const Footer = () => {
  const { setCursorVariant } = useContext(CustomCursorContext);

  const handleMouseIn = () => setCursorVariant("link");
  const handleMouseOut = () => setCursorVariant("default");

  const { revealRef, isInView } = useRevealAnimation();
  return (
    <footer ref={revealRef} className="footer">
      <div className="footer__container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div
            variants={fadeVariants("bottom")}
            className="footer__logo"
          >
            <Logo />
          </motion.div>
          <motion.small
            className="text--primary--300"
            variants={fadeVariants("bottom")}
          >
            <strong>&copy;</strong>2024 developed by ycf dev.
          </motion.small>
        </motion.div>

        <div className={"footer__social"}>
          {socialLinks.map((link) => (
            <motion.a
              onMouseEnter={handleMouseIn}
              onMouseLeave={handleMouseOut}
              target="_blank"
              rel="noopener noreferrer"
              href={link.link}
              key={link.id}
              className="footer__link"
              variants={fadeVariants()}
            >
              {link.title}
            </motion.a>
          ))}
        </div>

        <div className={"footer__infos text--secondary"}>
          <motion.a href="tel:+213777915747">+213 777 915 747</motion.a>
          <motion.a href="mailto:ssefbnm@gmail.com">ssefbnm@gmail.com</motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
