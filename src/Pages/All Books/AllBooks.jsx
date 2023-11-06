import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const [Books, SetBooks] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/books')
      .then((response) => {
        const data = response.data;
        SetBooks(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(Books);
  return (
    <div className="my-10 ">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-6 lg:px-[5%]">
        {
          Books.map(book => (
            <div key={book._id} className=''>
              <img className='h-[65%] lg:h-3/4 w-full object-cover' src={book.img} alt={book.title} />
              <div className='pl-1 mt-2'>
                <h1 className='text-[14px] lg:text-[16px] font-semibold'>{book.title}</h1>
                <p className='text-[10px] lg:text-[14px]'>Category:&nbsp;{book.category}</p>
                <p className='text-[10px] lg:text-[14px]'>Author:&nbsp;{book.author}</p>
                <p className='text-[10px] lg:text-[14px]'>Rating:&nbsp;{book.rating}</p>
                <Link to={`/${book._id}`}>
                  <button className="btn btn-sm btn-neutral rounded-none my-2">Update</button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllBooks;