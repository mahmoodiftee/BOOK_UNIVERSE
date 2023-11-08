import { useEffect, useState } from "react";

const Modal = ({ user, Book, handleBorrow }) => {
  const [borrowedDate, setBorrowedDate] = useState(getFormattedDate());

  useEffect(() => {
    setBorrowedDate(getFormattedDate());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleBorrow(e);
  };

  const handleCloseModal = () => {
    const modal = document.getElementById('my_modal_3');
    modal.close();
  };

  function getFormattedDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }


  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-[615px]">
          <form onSubmit={handleSubmit} method="dialog">
            <button
              type="button"
              onClick={handleCloseModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <div className="">
              <div className="flex flex-col lg:flex-row mb-4 gap-6 mx-auto">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Book Title</span>
                  </label>
                  <input disabled required name="title" type="text" defaultValue={Book.title} placeholder="Book Title" className="input w-[270px] input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <input disabled required name="category" type="text" defaultValue={Book.category} placeholder="Category" className="input w-[270px] input-bordered" />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row mb-4 gap-6 mx-auto">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Borrower Name</span>
                  </label>
                  <input disabled required name="borrower" type="text" defaultValue={user.displayName} placeholder="Borrower Name" className="input w-[270px] input-bordered" />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Borrower Email</span>
                  </label>
                  <input disabled required name="borrowerEmail" type="text" defaultValue={user.email} placeholder="Borrower Email" className="input w-[270px] input-bordered" />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row mb-4 gap-6 mx-auto">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Borrow Date</span>
                  </label>
                  <input
                    required
                    name="bDate"
                    type="date"
                    placeholder="Borrowed Date"
                    value={borrowedDate}
                    onChange={(e) => setBorrowedDate(e.target.value)}
                    className="input w-[270px] input-bordered"
                  />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Return Date</span>
                  </label>
                  <input required name="rDate" type="date" placeholder="Return Date" className="input w-[270px] input-bordered" />
                </div>
              </div>

              <div className="form-control mr-4">
                <button type="submit" className="btn btn-neutral">ADD BOOK</button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;