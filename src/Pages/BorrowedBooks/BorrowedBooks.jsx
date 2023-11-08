import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const BorrowedBooks = () => {

  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    if (email) {
      fetch(`https://library-management-system-server-khaki.vercel.app/borrowedBooks?email=${email}`)
        .then((response) => response.json())
        .then((data) => {
          const filteredData = data.filter((item) => item.email === email);
          setBooks(filteredData);
        })
        .catch((error) => {
          console.error('Error fetching user products:', error);
        });
    }
  }, [email]);

  const handleReturn = (book, id) => {
    console.log(book.id);
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, return it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.get(`https://library-management-system-server-khaki.vercel.app/books/${book.id}`)
          .then((response) => {
            const bookData = response.data;
            const updatedQuantity = bookData.quantity + 1;
            axios
              .patch(`https://library-management-system-server-khaki.vercel.app/books/${book.id}`, {
                quantity: updatedQuantity,
              })
              .then(() => {
                fetch(`https://library-management-system-server-khaki.vercel.app/borrowedBooks/${book._id}`, {
                  method: 'DELETE'
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.deletedCount > 0) {
                      Swal.fire('Returned!', 'Book successfully returned.', 'success');
                      const remainingUsers = Books.filter((book) => book._id !== id);
                      setBooks(remainingUsers);
                    }
                  })
                  .catch((error) => {
                    console.error('Error deleting the book:', error);
                  });
              })
              .catch((error) => {
                console.error('Error updating book quantity:', error);
              });
          })
          .catch((error) => {
            console.error('Error fetching book for quantity update:', error);
          });
      }
    });
  };

  return (
    <div className="lg:px-10 mt-10 mb-40">
      <p className="text-xl lg:text-2xl underline text-center mb-16 font-bold">Your Borrowed Books</p>
      <div>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                </th>
                <th className="font-bold text-sm ">Book</th>
                <th className="font-bold text-sm">Category</th>
                <th className="font-bold text-sm">Borrowed Date</th>
                <th className="font-bold text-sm">Returned Date</th>
                <th className="font-bold text-sm">Borrower Name & Email</th>
                <th className="font-bold text-sm"></th>
              </tr>
            </thead>
            {Books.map(book => (
              <tbody key={book._id}>
                <tr>
                  <th>
                    <Link to={`/details/${book.id}`} className="">
                      <div className="h-20 lg:h-32">
                        <img className="h-full rounded-lg w-full lg:w-[65%] object-cover" src={book.img} />
                      </div>
                    </Link>
                  </th>
                  <td className="">
                    <div className="font-bold hidden lg:block">
                      {book.title}
                    </div>
                    <div className="block lg:hidden">
                      <div className="font-bold pt-5">{book.title}</div>
                      <div className="text-sm opacity-0">{book.email}</div>
                    </div>
                  </td>
                  <td className="font-bold">{book.category}</td>
                  <td className="font-bold">{book.borrow_date}</td>
                  <td className="font-bold">{book.return_date}</td>
                  <td>
                    <div>
                      <div className="font-bold">{book.name}</div>
                      <div className="text-sm opacity-50">{book.email}</div>
                    </div>
                  </td>
                  <th>
                    <button onClick={() => handleReturn(book, book._id)} className="btn btn-neutral btn-sm">Return</button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>

        </div>
      </div>
    </div>
  );
};

export default BorrowedBooks;