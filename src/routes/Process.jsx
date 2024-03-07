import ReactLenis from "@studio-freight/react-lenis";
import ProcessWrap from "../layouts/ProcessWrap/ProcessWrap";

const Process = () => {
  return (
    <ReactLenis root options={{ duration: 5 }}>
      <ProcessWrap />
    </ReactLenis>
  );
};

export default Process;
