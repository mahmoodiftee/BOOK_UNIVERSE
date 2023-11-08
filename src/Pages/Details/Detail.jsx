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
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Detail = () => {
  const Book = useLoaderData();
  const { user } = useContext(AuthContext);
  const [SuggestedBook, setSuggestedBook] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  useEffect(() => {
    axios.get('https://library-management-system-server-khaki.vercel.app/books')
      .then((response) => {
        const data = response.data;
        const filteredBooks = data.filter((books) => books.category === Book.category);

        setSuggestedBook(filteredBooks);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (user) {
      axios.get(`https://library-management-system-server-khaki.vercel.app/borrowedBooks?email=${user.email}`)
        .then((response) => {
          const data = response.data;
          setBorrowedBooks(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  const handleBorrow = (e) => {
    e.preventDefault();
    if (Book.quantity <= 0) {
      return;
    }

    const hasBorrowed = borrowedBooks.some((borrowedBook) => borrowedBook.title === Book.title);

    if (hasBorrowed) {
      const modal = document.getElementById('my_modal_3');
      modal.close();
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'You have already borrowed this book.',
      });
    } else {
      const title = e.target.title.value;
      const category = e.target.category.value;
      const borrower = e.target.borrower.value;
      const borrowerEmail = e.target.borrowerEmail.value;
      const BorrowDate = e.target.bDate.value;
      const ReturnDate = e.target.rDate.value;
      console.log(title, category, borrower, borrowerEmail, BorrowDate, ReturnDate);
      const borrowInfo = {
        id: Book?._id || '',
        title: title,
        img: Book?.img || '',
        category: Book?.category || '',
        name: user?.displayName || '',
        email: user?.email || '',
        borrow_date: BorrowDate || '',
        return_date: ReturnDate || '',
      }

      axios.post('https://library-management-system-server-khaki.vercel.app/borrowedBooks', borrowInfo, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.data.insertedId) {
            const updatedQuantity = Book.quantity - 1;
            axios
              .patch(`https://library-management-system-server-khaki.vercel.app/books/${Book._id}`, {
                quantity: updatedQuantity,
              })
              .then((updateResponse) => {
                if (updateResponse.status === 200) {
                  setBorrowedBooks([...borrowedBooks, borrowInfo]);
                  Book.quantity = updatedQuantity;

                  Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Successfully Borrowed',
                    showConfirmButton: false,
                    timer: 1500,
                  });

                  const modal = document.getElementById('my_modal_3');
                  modal.close();
                  e.target.reset();
                }
              })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Failed to borrow the book. Please try again.',
            });
          }
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'An error occurred. Please try again later.',
          });
        });
    }
  }


  return (
    <div>
      <div className="hero mb-10 mt-10">
        <div className="hero-content flex-col lg:gap-20 lg:flex-row">
          <div className="max-w-md lg:h-[550px] flex-shrink-0">
            <img src={Book.img} className="w-full h-full object-cover" />
          </div>
          <div className="flex-grow gap-4">
            <p className="text-xl lg:text-4xl mb-2 lg:mb-4 text-colour-50 font-bold">{Book.title}</p>
            <p className="text-lg font-semibold">Author:&nbsp;{Book.author}</p>
            <p className="text-lg font-semibold">Category:&nbsp;{Book.category}</p>
            <span className="flex text-lg font-semibold">Rating:&nbsp;<Rating
              style={{ maxWidth: 90 }}
              value={Book.rating}
              readOnly
            /></span>
            <p className="text-lg max-w-[650px] font-semibold">Quantity:&nbsp;{Book.quantity}</p>
            <p className="text-lg max-w-[650px] font-semibold mb-4">Details:&nbsp;{Book.short_description}</p>

            <div className="flex flex-col md:flex-row justify-start gap-4">
              <button
                onClick={() => {
                  if (Book.quantity > 0) {
                    document.getElementById('my_modal_3').showModal();
                  }
                }}
                className={`btn rounded-none btn-neutral lg:btn-wide flex justify-center items-center gap-2 ${Book.quantity <= 0 ? 'btn-disabled' : ''
                  }`}
                disabled={Book.quantity <= 0}
              >
                <LiaPeopleCarrySolid className="h-6 w-6"></LiaPeopleCarrySolid>
                Borrow
              </button>
              {user && <Modal handleBorrow={handleBorrow} Book={Book} user={user}></Modal>}
              <Link
                onClick={() => handleRead(Book._id)}
                className="btn rounded-none btn-neutral lg:btn-wide flex justify-center items-center gap-2">
                <GiRead className="h-6 w-6"></GiRead>
                Read
              </Link>
            </div>

          </div>
        </div>
      </div>
      <div className='mb-16'>
        <p className="text-sm text-center font-medium">Category:{Book.category}</p>
        <p className="text-xl lg:text-2xl text-center mb-8 lg:mb-16 font-bold">You may also like</p>

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
