import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
const AllBooks = () => {
  const [Books, SetBooks] = useState([]);
  const [filterMode, setFilterMode] = useState("all");
  useEffect(() => {
    axios.get('https://library-management-system-server-khaki.vercel.app/books')
      .then((response) => {
        const data = response.data;
        SetBooks(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(Books);

  const handleFilter = () => {
    if (filterMode === "all") {
      const availableBooks = Books.filter((book) => book.quantity > 0);
      SetBooks(availableBooks);
      setFilterMode("available");
    } else {
      axios.get('https://library-management-system-server-khaki.vercel.app/books')
        .then((response) => {
          const data = response.data;
          SetBooks(data);
        })
        .catch((error) => {
          console.error(error);
        });
      setFilterMode("all");
    }
  };

  return (
    <div className="mb-10 mt-6">
      <div className="lg:px-[3%] mb-8 flex items-center justify-between">
        <p className="text-xl text-colour-50">TOTAL BOOKS: {Books.length}</p>
        <button className="btn" onClick={handleFilter}>
          {filterMode === "all" ? "Show Available" : "Show All"}
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-6 lg:px-[3%]">
        {
          Books.map(book => (
            <div key={book._id} className='relative'>
              <div className='relative h-[250px] lg:h-[487px]'>
                <img className='h-full w-full object-cover' src={book.img} alt={book.title} />
                <div className="h-full w-full bg-gradient-to-t from-black from-10% via-to-transparent via-30% to-transparent to-90%  object-cover absolute top-0"></div>
              </div>
              <div className='absolute  top-[52%] lg:top-[78%] px-2 mt-2 flex flex-col lg:flex-row justify-between w-full'>
                <div>
                  <h1 className='text-[12px] lg:text-[16px] font-bold text-white'>{book.title}</h1>
                  <p className='text-[10px] lg:text-[14px] text-white'>Category:&nbsp;{book.category}</p>
                  <p className='text-[10px] lg:text-[14px] text-white'>Author:&nbsp;{book.author}</p>
                  <span className="flex text-[10px] lg:text-[14px] text-white">Rating:&nbsp;<Rating
                    style={{ maxWidth: 70 }}
                    value={book.rating}
                    readOnly
                  /></span>
                </div>
                <div className="flex flex--row lg:flex-col items-center gap-2 lg:gap-0 lg:justify-end mb-4">
                  <Link to={`/update/${book._id}`}>
                    <button className="btn btn-xs lg:btn-sm btn-neutral rounded-none  lg:my-2">Update</button>
                  </Link>
                  <Link to={`/details/${book._id}`}>
                    <button className="btn btn-xs lg:btn-sm btn-neutral rounded-none lg:my-2">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllBooks;