import { motion, useMotionTemplate, useTransform } from "framer-motion";
import "./StickyCard.scss";
import { memo } from "react";

const StickyCard = memo(function ScrollCard({
  progress,
  range,
  children,
  className,
  ...otherProps
}) {
  const scale = useTransform(progress, range, [1, 0.85]);
  const boxShadowInit = useTransform(progress, range, [-2.9047, -4]);
  const boxShadowEnd = useTransform(progress, range, [7.2618, 10]);

  const boxShadow = useMotionTemplate`rgba(0, 0, 0, 0.18) 0rem ${boxShadowInit}rem ${boxShadowEnd}rem 0rem`;

  return (
    <motion.div
      style={{
        scale,
        boxShadow,
      }}
      className={`stickyCard ${className}`}
      {...otherProps}
    >
      {children}
    </motion.div>
  );
});

export default StickyCard;
