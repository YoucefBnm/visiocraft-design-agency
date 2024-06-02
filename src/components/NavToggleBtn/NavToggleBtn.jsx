import { motion } from "framer-motion";
import "./NavToggleBtn.scss";
import { useContext } from "react";
import { CustomCursorContext } from "../../context/customCursor/customCursor.context";

const NavToggleBtn = ({ isOpen, toggle }) => {
  const { setCursorVariant } = useContext(CustomCursorContext);

  const handleMouseIn = () => setCursorVariant("navBtn");
  const handleMouseOut = () => setCursorVariant("default");

  return (
    <div
      className="navToggle"
      onClick={toggle}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
    >
      <div className="navToggle__wrap">
        <button className="navToggle__btn">
          <span className="navToggle__sr">open main menu</span>

          <motion.span
            className="navToggle__line"
            style={{
              y: isOpen ? 0 : -5,
              rotate: isOpen ? 135 : 0,
            }}
          />
          <motion.span
            className="navToggle__line"
            style={{
              y: isOpen ? 0 : 5,
              rotate: isOpen ? 45 : 0,
            }}
          />
        </button>
      </div>
    </div>
  );
};
export default NavToggleBtn;
