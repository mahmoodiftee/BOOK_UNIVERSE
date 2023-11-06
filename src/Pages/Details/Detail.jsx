import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Link, useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import { LiaPeopleCarrySolid } from 'react-icons/lia';
import { GiRead } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Detail = () => {
  const [SuggestedBook, setSuggestedBook] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/books')
      .then((response) => {
        const data = response.data;
        const filteredBooks = data.filter((books) => books.category === Book.category);

        setSuggestedBook(filteredBooks);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const Book = useLoaderData();
  return (
    <div>
      <div className="hero mb-10 mt-10">
        <div className="hero-content flex-col lg:gap-20 lg:flex-row">
          <div className="max-w-md lg:h-[550px] flex-shrink-0">
            <img src={Book.img} className="w-full h-full object-cover" />
          </div>
          <div className="flex-grow gap-4">
            <p className="text-4xl mb-4 text-colour-50 font-bold">{Book.title}</p>
            <p className="text-lg font-semibold">Author:&nbsp;{Book.author}</p>
            <p className="text-lg font-semibold">Category:&nbsp;{Book.category}</p>
            <span className="flex text-lg font-semibold">Rating:&nbsp;<Rating
              style={{ maxWidth: 90 }}
              value={Book.rating}
              readOnly
            /></span>
            <p className="text-lg max-w-[650px] font-semibold mb-4">Details:&nbsp;{Book.short_description}</p>

            <div className="flex flex-col md:flex-row justify-start gap-4">
              <button
                onClick={() => handleAddBook(_id)}
                className="btn rounded-none btn-neutral lg:btn-wide flex justify-center items-center gap-2">
                <LiaPeopleCarrySolid className="h-6 w-6"></LiaPeopleCarrySolid>
                Borrow
              </button>

              <button
                onClick={() => handleDelete(_id)}
                className="btn rounded-none btn-neutral lg:btn-wide flex justify-center items-center gap-2">
                <GiRead className="h-6 w-6"></GiRead>
                Read
              </button>
            </div>

          </div>
        </div>
      </div>
      <div className='mb-16'>
        <p className="text-sm text-center font-medium">Category:{Book.category}</p>
        <p className="text-xl lg:text-2xl text-center mb-16 font-bold">You may also like</p>

        <div>
          <div className='hidden lg:block'>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              centeredSlides={true}
              freeMode={true}
              modules={[Autoplay, FreeMode]}
              className="mySwiper"
            >
              {SuggestedBook.map(RecommendedBook => (
                <SwiperSlide key={RecommendedBook._id} className='btnn'>
                  <Link to={`/details/${RecommendedBook._id}`}>
                    <div className='h-[560px] overflow-hidden'>
                      <img className='h-full w-full object-cover' src={RecommendedBook.img} alt={RecommendedBook.title} />
                    </div>
                  </Link>
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
              modules={[Autoplay, FreeMode]}
              className="mySwiper"
            >
              {SuggestedBook.map(RecommendedBook => (
                <SwiperSlide key={RecommendedBook._id} className=''>
                  <Link to={`/details/${RecommendedBook._id}`}>
                    <div className='h-[160px] lg:h-[380px] overflow-hidden'>
                      <img className='h-full w-full object-cover' src={RecommendedBook.img} alt={RecommendedBook.title} />
                      <div className='pl-1 mt-2'>
                        <h1 className='text-[15px] font-semibold'>{RecommendedBook.title}</h1>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Detail;