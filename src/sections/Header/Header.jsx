import { useEffect, useRef, useState } from "react";
import "./Header.scss";
import { AnimatePresence, motion } from "framer-motion";
import { headerVariants } from "../../utils/motion/motion.variants";
import { Nav, ToggleMenuBtn } from "../../components";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <header className="header">
      <motion.div
        className="header__menu"
        variants={headerVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        ref={menuRef}
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
