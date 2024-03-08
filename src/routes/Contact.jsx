import { InlineWidget } from "react-calendly";
import RouteTransition from "../hoc/RouteTransition";

const Contact = () => {
  return (
    <main className="pad--x-lg pad--y-lg">
      <InlineWidget url="https://calendly.com/ycf-bnm" />
    </main>
  );
};

const AsyncContact = RouteTransition(Contact);

export default AsyncContact;
