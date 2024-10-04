import "./Work.scss";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { AnimatedText, StickyCard } from "../../components";
import { workProjects } from "../../constants/data";
import { useContext } from "react";
import { CustomCursorContext } from "../../context/customCursor/customCursor.context";

const WorkCard = ({ project, progress, range }) => {
  const { title, tags, description, imageUrl } = project;

  const { setCursorVariant } = useContext(CustomCursorContext);
  const handleMouseIn = () => setCursorVariant("view");
  const handleMouseLeave = () => setCursorVariant("default");

  return (
    <StickyCard
      progress={progress}
      range={range}
      className="workCard"
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseLeave}
    >
      <div className="workCard__col workCard__text">
        <div className="workCard__header">
          <AnimatedText
            text={title}
            className="workCard__heading display display--2"
          />
          <ul className="workCard__tags">
            {tags.map((tag, index) => (
              <li key={`${index}-${tag}`} className="tag tag--primary">
                <span>{tag}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="workCard__desc">{description}</div>
      </div>

      <div className="workCard__col workCard__img">
        <img
          width={965}
          height={1116}
          src={imageUrl}
          alt={title}
          loading="eager"
          decoding="async"
        />
      </div>
    </StickyCard>
  );
};

const Work = () => {
  const { scrollRef, scrollYProgress } = useScrollAnimation();

  return (
    <section ref={scrollRef} className="work" id="work">
      <ul className="work__list">
        {workProjects.map((project, index) => {
          const start = (index + 0.5) / workProjects.length;
          const end = (index + 1) / workProjects.length;
          const range = [start, end];

          return (
            <WorkCard
              key={project.id}
              project={project}
              progress={scrollYProgress}
              range={range}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Work;
