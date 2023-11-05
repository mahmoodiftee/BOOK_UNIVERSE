import { Player } from '@lottiefiles/react-lottie-player';
import json from '../../assets/json/banner.json';
const Hero = () => {
  return (
    <div className='flex lg:-mt-8 flex-col justify-center md:flex-row lg:flex-row mt-10'>
      <div className='flex flex-col items-center lg:justify-center'>
        <p className='text-center mx-auto font-bold uppercase text-xl md:text-5xl'>Dive in to the world of <span className='text-colour-50 '>READING</span> with us</p>
        <button className="btn text-[10px] lg:text-sm rounded-3xl btn-sm my-2 lg:my-4 lg:btn-md btn-neutral">LET'S START</button>
      </div>
      <div className='flex justify-center lg:justify-end'>
        <Player
          autoplay
          loop
          src={json}
          className='h-[250px] w-[250px] lg:h-[600px] lg:w-[600px]'
        >
        </Player>
      </div>
    </div>
  );
};

export default Hero;