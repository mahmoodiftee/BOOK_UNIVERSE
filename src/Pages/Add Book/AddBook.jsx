import { Player } from '@lottiefiles/react-lottie-player';
import json from '../../assets/json/Adddbook.json';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const AddBook = () => {
  const navigate = useNavigate();
  const handleAddBook = (e) => {
    e.preventDefault();
    const title = e.target.querySelector('[placeholder="Book Title"]').value;
    const author = e.target.querySelector('[placeholder="Author Name"]').value;
    const category = e.target.querySelector('[name="category"]').value;
    const quantity = e.target.querySelector('[placeholder="Quantity"]').value;
    const description = e.target.querySelector('[placeholder="Short Description"]').value;
    const rating = e.target.querySelector('[placeholder="Rating"]').value;
    const img = e.target.querySelector('[placeholder="Image Url"]').value;

    const newBook = {
      title,
      author,
      category,
      quantity,
      description,
      rating,
      img,
    };

    fetch('http://localhost:5000/books', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newBook)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Book Successfully Added',
            showConfirmButton: false,
            timer: 1500
          })
          e.target.reset();
          navigate('/');
        }
      })
  };

  return (
    <div className="h-screen  mb-48  lg:h-[600px] flex justify-center items-center">
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
        <form onSubmit={handleAddBook} className="card-body">
          <div className="flex flex-col lg:flex-row mb-4 gap-6 mx-auto">
            <div className="form-control">
              <input type="text" placeholder="Book Title" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <input type="text" placeholder="Author Name" className="input input-bordered" required />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mb-4 gap-6 mx-auto">
            <div className="form-control">
              <select name="category" defaultValue="Category" className="select font-medium p-2 rounded-lg input-bordered w-full lg:w-[228.8px] pr-16">
                <option value="Fiction">Fiction</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
                <option value="Mystery">Mystery</option>
                <option value="Adventure">Adventure</option>
                <option value="Science Fiction">Science Fiction</option>
              </select>
            </div>
            <div className="form-control">
              <input type="text" placeholder="Quantity" className="input input-bordered" required />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mb-4 gap-6 mx-auto">
            <div className="form-control">
              <input type="text" placeholder="Image Url" className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <input type="text" placeholder="Rating" className="input input-bordered" required />
            </div>
          </div>
          <div className="form-control mb-4 px-7 lg:px-4">
            <textarea required className="textarea input h-40 input-bordered" placeholder="Short Description"></textarea>
          </div>
          <div className="form-control">
            <button type="submit" className="btn btn-neutral">ADD BOOK</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;