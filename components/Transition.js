// framer motion
import { motion } from 'framer-motion';

//variants
const transitionVariants = {
  initial:{
    x: '100%',
    width:'100%'
  },
  animate: {
    x:'0%',
    width:'0%',
  },
  exit:{
    x:['0%', '100%'],
    width: ['0%','100%'],
  },
};
const Transition = () => {
  return (
    <>
      <motion.div 
        className ='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#22e2257]'
        variants={transitionVariants}
        initial='initial' 
        animate='animate'
        exit='exit'
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }} // <-- Corregido aquí
      ></motion.div>
      <motion.div 
        className ='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]'
        variants={transitionVariants}
        initial='initial' 
        animate='animate'
        exit='exit'
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }} // <-- Corregido aquí
      ></motion.div>
      <motion.div 
        className ='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]'
        variants={transitionVariants}
        initial='initial' 
        animate='animate'
        exit='exit'
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }} // <-- Corregido aquí
      ></motion.div>
    </>
  );
};

export default Transition;