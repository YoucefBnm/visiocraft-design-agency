import { PhaseCard } from "../../components";
import { processPhases } from "../../constants/data";
import { useRevealAnimation } from "../../hooks/useRevealAnimation";
import "./ProcessPhases.scss";

const ProcessPhases = () => {
  const { revealRef, isInView } = useRevealAnimation();
  return (
    <main className="processPhases">
      <div ref={revealRef} className="processPhases__container">
        {processPhases.map((phase, index) => (
          <PhaseCard
            key={phase.id}
            step={phase.step}
            title={phase.titleMain}
            description={phase.paragraph}
            isInview={isInView}
            index={index}
          />
        ))}
      </div>
    </main>
  );
};

export default ProcessPhases;
