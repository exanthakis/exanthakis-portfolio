export const slideInFromRightVariants = {
  initial: {
    opacity: 0, // Initially transparent
    x: 100, // Starts 100 pixels off to the right
  },
  animate: (index: number) => ({
    opacity: 1, // Becomes fully visible
    x: 0, // Slides to its final position
    transition: {
      delay: 0.2 * index, // Stagger the animations based on index
    },
  }),
};

export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const widthAnimationVariants = {
  initial: {
    width: "10%",
  },
  animate: (index: number) => ({
    width: "100%",
    transition: {
      delay: 0.05 * index,
      duration: 0.8,
      ease: "easeInOut",
    },
  }),
};

export const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};
