import { PricingCalculator, Form } from "../../components";
import { CalculatorProvider } from "../../context/calculator/calculator.context";
import "./PricingWrap.scss";
const PricingWrap = () => {
  return (
    <section className="pricing">
      <div className="pricing__container">
        <CalculatorProvider>
          <PricingCalculator />
          <Form />
        </CalculatorProvider>
      </div>
    </section>
  );
};

export default PricingWrap;
