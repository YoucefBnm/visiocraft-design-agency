import { motion } from "framer-motion";
import { navLinks } from "../../constants/data";
import { perspectiveVariants } from "../../utils/motion/motion.variants";
import { Link } from "react-router-dom";
import { PerspectiveText } from "../";
import "./Nav.scss";

const Nav = ({ closeMenu }) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navLinks.map((link, index) => (
          <li key={link.id} className="nav__item">
            <motion.div
              variants={perspectiveVariants}
              custom={index}
              initial="initial"
              animate="enter"
              exit="exit"
              className="nav__link"
            >
              <Link to={link.path} onClick={closeMenu}>
                <PerspectiveText
                  className={"display display--2"}
                  label={link.title}
                />
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
