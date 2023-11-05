import { Player } from '@lottiefiles/react-lottie-player';
import json from '../../assets/json/about.json';
const About = () => {
  return (
    <div className='flex  border flex-col-reverse justify-center md:flex-row-reverse lg:flex-row'>
      <div className='flex flex-1 lg:justify-end'>
        <Player
          autoplay
          loop
          src={json}
          className='h-[400px] w-[350px] lg:h-[600px] lg:w-[600px]'
        >
        </Player>
      </div>
      <div className='flex flex-1  items-center'>
        <div className=''>
          <p className='text-xl font-light mb-4'>About Us</p>
          <p className='text-left mb-4 mx-auto font-bold uppercase text-2xl md:text-5xl'><span className='text-colour-50 '>Book Universe </span>Is Best Choice For Readers</p>
          <p className='pr-10 mb-4'>Welcome to 'Book Universe', your go-to destination for all things related to books, reading, and literary exploration. We are passionate about the written word and are dedicated to fostering a community of avid readers, book enthusiasts, and lifelong learners.</p>
          <button className="btn rounded-3xl btn-sm my-2 lg:my-4 lg:btn-md btn-neutral normal-case">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;