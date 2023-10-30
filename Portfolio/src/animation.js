export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.75,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { y: "200px" },
  show: {
    y: "0%",
    transition: { duration: 0.65 },
  },
};

export const fadeInAnimations = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.07,
    },
  }),
};

export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
