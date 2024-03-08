import ReactLenis from "@studio-freight/react-lenis";
import ProcessWrap from "../layouts/ProcessWrap/ProcessWrap";
import RouteTransition from "../hoc/RouteTransition";

const Process = () => {
  return (
    <ReactLenis root options={{ duration: 5 }}>
      <ProcessWrap />
    </ReactLenis>
  );
};

const AsyncProcess = RouteTransition(Process);
export default AsyncProcess;
