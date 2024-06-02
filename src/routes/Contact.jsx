import { InlineWidget } from "react-calendly";
import RouteTransition from "../hoc/RouteTransition";
import { Suspense } from "react";

const Contact = () => {
  return (
    <Suspense>
      <main
        style={{ paddingTop: "8rem", paddingBottom: "2rem", margin: "0 auto" }}
      >
        <InlineWidget url="https://calendly.com/ycf-bnm" />
      </main>
    </Suspense>
  );
};

const AsyncContact = RouteTransition(Contact);

export default AsyncContact;
