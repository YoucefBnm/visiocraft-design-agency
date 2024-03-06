import "./Alert.scss";

const Alert = ({ type, text }) => {
  return (
    <div className={`alert text--sm alert__${type}`}>
      <span>{text}</span>
    </div>
  );
};

export default Alert;
