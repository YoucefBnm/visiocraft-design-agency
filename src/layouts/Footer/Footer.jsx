import { motion } from "framer-motion";
import StaggerContainer from "../../components/StaggerContainer/StaggerContainer";
import { fadeVariants } from "../../libs/motion/motion.variants";
import LogoImage from "../../components/Logoimage/LogoImage";
import { footerLinks } from "../../constants";

const Footer = () => {
  return (
    <footer className="footer pad--y-md pad--x-lg flex flex--wrap flex--align-start flex--justify-between gap--4 border--t-1">
      <StaggerContainer className="flex flex--col gap--1 flex--center overflow--hidden">
        <motion.div variants={fadeVariants("left")}>
          <LogoImage />
        </motion.div>
        <motion.p variants={fadeVariants("left")} className="text--xs">
          &copy; 2024 | developend by YCF-DEV | all rights reserved.
        </motion.p>
      </StaggerContainer>

      <StaggerContainer className="flex flex--col gap--2 overflow--hidden">
        <motion.div
          variants={fadeVariants("right")}
          className="flex gap--1 flex--col width--100"
        >
          <h4 className="h text--sm">give us a call</h4>
          <p className="text--xs color--primary-2">+213 777 915 747</p>
        </motion.div>
        <motion.div
          variants={fadeVariants("right")}
          className="flex gap--1 flex--col width--100"
        >
          <h4 className="h text--sm">leave us a message</h4>
          <a
            className="text--xs color--primary-2"
            href="mailto:ssefbnm@gmail.com"
          >
            visiocarft@mail.io
          </a>
        </motion.div>
      </StaggerContainer>

      <StaggerContainer className="flex flex--col gap--1 overflow--hidden">
        {footerLinks.map((link) => (
          <motion.a
            variants={fadeVariants(null)}
            href={link.link}
            aria-label="social link"
            target="_blank"
            key={link.id}
            className="text--sm color--primary"
          >
            {link.name}
          </motion.a>
        ))}
      </StaggerContainer>
    </footer>
  );
};

export default Footer;
