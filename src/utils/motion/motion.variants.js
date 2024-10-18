export const transformVariants = (direction) => ({
  hidden: {
    x: direction === "left" ? "-120%" : direction === "right" ? "120%" : 0,
    y: direction === "top" ? "-120%" : direction === "bottom" ? "120%" : 0,
    scale: direction === "z" ? 0 : 1,
    opacity: direction === "opacity" ? 0 : 1,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
  },
});

export const customCursorVariants = {
  default: {
    scale: 1,
    background: "rgba(0,0,0,0)",
    mixBlendMode: "difference",
  },
  view: {
    scale: 1.7,
    background: "#f8f32b",
    mixBlendMode: "normal",
  },
  link: {
    background: "rgba(255,255,255,1)",
    scale: 0.4,
    mixBlendMode: "difference",
  },
  close: {
    background: "rgba(255,255,255,1)",
    scale: 0.4,
    mixBlendMode: "difference",
  },
  navBtn: {
    background: "rgba(255,255,255,1)",
    scale: 1.2,
    mixBlendMode: "difference",
  },
};
export const customCursorTextVariants = {
  default: {
    y: "100%",
    text: "",
  },
  view: {
    y: "0%",
    text: "view",
  },
  navBtn: {
    y: "0%",
    text: "",
  },
  link: {
    text: "",
  },
  close: {
    y: "0%",
    text: "x",
  },
};

export const headerVariants = {
  open: {
    width: 380,
    height: 550,
    top: -8,
    right: -8,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 100,
    height: 40,
    top: 0,
    right: 0,
    transition: { duration: 0.5, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};

export const perspectiveVariants = {
  initial: {
    opacity: 0,
    rotateX: 90,
    y: 80,
    x: -20,
  },
  enter: (index) => ({
    opacity: 1,
    rotateX: 0,
    y: 0,
    x: 0,
    transition: {
      duration: 0.65,
      opacity: { duration: 0.35 },
      delay: 0.5 + index * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    rotateX: 90,
    y: 80,
    x: -20,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
