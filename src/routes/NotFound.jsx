import { HeroWrap } from "../components";
import {
  HeroBtn,
  HeroDescription,
  HeroTitle,
} from "../components/HeroWrap/HeroWrap";

const NotFound = () => {
  return (
    <HeroWrap
      title="Looks like you're lost !!"
      description={"404 not found"}
      route={"/"}
    >
      <HeroTitle />
      <HeroDescription />
      <HeroBtn label={"Back to Home"} />
    </HeroWrap>
  );
};

export default NotFound;
