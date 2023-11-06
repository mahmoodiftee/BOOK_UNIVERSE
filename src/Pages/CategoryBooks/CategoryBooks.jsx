import { Link, useLoaderData, useParams } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';

const CategoryBooks = () => {
  const category = useParams().category;
  const CatetgoryWiseBooks = useLoaderData();
  const filteredBooks = CatetgoryWiseBooks.filter((books) => books.category === category);

  return (
    <div>
      <div></div>

      <div className="my-10 ">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-6 lg:px-[5%]">
          {
            filteredBooks.map(book => (
              <div key={book._id} className=''>
                <img className='h-[65%] lg:h-3/4 w-full object-cover' src={book.img} alt={book.title} />
                <div className='pl-1 mt-2'>
                  <h1 className='text-[14px] lg:text-[16px] font-semibold'>{book.title}</h1>
                  <p className='text-[10px] lg:text-[14px]'>Category:&nbsp;{book.category}</p>
                  <p className='text-[10px] lg:text-[14px]'>Author:&nbsp;{book.author}</p>
                  <span className="flex text-[10px] lg:text-[14px]">Rating:&nbsp;<Rating
                    style={{ maxWidth: 70 }}
                    value={book.rating}
                    readOnly
                  /></span>
                  <Link to={`/update/${book._id}`}>
                    <button className="btn btn-sm btn-neutral rounded-none my-2">Details</button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBooks;