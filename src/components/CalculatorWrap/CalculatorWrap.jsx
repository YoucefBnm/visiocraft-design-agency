import { motion } from "framer-motion";
import { pricing } from "../../constants";
import { CalculatorContext } from "../../context/calculator/calculator.context";
import { useContext } from "react";
import "./CalculatorWrap.scss";
import IconCheck from "../../assets/icons/icon-check.svg?react";
import { layoutTransition } from "../../libs/motion/motion.transitions";

const CalculatorMain = () => {
  const { mainCategories } = pricing;

  const { mainCategorySelected, setMainCategorySelected } =
    useContext(CalculatorContext);

  return (
    <div
      id="calculator-main"
      className="calculatorMain flex flex--align-center flex--justify-start gap--1"
    >
      {mainCategories.map((category) => (
        <motion.div
          key={category.id}
          className="calculatorMain__group"
          whileHover={{ opacity: 0.8 }}
        >
          <input
            className="input--main"
            type="checkbox"
            name={category.title}
            id={category.title}
            checked={category.title === mainCategorySelected}
            onChange={setMainCategorySelected}
            value={category.title}
          />
          {mainCategorySelected === category.title && (
            <motion.div
              layoutId="calculator-main"
              className="input--main input--main--check bg--green"
              transition={layoutTransition}
            >
              <span>
                <IconCheck />
              </span>
            </motion.div>
          )}
          <label htmlFor={category.title}>{category.title}</label>
        </motion.div>
      ))}
    </div>
  );
};

const CalculatorSub = () => {
  const { subCategory, setSubCategory } = useContext(CalculatorContext);

  return (
    <div className="calculatorSub">
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
              min={1}
              step={1}
              max={20}
              value={category.value}
              id={category.id}
              onChange={setSubCategory}
            />
            <motion.div
              layout
              transition={{ ease: "linear", duration: 0.05 }}
              className="input--progress"
              style={{
                width: `${Number(((category.value - 1) * 100) / (20 - 1))}%`,
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

  return (
    <div className="calculatorAdditional">
      {additionalCategory.map((service) => (
        <div className="calculatorAdditional__group" key={service.id}>
          <label htmlFor={service.id}>{service.title}</label>

          <motion.div
            className="calculatorAdditional__input input--switch"
            style={
              service.isChecked
                ? { justifyContent: "flex-end" }
                : { justifyContent: "flex-start" }
            }
            whileHover={{ opacity: 0.8 }}
          >
            <input
              id={service.id}
              type="checkbox"
              onChange={setAdditionalCategory}
            />
            <motion.span
              layout
              transition={layoutTransition}
              className={`input--handle ${
                service.isChecked ? "bg--green" : "bg--dark-4"
              }`}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const CalculatorWrap = () => {
  return (
    <div className="calculatorWrap bg--dark">
      <CalculatorMain />

      <CalculatorSub />

      <CalculatorAdditional />
    </div>
  );
};

export default CalculatorWrap;
