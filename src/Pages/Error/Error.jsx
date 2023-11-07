import { Player } from '@lottiefiles/react-lottie-player';
import json from '../../assets/json/error.json';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <Player
          autoplay
          loop
          src={json}
          className='h-[350px] w-[350px] lg:h-[800px] lg:w-[800px]'
        >
        </Player>
        <Link className="btn rounded-3xl flex justify-center btn-sm my-2 lg:my-4 lg:btn-md btn-neutral normal-case" to={'/'}>Go Back</Link>
      </div>
    </div>
  );
};

export default Error;