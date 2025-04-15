export const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }
  
  export const fadeIn = (delay = 0.2) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { delay },
    viewport: { once: true }
  })
  
  export const scaleXIn = {
    initial: { scaleX: 0 },
    whileInView: { scaleX: 1 },
    transition: { duration: 1, delay: 0.4 },
    viewport: { once: true }
  }
  
  export const hoverScale = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 300 }
  }
  