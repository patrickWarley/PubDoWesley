import { motion, AnimatePresence } from "framer-motion";

function Loading({ isVisible }) {
  const changeOpacity = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 10,
      }
    }
  }

  const heroEntry = {
    visible: order => ({
      y: [0, 30, 0],
      transition: {
        delay: order * 0.5,
        duration: 1,
        repeat: Infinity
      }
    }),
    hidden: {
      y: 0
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={changeOpacity}
          className="container text-center align-items-center justify-content-center w-100 light-text">

          <motion.div variants={heroEntry} custom={1} style={{ display: 'inline-block' }}>
            <i class="fa-solid fa-wine-glass-empty fa-lg mx-3 m-md-5" ></i>
          </motion.div>
          <motion.div variants={heroEntry} custom={2} style={{ display: 'inline-block' }}>
            <i class="fa-solid fa-champagne-glasses fa-lg mx-3 m-md-5"></i>
          </motion.div>
          <motion.div variants={heroEntry} custom={3} style={{ display: 'inline-block' }}>
            <i class="fa-solid fa-martini-glass-citrus fa-lg mx-3 m-md-5"></i>
          </motion.div>
          <motion.div variants={heroEntry} custom={4} style={{ display: 'inline-block' }}>
            <i class="fa-solid fa-wine-bottle fa-lg mx-3 m-md-5" ></i>
          </motion.div>
        </motion.div>
      )
      }
    </AnimatePresence >
  );
}

export default Loading;