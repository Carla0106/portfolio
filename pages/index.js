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
      <div>
        <div className= 'text-center flex flex-col'>
          {/*tittle*/}
          <h1 className='hi'>
            Transforming ideas <br /> into {' '}
            <span className= 'text-accent'>Digital Reality</span>
          </h1>
          {/* subtitle */}
          <p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            lorem ipsum dolor sit amet 
          </p>
        </div>
      </div> 
      {/*image*/}
      <p></p>
      <div>image</div>
  </div>
  );
};

export default Home;