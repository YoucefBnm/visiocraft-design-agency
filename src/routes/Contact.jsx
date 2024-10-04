import { InlineWidget } from "react-calendly";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { Seo } from "../components";

const Contact = () => {
  useScrollToTop();

  return (
    <>
      <Seo
        title={"Contact | Visiocraft"}
        description={"Book a call with our team to discuss your project."}
        url={"https://visiocraft.netlify.app/contact"}
      >
        <meta name="robots" content="noindex, nofollow" />
      </Seo>
      <main
        style={{
          paddingTop: "8rem",
          paddingBottom: "2rem",
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <InlineWidget url="https://calendly.com/ycf-bnm" />
      </main>
    </>
  );
};

export default Contact;
