import { useLoaderData, useNavigate } from "react-router-dom";
import { Player } from '@lottiefiles/react-lottie-player';
import json from '../../assets/json/Adddbook.json';
import Swal from "sweetalert2";

const Update = () => {
  const Book = useLoaderData();
  console.log(Book);
  const { _id } = Book || {};
  console.log(_id);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const img = e.target.img.value;
    const title = e.target.title.value;
    const author = e.target.author.value;
    const quantity = e.target.quantity.value;
    const category = e.target.category.value;
    const short_description = e.target.des.value;
    const rating = e.target.rating.value;
    const newBook = { title, quantity, category, img, author, rating, short_description }
    console.log(newBook);
    // send data to server
    fetch(`https://library-management-system-server-khaki.vercel.app/books/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newBook)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Book Successfully Updated',
            showConfirmButton: false,
            timer: 1500
          });
          navigate(`/details/${_id}`);
        }
      })

  }


  return (
    <div>
      <div className="h-screen mb-48 lg:h-[600px] flex justify-center items-center">
        <div className='lg:flex hidden -ml-72 lg:justify-start'>
          <Player
            autoplay
            loop
            src={json}
            className='h-[600px] w-[1000px]'
          >
          </Player>
        </div>
        <div className="card lg:-ml-48 flex-shrink-0 w-full max-w-xl shadow-xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="flex flex-col lg:flex-row mb-4 gap-6 mx-auto">
              <div className="form-control">
                <input
                  type="text"
                  name="title"
                  placeholder="Book Title"
                  className="input input-bordered"
                  defaultValue={Book.title}
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="author"
                  placeholder="Author Name"
                  className="input input-bordered"
                  defaultValue={Book.author}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mb-4 gap-6 mx-auto">
              <div className="form-control">
                <select
                  name="category"
                  className="select font-medium text-[16px] pl-4 p-2 rounded-full input-bordered w-full lg:w-[228.8px] pr-16"
                  defaultValue={Book.category}
                >
                  <option value="Fiction">Fiction</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Horror">Horror</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Science Fiction">Science Fiction</option>
                </select>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  className="input input-bordered"
                  defaultValue={Book.quantity}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mb-4 gap-6 mx-auto">
              <div className="form-control">
                <input
                  type="text"
                  name="img"
                  placeholder="Image Url"
                  className="input input-bordered"
                  defaultValue={Book.img}
                />
              </div>
              <div className="form-control ">
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered"
                  defaultValue={Book.rating}
                />
              </div>
            </div>
            <div className="form-control mb-4 px-7 lg:px-4">
              <textarea
                name="des"
                className="textarea input h-40 input-bordered"
                placeholder="Short Description"
                defaultValue={Book.short_description}
              ></textarea>
            </div>
            <div className="form-control">
              <button type="submit" className="btn btn-neutral">
                UPDATE BOOK
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
