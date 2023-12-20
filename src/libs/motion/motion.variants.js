export const customCursorVariants = {
    default: {
      height: 20,
      width: 20,
      backgroundColor: "#DBD3D8",
      borderRadius: '50%',
    },
    difference: {
      backgroundColor: "#DBD3D8",
      borderRadius: '50%',
      height: 20,
      width: 20,
      scale: 10,
      mixBlendMode: 'difference',
    },
    project: {
      backgroundColor: "#DBD3D8",
      borderRadius: '50%',
      height: 20,
      width: 20,
      scale: 10,
      mixBlendMode: 'soft-light',
    }
}

export const customCursorSpringConfig = {
    damping:  35,
    stiffness: 700,
    mass: 1
};

export const patternBoxSpringConfig = {
  duration: 15, 
  repeat: Infinity, 
  repeatType: 'loop', 
  ease: 'linear',
  repeatDelay: 0,
}

export const fadeVariants = (direction) => {
  return {
    hidden: {
      x: direction==='left' ? 100 : direction==='right' ? -100 : 0,
      y: direction==='top' ? -100 : direction==='bottom' ? 100 : 0,
      scale: direction==='z' ? .2 : 1,
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    }
  }
}