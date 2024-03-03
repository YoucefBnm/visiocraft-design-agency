import "./Button.scss";

const Button = ({ type, handleClick, variant, children }) => {
  return (
    <button
      type={type}
      role="button"
      onClick={handleClick}
      className={`btn btn--${variant} font-heading`}
    >
      {children}
    </button>
  );
};

export default Button;
