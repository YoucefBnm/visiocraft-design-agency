import { Link } from "react-router-dom";
import { LogoText } from "../../assets";
import { PerspectiveText, SocialLinks } from "../../components";
import { navLinks } from "../../constants/data";
import "./Footer.scss";
import { useRevealAnimation } from "../../hooks/useRevealAnimation";
import { motion } from "framer-motion";
import { transformVariants } from "../../utils/motion/motion.variants";
import { easeTransition } from "../../utils/motion/motion.transitions";

const Footer = () => {
  const { revealRef, isInView } = useRevealAnimation();

  return (
    <footer ref={revealRef} className="footer">
      <motion.div
        transition={{ staggerChildren: 0.2, delay: 0.5, duration: 0.4 }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="footer__container"
      >
        <div className="footer__copy">
          <div className="footer__logo">
            <motion.img
              variants={transformVariants("bottom")}
              transition={easeTransition}
              width={265}
              height={82}
              src={LogoText}
              alt="Visiocraft logo"
            />
          </div>
          <motion.p
            variants={transformVariants("opacity")}
            className="footer__about"
          >
            Visiocraft design agency, spesialist in digital design and front end
            development development.
          </motion.p>
          <small className="footer__legal">
            © 2024 All rights reserved. Made with{" "}
            <a
              href="https://ycfdev.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              YCF DEV
            </a>
          </small>
        </div>

        <nav className="footer__nav">
          <motion.ul
            transition={{ staggerChildren: 0.15 }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="footer__links"
          >
            {navLinks.map((navLink) => (
              <motion.li
                variants={transformVariants("opacity")}
                key={navLink.id}
                className="footer__link"
              >
                <Link
                  to={navLink.path}
                  aria-label={`visit ${navLink.title} page`}
                >
                  <PerspectiveText label={navLink.title} />
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        <SocialLinks className={"footer__social"} />
      </motion.div>
    </footer>
  );
};

export default Footer;
