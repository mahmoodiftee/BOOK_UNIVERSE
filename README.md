# Library Management System
- Live Link: https://book-universe-4b8f7.web.app/
#  Library and feature Used:
ReactToPDF, Swiper JS, Axios interceptors for handling network requests.
# Project Features
# 1
Book Universe is a Library Management System with a vast collection of books spanning different categories and authored by famous writers. Users have the option to borrow books by reserving them with a specified return date.

# 2
Private routing is implemented for all pages except the Home Page. To access these protected routes, users are required to log in, and Firebase authentication is employed to facilitate this.

# 3
Firebase authentication is utilized for user registration. After logging in, users' information can be found in the navigation bar.

# 4
On the "All Books" page, users can view a list of all available books. There's a button that allows users to filter and display only the available books or view all books.

# 5
Books from various categories are fetched from MongoDB, and newly added books are stored in the MongoDB database.

# 6
The "Borrowed Books" page displays all the books that users have borrowed by clicking the "Borrow" button on the book detail page, from there the user can return any book by clicking return button.