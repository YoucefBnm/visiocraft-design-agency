export const staggerTransition = (direction) => ({
  staggerChildren: 0.5,
  delayChildren: 0.2,
  staggerDirection: direction ? direction : 1,
});

export const layoutTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};
