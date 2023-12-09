# Library Management System
- Live Link: https://book-universe-4b8f7.web.app/
#  Technology Used:
[![Technology Used](https://skillicons.dev/icons?i=react,tailwind,nodejs,express,mongodb,firebase,)](https://skillicons.dev)
- More library & pakages that have been used:
Axios, DaisyUi, React Hook Form,  ReactToPDF, Swiper JS, Lottiefiles etc.
# Project Features
Book Universe is a Library Management System with a vast collection of books spanning different categories and authored by famous writers. Users have the option to borrow books by reserving them with a specified return date.

- Private routing is implemented for all pages except the Home Page. To access these protected routes, users are required to log in, and Firebase authentication is employed to facilitate this.

- Firebase authentication is utilized for user registration. After logging in, users' information can be found in the navigation bar.

- On the "All Books" page, users can view a list of all available books. There's a button that allows users to filter and display only the available books or view all books.

- Books from various categories are fetched from MongoDB, and newly added books are stored in the MongoDB database.

- The "Borrowed Books" page displays all the books that users have borrowed by clicking the "Borrow" button on the book detail page, from there the user can return any book by clicking return button.
