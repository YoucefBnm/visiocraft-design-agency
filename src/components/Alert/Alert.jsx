import "./Alert.scss";

const Alert = ({ type, message }) => {
  return (
    <div className={`alert text--xs alert--${type}`}>
      <span>{message}</span>
    </div>
  );
};

export default Alert;
