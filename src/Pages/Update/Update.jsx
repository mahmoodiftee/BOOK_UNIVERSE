import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { Player } from '@lottiefiles/react-lottie-player';
import json from '../../assets/json/Adddbook.json';
import axios from 'axios';
import Swal from "sweetalert2";
const Update = () => {
  const Book = useLoaderData();
  console.log(Book);
  const { _id } = Book || {};
  console.log(_id);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.put(`http://localhost:5000/books/${_id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        const responseData = response.data;
        console.log(responseData);
        if (responseData.modifiedCount > 0) {
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
      .catch((error) => {
        console.error(error);
      });
  };
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
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="flex flex-col lg:flex-row mb-4 gap-6 mx-auto">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Book Title"
                  className="input input-bordered"
                  {...register("title", { required: true, maxLength: 80 })}
                  defaultValue={Book.title} // Set the default value from your data
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Author Name"
                  className="input input-bordered"
                  {...register("author", { required: true, maxLength: 80 })}
                  defaultValue={Book.author} // Set the default value from your data
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mb-4 gap-6 mx-auto">
              <div className="form-control">
                <select
                  {...register("category", { required: true })}
                  className="select font-medium p-2 rounded-lg input-bordered w-full lg:w-[228.8px] pr-16"
                  defaultValue={Book.category} // Set the default value from your data
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
                  placeholder="Quantity"
                  className="input input-bordered"
                  {...register("quantity", { required: true, maxLength: 80 })}
                  defaultValue={Book.quantity} // Set the default value from your data
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mb-4 gap-6 mx-auto">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Image Url"
                  className="input input-bordered"
                  {...register("img", { required: true, maxLength: 1000 })}
                  defaultValue={Book.img} // Set the default value from your data
                />
              </div>
              <div className="form-control ">
                <input
                  type="text"
                  placeholder="Rating"
                  className="input input-bordered"
                  {...register("rating", { required: true, maxLength: 80 })}
                  defaultValue={Book.rating} // Set the default value from your data
                />
              </div>
            </div>
            <div className="form-control mb-4 px-7 lg:px-4">
              <textarea
                {...register("short_description", { required: true, maxLength: 80 })}
                className="textarea input h-40 input-bordered"
                placeholder="Short Description"
                defaultValue={Book.short_description} // Set the default value from your data
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
