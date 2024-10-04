import { useState } from "react";
import "./Header.scss";
import { AnimatePresence, motion } from "framer-motion";
import { headerVariants } from "../../utils/motion/motion.variants";
import { Nav, ToggleMenuBtn } from "../../components";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return (
    <header className="header">
      <motion.div
        className="header__menu"
        variants={headerVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <AnimatePresence>
          {isOpen && <Nav closeMenu={closeMenu} />}
        </AnimatePresence>
      </motion.div>
      <ToggleMenuBtn isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
