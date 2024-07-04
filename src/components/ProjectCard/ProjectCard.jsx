import { motion, useTransform } from "framer-motion";
import { useContext } from "react";
import { CustomCursorContext } from "../../context/customCursor/customCursor.context";
import { Link } from "react-router-dom";
import "./ProjectCard.scss";

const ProjectCard = ({ id, title, services, imageUrl, progress, range }) => {
  const height = useTransform(progress, range, [500, 0]);

  const { setCursorVariant } = useContext(CustomCursorContext);
  const handleMouseIn = () => setCursorVariant("view");
  const handleMouseLeave = () => setCursorVariant("default");

  return (
    <Link
      to={`/portfolio/${id}`}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseLeave}
      className="projectCard"
    >
      <div className="projectCard__header">
        <h3 className="display display--3">{title.toUpperCase()}</h3>

        <div className="projectCard__services">
          {services.map((service, index) => (
            <div
              key={`${service}-${index}`}
              className="text--xs display text--secondary"
            >
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>

      <motion.div style={{ height }} layout className="projectCard__image">
        <img
          src={imageUrl}
          loading="lazy"
          decoding="async"
          alt={`${title} project`}
          width={2000}
          height={1060}
        />
      </motion.div>
    </Link>
  );
};
export default ProjectCard;
