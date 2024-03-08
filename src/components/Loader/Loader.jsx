import { useEffect, useState } from "react";
import "./Loader.scss";
import { motion } from "framer-motion";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only start the interval if progress is less than 100
    if (progress < 100) {
      const intervalId = setInterval(() => {
        setProgress((currentProgress) => {
          if (currentProgress >= 100) {
            clearInterval(intervalId); // Clear interval if progress is 100 or more
            return 100; // Ensure progress does not exceed 100
          }
          return currentProgress + 1;
        });
      }, 1); // Adjust the interval time as needed

      return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }
  }, [progress]);

  console.log(progress);
  return (
    <div className="loader">
      <motion.span
        className="h h--3 color--primary-4"
        key={progress}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
      >
        {progress}
      </motion.span>
      <span className="h h--3 color--primary-4">%</span>
    </div>
  );
};

export default Loader;
