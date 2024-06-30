Book Store Application
This is a React-based web application for managing a bookstore. The application allows you to add, view, edit, and delete books, as well as manage clients and view a dashboard with statistics.
Table of Contents
•	Features
•	Setup
•	Usage
•	Project Structure
•	Components
•	Contributing
•	License
Features
•	Add Book: Add new books with title, author, and image URL.
•	View Books: View a list of all books.
•	Edit Book: Edit details of an existing book.
•	Delete Book: Delete a book from the list.
•	Add Client: Register new clients.
•	Dashboard: View total counts of books, clients, and admins.
Setup
Prerequisites
•	Node.js
•	npm (Node Package Manager)
Installation
1.	Clone the repository:
bash
Copy code
git clone https://github.com/sdfpt05/phase-4-group-project.
2.	Navigate to the project directory:
bash
Copy code
cd bookstore-app
3.	Install dependencies:
bash
Copy code
npm install
4.	Start the development server:
bash
Copy code
npm start
Usage
Running the Application
To run the application in development mode, use:
bash
Copy code
npm start
This will start the app on http://localhost:3000.
Adding a Book
1.	Navigate to the "Add Book" page.
2.	Fill in the book details and submit the form.
Viewing Books
•	Navigate to the "Books" page to view all the books in the store.
Editing a Book
•	Click on the "Edit" button on a book card to edit its details.
Deleting a Book
•	Click on the "Delete" button on a book card to remove it from the list.
Project Structure
plaintext
Copy code
src/
|-- components/
|   |-- AddBook.js
|   |-- AddClient.js
|   |-- BookCard.js
|   |-- Books.js
|   |-- Dashboard.js
|   |-- DeleteBook.js
|   |-- EditBook.js
|   |-- Home.js
|   |-- Login.js
|   |-- Navbar.js
|   |-- Signup.js    
|-- css/
|   |-- AddBook.css
|   |-- AddClient.css      
|   |-- Book.css
|   |-- Dashboard.css
|   |-- Home.css
|   |-- Login.css
|   |-- Navbar.css
|   |-- Signup.css
|-- App.js
|-- index.js
Components
•	AddBook: Form to add new books.
•	AddClient: Form to register new clients.
•	BookCard: Displays individual book details.
•	Books: Fetches and displays a list of books.
•	Dashboard: Displays counts of books, clients, and admins.
•	DeleteBook: Deletes a specific book.
•	EditBook: Form to edit existing book details.
•	Home: Homepage of the application.
•	Login: Login form for users.
•	Navbar: Navigation bar for the application.
•	Signup: Signup form for new users.
Contributing
Contributions are welcome! 
License
This project is licensed under the MIT License.

