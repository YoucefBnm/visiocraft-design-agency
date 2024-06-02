export const staggerTransition = (direction) => ({
  delayChildren: 0.4,
  staggerChildren: 0.25,
  direction: direction ? direction : 1,
  damping: 35,
  stiffness: 700,
  mass: 1,
});
export const layoutTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};
export const easeTransition = {
  ease: [0.42, 0, 0.58, 1],
  duration: 0.4,
};

export const customCursorSpringConfig = {
  damping: 35,
  stiffness: 700,
  mass: 1,
};
