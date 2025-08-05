export const slideInFromRightVariants = {
  initial: {
    opacity: 0, // Initially transparent
    x: 10, // Starts 100 pixels off to the right
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

export const fadeInParagraphVariants = {
  initial: {
    opacity: 0,
    y: 30,
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

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
    },
  },
};
