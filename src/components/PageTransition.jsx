import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0, y: 24, filter: 'blur(8px)' },
  enter: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: 'blur(8px)',
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
  },
}

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      style={{ position: 'relative' }}
    >
      {children}
    </motion.div>
  )
}
