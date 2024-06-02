import Logo from "../../assets/icons/logo.svg?react";
import { useCycle } from "framer-motion";
import { NavToggleBtn, Navigation } from "../../components";
import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useCycle(false, true);

  const toggleNav = () => setIsOpen((prevState) => !prevState);
  const closeNav = () => setIsOpen(false);

  return (
    <>
      <header className="header">
        <div className="header__container">
          <Logo />
          <NavToggleBtn isOpen={isOpen} toggle={toggleNav} />
        </div>
      </header>

      <Navigation closeNav={closeNav} isOpen={isOpen} />
    </>
  );
};

export default Header;
