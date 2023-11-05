import { Player } from '@lottiefiles/react-lottie-player';
import json from '../../assets/json/banner.json';
const Hero = () => {
  return (
    <div className='flex flex-col justify-center md:flex-row lg:flex-row'>
      <div className='flex lg:justify-end'>
        <Player
          autoplay
          loop
          src={json}
          className='h-[400px] w-[350px] lg:h-[600px] lg:w-[600px]'
        >
        </Player>
      </div>
      <div className='flex lg:justify-start items-center'>
        <p className='text-center mx-auto font-bold uppercase text-2xl md:text-5xl'>Dive in to the world of <span className='block text-colour-50 '>READING</span> with us</p>
      </div>
    </div>
  );
};

export default Hero;