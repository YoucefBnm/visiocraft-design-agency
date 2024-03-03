import { motion } from "framer-motion";
import StaggerContainer from "../../components/StaggerContainer/StaggerContainer";
import { pricingSectionText } from "../../constants";
import { fadeVariants } from "../../libs/motion/motion.variants";
import CalculatorWrap from "../../components/CalculatorWrap/CalculatorWrap";
import FormWrap from "../../components/FormWrap/FormWrap";
import "./Pricing.scss";

const Pricing = () => {
  const { heading, lead, paragraph } = pricingSectionText;

  return (
    <section
      id="pricing"
      className="pad--x-lg pad--y-lg mar--y-lg overflow--hidden"
    >
      <StaggerContainer className={"pricing__container"}>
        <StaggerContainer
          direction={-1}
          className="flex flex--col flex--justify-center flex--align-start gap--x-1"
        >
          <motion.h5
            variants={fadeVariants("top")}
            className="h h--5 color--primary-3"
          >
            {lead}
          </motion.h5>
          <motion.h3 variants={fadeVariants("top")} className="h h--3">
            {heading}
          </motion.h3>

          <motion.p className="mar--y-1" variants={fadeVariants("top")}>
            {paragraph}
          </motion.p>
        </StaggerContainer>

        <motion.div
          variants={fadeVariants("right")}
          className="pricing__form flex flex--justify-between"
        >
          <CalculatorWrap />
          <FormWrap />
        </motion.div>
      </StaggerContainer>
    </section>
  );
};

export default Pricing;
