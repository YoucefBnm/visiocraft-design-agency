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
    <section id="pricing" className="pricing pad--x-lg">
      <div className="pricing__container">
        <StaggerContainer direction={-1} className="pricing__text">
          <motion.h5
            variants={fadeVariants("top")}
            className="h h--5 color--primary"
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

        <motion.div variants={fadeVariants("right")} className="pricing__form">
          <CalculatorWrap />
          <FormWrap />
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
