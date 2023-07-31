// next image
import Image from "next/image";

//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from '../variants';

const Home = () => {
  return ( 
    <div className= 'bg-primary/60 h-full'>
      {/* text*/ }
      <div className='text-center flex flex-gradiant-to.r from-primaty/10 via-black/30
      to-black/10'>
        <div className= 'text-center flex flex-col justify-center xl:pt-40 xl:text-left
        h-full container mx-auto'>
          {/*tittle*/}
          <motion.h1 
            variants={('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hi'
          >
            Transforming ideas <br /> into {' '}
            <span className= 'text-accent'>Digital Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p 
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
            lorem ipsum dolor sit amet 
          </motion.p>
          {/* btn */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn/>
          </div>
          <motion.div 
          variants={('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div> 
      {/*image*/}
      <div>image</div>
    </div>
  );
};

export default Home;