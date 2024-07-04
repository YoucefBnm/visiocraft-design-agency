export const fadeVariants = (direction) => ({
  hidden: {
    x: direction === "left" ? "-120%" : direction === "right" ? "120%" : 0,
    y: direction === "top" ? "-120%" : direction === "bottom" ? "120%" : 0,
    scale: direction === "z" ? 0 : 1,
    opacity: 0,
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
  navBtn: {
    background: "rgba(255,255,255,1)",
    scale: 1.2,
    mixBlendMode: "difference",
  },
};

export const customCursorWrapVariants = {
  default: {
    borderColor: "rgba(255,255,255,1)",
  },
  view: {
    borderColor: "rgba(0,0,0,0)",
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
};

export const navListVariants = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  hidden: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const navItemVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const navVariants = {
  visible: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    display: "block",
    transition: {
      // type: "spring",
      // stiffness: 20,
      // restDelta: 2,
    },
  },
  hidden: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    display: "none",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
