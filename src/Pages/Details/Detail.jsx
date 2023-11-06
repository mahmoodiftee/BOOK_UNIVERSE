import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import { LiaPeopleCarrySolid } from 'react-icons/lia';
import { GiRead } from 'react-icons/gi';

const Detail = () => {
  const Book = useLoaderData();
  return (
    <div className="hero mb-10 mt-10 lg:-mt-6 min-h-screen">
      <div className="hero-content flex-col lg:gap-20 lg:flex-row">
        <div className="max-w-md  lg:h-[550px] flex-shrink-0">
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
  );
};

export default Detail;