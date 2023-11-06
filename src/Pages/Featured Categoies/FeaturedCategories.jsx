import { useEffect, useState } from "react";
import { HiArrowSmRight } from 'react-icons/hi';
import { Link } from "react-router-dom";
const FeaturedCategories = () => {

  const [categories, setCategory] = useState([]);

  useEffect(() => {
    fetch('Categories.json')
      .then(res => res.json())
      .then(data => setCategory(data))
  }, []);

  return (
    <div className="mb-12 lg:-mt-16">
      <p className='text-lg lg:text-2xl uppercase text-center mb-12'>Featured Categories</p>
      <div className="grid lg:max-w-screen-xl mx-auto grid-cols-2 lg:grid-cols-4 items-center gap-4 lg:gap-16">
        {categories.map(category => (
          <div key={category.id} className="lg:w-72 mx-auto bg-base-200 p-2 rounded-lg shadow-xl">
            <div className="">
              <img className='rounded-lg' src={category.img} alt="Shoes" />
              <h2 className="text-lg my-2 font-bold text-center">{category.category}</h2>
            </div>
          </div>
        ))}
      </div>
      <Link to={'/categories'} className="mt-1 text-colour-50 hover:text-colour-60 flex justify-end items-center mr-10">See More <HiArrowSmRight></HiArrowSmRight></Link>
    </div>
  );
};

export default FeaturedCategories;