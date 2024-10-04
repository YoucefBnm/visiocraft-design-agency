import { motion } from "framer-motion";
import { PerspectiveText } from "../";
import "./ToggleMenuBtn.scss";

const ToggleMenuBtn = ({ isOpen, setIsOpen }) => {
  const handleClick = () => setIsOpen((prevState) => !prevState);

  return (
    <button
      onClick={handleClick}
      aria-label="Toggle Menu"
      className="toggleMenuBtn"
    >
      <motion.div
        className="toggleMenuBtn__slider"
        animate={{ y: isOpen ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="toggleMenuBtn__copy">
          <PerspectiveText label={"Menu"} />
        </div>
        <div className="toggleMenuBtn__copy">
          <PerspectiveText label={"Close"} />
        </div>
      </motion.div>
    </button>
  );
};

export default ToggleMenuBtn;
