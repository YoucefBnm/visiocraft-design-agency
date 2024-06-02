import { Suspense } from "react";
import RouteTransition from "../hoc/RouteTransition";
import { ProcessWrap } from "../sections";

const Process = () => {
  return (
    <Suspense>
      <ProcessWrap />
    </Suspense>
  );
};

const AsyncProcess = RouteTransition(Process);
export default AsyncProcess;
