import { motion, useTransform } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { portfolioProjects } from "../../constants";
import "./Work.scss";
import { animationRange } from "../../utils/animationRange/animtionRange";
import { ProjectCard } from "../../components";

const Work = () => {
  const { scrollRef, scrollYProgress } = useScrollAnimation();
  const y = useTransform(scrollYProgress, (pos) => (pos >= 1 ? 1344 : 0));
  const position = useTransform(scrollYProgress, (pos) =>
    pos > 0 && pos < 1 ? "fixed" : "relative"
  );

  return (
    <section
      ref={scrollRef}
      style={{ height: `${portfolioProjects.length}00vh` }}
      className="work"
      id="work"
    >
      <motion.div className="work__container" layout style={{ position, y }}>
        <div className="work__wrap">
          <div className="work__cards">
            <div>
              {portfolioProjects.map((project, index) => {
                const { start, end } = animationRange(
                  index,
                  portfolioProjects.length
                );
                return (
                  <ProjectCard
                    key={project.id}
                    progress={scrollYProgress}
                    range={[start, end]}
                    title={project.title}
                    id={project.id}
                    services={project.tags}
                    imageUrl={project.imageUrl}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
