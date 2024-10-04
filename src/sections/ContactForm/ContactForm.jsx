import { useContext } from "react";
import "./ContactForm.scss";
import { CalculatorContext } from "../../context/calculator/calculator.context";
import { formatPrice } from "../../utils/price/price.utils";
import { motion } from "framer-motion";
import { layoutTransition } from "../../utils/motion/motion.transitions";
import { useSetUserForm } from "../../hooks/useSetUserForm";
import { CustomCursorContext } from "../../context/customCursor/customCursor.context";
import { transformVariants } from "../../utils/motion/motion.variants";
import { Alert, Button } from "../../components";

const TotalPrice = () => {
  const { mainCategoryPrice, subCategoryPrice, additionalCategoryPrice } =
    useContext(CalculatorContext);

  const totalPrice =
    mainCategoryPrice + subCategoryPrice + additionalCategoryPrice;

  const displayPrice = formatPrice(totalPrice);

  return (
    <div className="price">
      <motion.h3
        className="display text--xl"
        key={totalPrice}
        transition={layoutTransition}
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.2 }}
      >
        ${displayPrice}.00
      </motion.h3>
    </div>
  );
};

const UserInput = ({ label, handleChange, ...otherProps }) => {
  const { setCursorVariant } = useContext(CustomCursorContext);
  const handleMouseIn = () => setCursorVariant("link");
  const handleMouseOut = () => setCursorVariant("default");

  return (
    <input
      name={label}
      onChange={handleChange}
      className="input--user"
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
      {...otherProps}
    />
  );
};
const UserTextarea = ({ handleChange, value }) => {
  const { setCursorVariant } = useContext(CustomCursorContext);
  const handleMouseIn = () => setCursorVariant("link");
  const handleMouseOut = () => setCursorVariant("default");

  return (
    <textarea
      name="message"
      id="message"
      value={value}
      cols={20}
      rows={8}
      placeholder="Your message..."
      className="input--textarea"
      onChange={handleChange}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
    />
  );
};

const Form = () => {
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
    <form ref={formRef} onSubmit={handleFormSubmit} className="form">
      <TotalPrice />
      <UserInput
        type="text"
        label={"name"}
        value={name}
        handleChange={handleFormFieldChange}
        placeholder="your name"
        disabled={loading}
        required
      />
      <UserInput
        type="email"
        label={"email"}
        value={email}
        handleChange={handleFormFieldChange}
        placeholder="your email"
        required
      />
      <UserTextarea
        value={message}
        handleChange={handleFormFieldChange}
        required
      />

      <Button
        type="submit"
        variant={"bg btn--bg--primary"}
        aria-label="send message"
        text={loading ? "Sending" : "Send"}
      />

      <div className="form__alert">
        <motion.div
          className="form__alert--wrap"
          variants={transformVariants("bottom")}
          animate={show ? "visible" : "hidden"}
        >
          <Alert type={type} message={text} />
        </motion.div>
      </div>
    </form>
  );
};

export default Form;
