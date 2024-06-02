import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navLinks } from "../../constants";
import {
  navItemVariants,
  navListVariants,
  navVariants,
} from "../../utils/motion/motion.variants";
import "./Navigation.scss";

const Navigation = ({ isOpen, closeNav }) => {
  return (
    <motion.nav
      className="navigation"
      variants={navVariants}
      animate={isOpen ? "visible" : "hidden"}
    >
      <div className="navigation__container">
        <div className="navigation__wrap">
          <motion.ul variants={navListVariants} className="navigation__list">
            <motion.div
              className={"navigation__items"}
              animate={isOpen ? "visible" : "hidden"}
            >
              {navLinks.map((navLink) => (
                <motion.div
                  variants={navItemVariants}
                  key={navLink.id}
                  className="navigation__link"
                  onClick={closeNav}
                >
                  <Link to={navLink.route} className="display display--2">
                    <span>{navLink.title}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
