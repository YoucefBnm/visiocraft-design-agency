import "./Work.scss";
import { portfolioProjects } from "../../constants";
import { memo, useContext } from "react";
import { CustomCursorContext } from "../../context/customCursor/customCursor.context";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { motion, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const WorkProject = memo(function WorkProject({
  project,
  progress,
  range,
  order,
}) {
  const clipPath = useTransform(progress, range, [
    "inset(100% 0% 0%)",
    "inset(0% 0% 0%)",
  ]);

  const { setCursorVariant } = useContext(CustomCursorContext);
  const handleMouseIn = () => setCursorVariant("view");
  const handleMouseLeave = () => setCursorVariant("default");

  return (
    <motion.div
      style={order !== 0 ? { clipPath } : { clipPath: "none" }}
      className="work__project"
    >
      <div className="work__project--header">
        <h4 className="display">FEATURED PROJECTS</h4>

        <div className="work__project--tags">
          {project.tags.map((tag, index) => (
            <div key={`${tag}-${index}`} className={"text--accent text--xs"}>
              <span>{tag}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="work__project--body">
        <h2 className={"display display--2"}>{project.title}</h2>

        <Link
          to={`/portfolio/${project.id}`}
          onMouseEnter={handleMouseIn}
          onMouseLeave={handleMouseLeave}
        >
          <figure>
            <img
              width={2000}
              height={1060}
              loading="lazy"
              decoding="async"
              alt={project.title}
              src={project.imageUrl}
            />
          </figure>
        </Link>
      </div>
    </motion.div>
  );
});
const Work = () => {
  const { targetRef, scrollYProgress } = useScrollAnimation();

  return (
    <section className="work" id="work">
      <div
        ref={targetRef}
        style={{ height: `${portfolioProjects.length + 1}50svh` }}
        className="work__container"
      >
        {portfolioProjects.map((project, index) => {
          const start = index / portfolioProjects.length;
          const end = (start + 2) / portfolioProjects.length;

          return (
            <WorkProject
              key={project.id}
              progress={scrollYProgress}
              project={project}
              order={index}
              range={[start, end]}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Work;
