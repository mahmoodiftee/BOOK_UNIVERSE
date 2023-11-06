import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Autoplay, FreeMode } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
const Recommendation = () => {
  const [books, setBooks] = useState([]);
  const serverUrl = 'http://localhost:5000/recommendation';
  useEffect(() => {
    axios
      .get(serverUrl)
      .then((response) => {
        const data = response.data;
        setBooks(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(books);

  return (
    <div className="mb-16 lg:mb-20">
      <p className='text-lg lg:text-2xl uppercase text-center mb-8 lg:mb-12'>Recomended Books</p>

      <div className='mx-auto' >
        <div className='hidden lg:block'>
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            centeredSlides={true}
            freeMode={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, FreeMode]}
            className="mySwiper"
          >
            {books.map(book => (
              <SwiperSlide key={book._id} className=''>
                <div className='h-[100px] lg:h-[380px] overflow-hidden'> {/* Set a fixed height (e.g., 48px) and hide overflow */}
                  <img className='h-full w-full object-cover' src={book.img} alt={book.title} />
                </div>
                <div className='pl-1 hidden lg:block'>
                  <h1 className='text-[15px] font-semibold'>{book.title}</h1>
                  <p className='text-[13px]'>Author:&nbsp;{book.author}</p>
                  <p className="flex text-[13px]">Rating:&nbsp;<Rating
                    style={{ maxWidth: 70 }}
                    value={book.rating}
                    readOnly
                  /></p>
                  <Link to={`/${book._id}`}>
                    <button className="btn btn-sm btn-neutral rounded-none my-2">Read</button>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='block lg:hidden'>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            centeredSlides={true}
            freeMode={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, FreeMode]}
            className="mySwiper"
          >
            {books.map(book => (
              <SwiperSlide key={book._id} className=''>
                <div className='h-[170px] lg:h-[350px] overflow-hidden'> {/* Set a fixed height (e.g., 48px) and hide overflow */}
                  <img className='h-full w-full object-cover' src={book.img} alt={book.title} />
                </div>
                <div className='pl-1 mt-2 hidden lg:block'>
                  <h1 className='text-[15px] font-semibold'>{book.title}</h1>
                  <p className='text-[13px]'>Author:&nbsp;{book.author}</p>
                  <p className="flex text-[13px]">Rating:&nbsp;<Rating
                    style={{ maxWidth: 70 }}
                    value={book.rating}
                    readOnly
                  /></p>
                  <Link to={`/${book._id}`}>
                    <button className="btn btn-sm btn-neutral rounded-none my-2">Read</button>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;