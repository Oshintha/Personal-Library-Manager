// Task 1: Define library array
let library = [];

// Task 1: Use push function to add new books to library
library.push( 
    { title: "To Kill a Mockingbird", author: "Harper Lee", readStatus: false },
    { title: "1984", author: "George Orwell", readStatus: false },
    { title: "Pride and Prejudice", author: "Jane Austen", readStatus: false },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", readStatus: false },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", readStatus: false },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", readStatus: false },
    { title: "Jane Eyre", author: "Charlotte Brontë", readStatus: false },
    { title: "Moby-Dick", author: "Herman Melville", readStatus: false },
    { title: "War and Peace", author: "Leo Tolstoy", readStatus: false },
    { title: "The Chronicles of Narnia", author: "C.S. Lewis", readStatus: false }
);

// Task 2: Find the index of the book titled "The Lord of the Rings"
let indexLordOfTheRings = library.findIndex(book => book.title === "The Lord of the Rings");
console.log("Index of 'The Lord of the Rings':", indexLordOfTheRings);

// Task 2: If the book is found, mark it as read
if (indexLordOfTheRings !== -1) {
    library[indexLordOfTheRings].readStatus = true;
    console.log("Marked 'The Lord of the Rings' as read.");
} else {
    console.log("Book 'The Lord of the Rings' not found.");
}

// Task 3: Find the index of the book titled "1984"
let index1984 = library.findIndex(book => book.title === "1984");

// Task 3: If the book is found, remove it
if (index1984 !== -1) {
    library.splice(index1984, 1);
    console.log("Removed '1984' from the library.");
} else {
    console.log("Book '1984' not found.");
}

// Task 4: Filter to select unread books
const listUnread = library.filter((book) => !book.readStatus);
console.log("Unread Books:", listUnread);

// Task 5: Filter to select all books by author
let bookAuthor = "Leo Tolstoy";
const findBooksByAuthor = library.filter((book) => book.author === bookAuthor);
console.log(`Books by ${bookAuthor}:`, findBooksByAuthor);

// Task 6: Check the availability of a book by title
let bookTitle = "Jane Eyre";
let bookExists = library.some(book => book.title === bookTitle);
console.log(`Book '${bookTitle}' exists in the library:`, bookExists);
