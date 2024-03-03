export const staggerTransition = (direction) => ({
  staggerChildren: 0.5,
  staggerDirection: direction ? direction : 1,
});

export const layoutTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};
