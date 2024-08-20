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
