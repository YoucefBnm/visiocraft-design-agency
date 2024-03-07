import { motion } from "framer-motion";
import StaggerContainer from "../../components/StaggerContainer/StaggerContainer";
import { fadeVariants } from "../../libs/motion/motion.variants";
import LogoImage from "../../components/Logoimage/LogoImage";
import { footerLinks } from "../../constants";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer pad--x-lg">
      <StaggerContainer className="footer__logo">
        <motion.div variants={fadeVariants("left")}>
          <LogoImage />
        </motion.div>
        <motion.p variants={fadeVariants("left")} className="text--xs">
          &copy; 2024 | developend by YCF-DEV | all rights reserved.
        </motion.p>
      </StaggerContainer>

      <StaggerContainer className="footer__info">
        <motion.div
          variants={fadeVariants("right")}
          className="footer__info-group"
        >
          <h4 className="h text--sm">give us a call</h4>
          <p className="text--xs color--primary-4">+213 777 915 747</p>
        </motion.div>
        <motion.div
          variants={fadeVariants("right")}
          className="footer__info-group"
        >
          <h4 className="h text--sm">leave us a message</h4>
          <a
            className="text--xs color--primary-4"
            href="mailto:ssefbnm@gmail.com"
          >
            visiocarft@mail.io
          </a>
        </motion.div>
      </StaggerContainer>

      <StaggerContainer className="footer__social">
        {footerLinks.map((link) => (
          <motion.a
            variants={fadeVariants(null)}
            href={link.link}
            aria-label="social link"
            target="_blank"
            key={link.id}
            className="text--sm color--primary-2"
          >
            {link.name}
          </motion.a>
        ))}
      </StaggerContainer>
    </footer>
  );
};

export default Footer;
