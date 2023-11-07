import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const BorrowedBooks = () => {

  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/borrowedBooks?email=${email}`)
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


  return (
    <div className="px-10">
      <p className="text-xl lg:text-2xl underline text-center mb-16 font-bold">Your Borrowed Books</p>
      <div>
        {
          Books.map(book => (
            <div key={book._id} className="card card-side bg-base-200 shadow-xl mb-12">
              <figure className=" w-72"><img src={book.img} alt="Movie" /></figure>
              <div className="flex justify-around px-20 w-full items-center">
                <div className="">
                  <h2 className="">{book.title}</h2>
                  <br />
                  <p>Borrower Name:&nbsp;&nbsp;&nbsp;{book.name}</p>
                  <br />
                  <p>Borrower Email:&nbsp;&nbsp;&nbsp;{book.email}</p>
                  <br />
                  <p>Borrowed Date:&nbsp;&nbsp;&nbsp;{book.borrow_date}</p>
                  <br />
                  <p>Return Name:&nbsp;&nbsp;&nbsp;{book.return_date}</p>
                </div>
                <div className="">
                  <button className="btn uppercase btn-neutral">return</button>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default BorrowedBooks;