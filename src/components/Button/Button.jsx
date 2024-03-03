import "./Button.scss";

const Button = ({ variant, children, handleClick, ...otherProps }) => {
  return (
    <button
      role="button"
      onClick={handleClick}
      className={`btn btn--${variant} font-heading`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
