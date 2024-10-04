import { useContext } from "react";
import "./Button.scss";
import { CustomCursorContext } from "../../context/customCursor/customCursor.context";
import PerspectiveText from "../PerspectiveText/PerspectiveText";

const Button = ({ variant, text, handleClick, children, ...otherprops }) => {
  const { setCursorVariant } = useContext(CustomCursorContext);
  const handleMouseIn = () => setCursorVariant("link");
  const handleMouseLeave = () => setCursorVariant("default");

  return (
    <button
      className={`btn btn--${variant}`}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseLeave}
      role="button"
      onClick={handleClick}
      {...otherprops}
    >
      <PerspectiveText label={text} className={"btn--text"} />
      {children}
    </button>
  );
};

export default Button;
