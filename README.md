# Personal-Library-Manager
Personal Library Manager
Objective:
Create a series of functions to manage a personal library. Your library will be
represented as an array of book objects, each with title, author, and readStatus
properties (indicating whether or not the book has been read).
Begin with an empty array to hold your library books:
let library = [];
Tasks:
1. Add New Books to Library
Goal: Write a function addBook(title, author) to add new books to the library.
Each book should default to readStatus being false.
Hint: Look into the push method to add a new book object to your library array.
2. Mark a Book as Read
Goal: Create a function markAsRead(title) to update a book’s readStatus to true
by its title.
Hint: Use findIndex to locate the book, then change its readStatus.
3. Remove a Book
Goal: Implement removeBook(title) to remove a book by title.
Hint: First, find the book’s index. Then, consider how splice can be used to
remove an item from an array.
4. List All Unread Books
Goal: Design listUnread() to display titles of all unread books.
Hint: Combine filter to select unread books with map to create an array of their
titles.
5. Find Books by Author
Goal: Code findBooksByAuthor(author) to find all books by a given author.
Hint: filter can help you select books that have a matching author property.
6. Check if the Library Includes a Book by Title
Goal: Develop bookExists(title) to check if a book exists in the library by title.
Hint: Explore how some or includes can be used to verify the presence of a book
