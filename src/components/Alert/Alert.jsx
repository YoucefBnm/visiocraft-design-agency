import { motion } from "framer-motion";

const Alert = ({ variants, type, text }) => {
  return (
    <motion.div
      variants={variants}
      className={`alert bg--${type} text--sm flex rad--2 pad--y-2 pad--x-2 flex--align-center`}
    >
      <span>{text}</span>
    </motion.div>
  );
};

export default Alert;
