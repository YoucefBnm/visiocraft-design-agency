import { useContext } from "react";
import "./PricingCalculator.scss";
import { CalculatorContext } from "../../context/calculator/calculator.context";
import { motion } from "framer-motion";
import { CustomCursorContext } from "../../context/customCursor/customCursor.context";
import { pricing } from "../../constants/data";

const CalculatorMain = () => {
  const { mainCategories } = pricing;

  const { mainCategorySelected, setMainCategorySelected } =
    useContext(CalculatorContext);
  const { setCursorVariant } = useContext(CustomCursorContext);
  const handleMouseIn = () => setCursorVariant("link");
  const handleMouseOut = () => setCursorVariant("default");

  return (
    <div className="calculatorMain" id="calculator-main">
      {mainCategories.map((category) => (
        <motion.div
          key={category.id}
          className="calculatorMain__group"
          whileHover={{ opacity: 0.8 }}
        >
          <input
            className="input--select"
            type="checkbox"
            name={category.title}
            checked={category.title === mainCategorySelected}
            onChange={setMainCategorySelected}
            value={category.title}
            onMouseEnter={handleMouseIn}
            onMouseLeave={handleMouseOut}
          />
          {mainCategorySelected === category.title && (
            <motion.div
              layoutId="calculator-main"
              className="input--select--check"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
          )}

          <label className="text--xs" htmlFor={category.title}>
            {category.title}
          </label>
        </motion.div>
      ))}
    </div>
  );
};

const CalculatorSub = () => {
  const { subCategory, setSubCategory } = useContext(CalculatorContext);
  const { setCursorVariant } = useContext(CustomCursorContext);
  const handleMouseIn = () => setCursorVariant("link");
  const handleMouseOut = () => setCursorVariant("default");

  return (
    <div className="calculatorSub" id="calculator-sub">
      {subCategory.map((category) => (
        <div key={category.id} className="calculatorSub__group">
          <div className="calculatorSub__label">
            <label htmlFor={category.title}>{category.title}</label>
            <div className="calculatorSub__value">
              <motion.span
                key={category.value}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {category.value}
              </motion.span>
            </div>
          </div>

          <div className="calculatorSub__input">
            <input
              className="input--range"
              type="range"
              min={0}
              step={1}
              max={20}
              value={category.value}
              id={category.id}
              onChange={setSubCategory}
              onMouseEnter={handleMouseIn}
              onMouseLeave={handleMouseOut}
            />
            <motion.div
              layout
              transition={{ ease: "linear", duration: 0.05 }}
              className="input--range--progress"
              style={{
                width: `${Number((category.value * 100) / 20)}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const CalculatorAdditional = () => {
  const { additionalCategory, setAdditionalCategory } =
    useContext(CalculatorContext);
  const { setCursorVariant } = useContext(CustomCursorContext);
  const handleMouseIn = () => setCursorVariant("link");
  const handleMouseOut = () => setCursorVariant("default");

  return (
    <div className="calculatorAdd" id="calculator-add">
      {additionalCategory.map((category) => (
        <div key={category.id} className="calculatorAdd__group">
          <label htmlFor={category.id}>{category.title}</label>
          <motion.div
            className="calculatorAdd__input input--switch"
            style={
              category.isChecked
                ? { justifyContent: "flex-end" }
                : { justifyContent: "flex-start" }
            }
            whileHover={{ opacity: 0.85 }}
          >
            <input
              id={category.id}
              type="checkbox"
              onChange={setAdditionalCategory}
              onMouseEnter={handleMouseIn}
              onMouseLeave={handleMouseOut}
            />
            <motion.span
              layout
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className={
                category.isChecked ? "input--handle--checked" : "input--handle"
              }
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};
const PricingCalculator = () => {
  return (
    <div className="calculator">
      <CalculatorMain />
      <CalculatorSub />
      <CalculatorAdditional />
    </div>
  );
};

export default PricingCalculator;
