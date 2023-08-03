// next image
import Image from "next/image";

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from '../variants';

const Home = () => {
  return ( 
    <div className='bg-primary/30 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/90 to-black/50'>
        <div className='text-center flex flex-col justify-center xl:pt-20  xl:text-left  h-full container mx-[10%]'>
          {/* title */}
          <motion.h1 
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hi'
            style={{ margin: '0 auto 0 2rem' }}
          >
            Transforming ideas <br /> Into {' '}
            <span className='text-accent'>Digital Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p 
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-63 mx-auto xl:mx-0 mb-10 xl:mb-16'
            style={{ margin: '20px auto 20px 2rem' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </motion.p>
          {/* btn */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div 
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
            style={{ margin: '0px 50px 6px 12rem' }}
          >
            <ProjectsBtn />
          </motion.div>
        </div> 
        {/* image */}
        <div className='w-[1200px] h-full absolute right-0 bottom-0'>
          {/* bg img */}
          <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
          {/* particles */}
          <ParticlesContainer />
          {/* avatar img */}
          <div className='w-full h-full flex justify-center items-center'>
            <motion.div
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              animate='show'
              exit='hidden'
              transition={{duration: 1, ease: 'easeInOut'}}
              className='w-full h-full max-w-[497px] max-h-[439px] absolute -bottom-32 lg:bottom-0 lg:right-[13%]'
            >
              <Avatar />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
