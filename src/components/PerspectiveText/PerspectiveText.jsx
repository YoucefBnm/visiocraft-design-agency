import { useContext } from "react";
import "./PerspectiveText.scss";
import { CustomCursorContext } from "../../context/customCursor/customCursor.context";

const PerspectiveText = ({ label, className }) => {
  const { setCursorVariant } = useContext(CustomCursorContext);
  const handleMouseIn = () => setCursorVariant("link");
  const handleMouseLeave = () => setCursorVariant("default");

  return (
    <div
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseLeave}
      className={`perspectiveText ${className}`}
    >
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
};

export default PerspectiveText;
