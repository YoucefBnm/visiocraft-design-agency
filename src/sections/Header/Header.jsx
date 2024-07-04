import Logo from "../../assets/icons/logo.svg?react";
import { motion } from "framer-motion";
import { NavToggleBtn, Navigation } from "../../components";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useToggleHeader } from "../../hooks/useToggleHeader";

const Header = () => {
  const { isOpen, isHidden, toggleNav, closeNav, showHeader } =
    useToggleHeader();

  return (
    <>
      <motion.header
        transition={{ duration: 0.2 }}
        className="header"
        animate={isHidden ? { y: "-90%" } : { y: "0%" }}
        whileHover={{ y: "0%" }}
        onFocusCapture={showHeader}
      >
        <div className="header__container">
          <Link to="/">
            <Logo />
          </Link>
          <NavToggleBtn isOpen={isOpen} toggle={toggleNav} />
        </div>
      </motion.header>

      <Navigation closeNav={closeNav} isOpen={isOpen} />
    </>
  );
};

export default Header;
