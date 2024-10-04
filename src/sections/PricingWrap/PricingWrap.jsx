import { PricingCalculator } from "../../components";
import { CalculatorProvider } from "../../context/calculator/calculator.context";
import ContactForm from "../ContactForm/ContactForm";
import "./PricingWrap.scss";

const PricingWrap = () => {
  return (
    <main className="pricing">
      <div className="pricing__container">
        <CalculatorProvider>
          <PricingCalculator />
          <ContactForm />
        </CalculatorProvider>
      </div>
    </main>
  );
};

export default PricingWrap;
