import { motion } from "framer-motion";
import "./Footer.scss";
import { fadeVariants } from "../../utils/motion/motion.variants";
import { StaggerContainer } from "../../components";
import Logo from "../../assets/icons/logo.svg?react";
import { socialLinks } from "../../constants";
import { useContext } from "react";
import { CustomCursorContext } from "../../context/customCursor/customCursor.context";

const Footer = () => {
  const { setCursorVariant } = useContext(CustomCursorContext);

  const handleMouseIn = () => setCursorVariant("link");
  const handleMouseOut = () => setCursorVariant("default");

  return (
    <footer className="footer">
      <div className="footer__container">
        <StaggerContainer>
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
        </StaggerContainer>

        <StaggerContainer className={"footer__social"}>
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
        </StaggerContainer>

        <StaggerContainer className={"footer__infos text--secondary"}>
          <motion.a href="tel:+213777915747">+213 777 915 747</motion.a>
          <motion.a href="mailto:ssefbnm@gmail.com">ssefbnm@gmail.com</motion.a>
        </StaggerContainer>
      </div>
    </footer>
  );
};

export default Footer;
