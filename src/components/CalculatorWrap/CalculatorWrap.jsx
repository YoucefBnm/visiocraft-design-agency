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
      className="calculatorMain flex flex--align-center flex--justify-start gap--y-1 flex--wrap"
    >
      {mainCategories.map((category) => (
        <motion.div
          key={category.id}
          className="calculatorMain__group pos--relative overflow--hidden"
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
              className="input--main input--main--check bg--primary-2"
              transition={layoutTransition}
            >
              <span className="inline-block">
                <IconCheck />
              </span>
            </motion.div>
          )}
          <label
            className="pointer-events--none pos--relative"
            htmlFor={category.title}
          >
            {category.title}
          </label>
        </motion.div>
      ))}
    </div>
  );
};

const CalculatorSub = () => {
  const { subCategory, setSubCategory } = useContext(CalculatorContext);

  return (
    <div className="calculatorSub flex flex--col gap--y-1">
      {subCategory.map((category) => (
        <div key={category.id} className="calculatorSub__group">
          <div className="flex flex--align-center flex--justify-between pad--l-xs">
            <label htmlFor={category.title}>{category.title}</label>
            <div className="calculatorSub__value text--xs">
              <motion.span
                key={category.value}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {category.value}
              </motion.span>
            </div>
          </div>

          <div className="calculatorSub__input pos--relative mar--y-05 with--100 overflow--hidden">
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
              className="input--progress pos--absolute width--100"
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
    <div className="calculatorAdditional flex flex--col gap--x-1">
      {additionalCategory.map((service) => (
        <div className="flex flex--align-center gap--y-1" key={service.id}>
          <label htmlFor={service.id}>{service.title}</label>

          <motion.div
            className={`pos--relative input--switch flex flex--align-center ${
              service.isChecked ? "flex--justify-end" : "flex--justify-start"
            }`}
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
                service.isChecked ? "bg--primary-2" : "bg--dark-4"
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
    <div className="calculatorWrap flex flex--col gap--x-3 pad--y-sm pad--x-md bg--dark-1">
      <CalculatorMain />

      <CalculatorSub />

      <CalculatorAdditional />
    </div>
  );
};

export default CalculatorWrap;
