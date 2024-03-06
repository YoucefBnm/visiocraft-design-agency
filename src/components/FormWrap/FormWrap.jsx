import { motion } from "framer-motion";
import { useSetUserForm } from "../../hooks/useSetUserForm";
import "./FormWrap.scss";
import { useContext } from "react";
import { CalculatorContext } from "../../context/calculator/calculator.context";
import { formatPrice } from "../../utils/price/price.utils";
import { layoutTransition } from "../../libs/motion/motion.transitions";
import Button from "../Button/Button";
import Alert from "../Alert/Alert";
import StaggerContainer from "../StaggerContainer/StaggerContainer";
import { fadeVariants } from "../../libs/motion/motion.variants";

const UserTotalPrice = () => {
  const { mainCategoryPrice, subCategoryPrice, additionalCategoryPrice } =
    useContext(CalculatorContext);
  const totalPrice =
    mainCategoryPrice + subCategoryPrice + additionalCategoryPrice;

  const displayPrice = formatPrice(totalPrice);

  return (
    <div className="flex flex--col gap--x-1 flex--center mar--b-3 width--100 text--center">
      <h5 className="h h--5">Total Price</h5>
      <motion.h3
        className="h h--4 overflow--hidden"
        key={totalPrice}
        transition={layoutTransition}
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
      >
        ${displayPrice}.00
      </motion.h3>
    </div>
  );
};

const UserInput = ({ inputType, label, value, handleChange }) => {
  return (
    <input
      type={inputType}
      name={label}
      onChange={handleChange}
      value={value}
      placeholder={`your ${label}`}
      className="input--user"
      required
    />
  );
};

const UserTextarea = ({ value, handleChange }) => {
  return (
    <textarea
      name="message"
      value={value}
      id="message"
      cols="20"
      rows="7"
      placeholder="your message..."
      className="input--textarea"
      onChange={handleChange}
    />
  );
};

const FormWrap = () => {
  const {
    formRef,
    formFields,
    loading,
    alert,
    handleFormFieldChange,
    handleFormSubmit,
  } = useSetUserForm();

  const { show, text, type } = alert;

  const { email, name, message } = formFields;
  return (
    <form
      onSubmit={handleFormSubmit}
      className="formWrap flex flex--col  gap--x-2 pad--y-md flex--align-start pad--x-md width--100 pos--relative"
      ref={formRef}
    >
      <UserTotalPrice />
      <UserInput
        inputType={"text"}
        label={"name"}
        value={name}
        handleChange={handleFormFieldChange}
      />
      <UserInput
        inputType={"email"}
        label={"email"}
        value={email}
        handleChange={handleFormFieldChange}
      />

      <UserTextarea value={message} handleChange={handleFormFieldChange} />

      <Button
        variant={"bg"}
        type={"submit"}
        disabled={loading}
        aria-label="send email"
      >
        {loading ? "Sending" : "Send"}
      </Button>
      {show && (
        <StaggerContainer className="">
          <motion.div variants={fadeVariants("bottom")}>
            <Alert type={type} text={text} />
          </motion.div>
        </StaggerContainer>
      )}
    </form>
  );
};

export default FormWrap;
