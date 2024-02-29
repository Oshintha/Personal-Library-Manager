// Define Library array
let library = [];

// Create a function to add books 
function addBook(title, author){
    library.push ({title, author,readStatus:false})
}

// Call addBook function to add books
addBook("To Kill a Mockingbird", "Harper Lee");
addBook("1984", "George Orwell");
addBook("Pride and Prejudice", "Jane Austen");
addBook("The Great Gatsby", "F. Scott Fitzgerald");
addBook("The Catcher in the Rye", "J.D. Salinger");
addBook("The Lord of the Rings", "J.R.R. Tolkien");
addBook("Jane Eyre", "Charlotte Brontë");
addBook("Moby-Dick", "Herman Melville");
addBook("War and Peace", "Leo Tolstoy");
addBook("The Chronicles of Narnia", "C.S. Lewis");

// Create a function to markAsRead
function markAsRead(title){
    let index = library.findIndex(book => book.title === title)
   
    // If find the book by title, chage readStatus to true
    if (index !== -1) {
        library[index].readStatus = true;
        console.log("Marked the '" + title + "' as read.");
    } 
    else {
        console.log("Given book is not found.");
    }
}

// Call markAsRead function to change readstatus of a book
markAsRead("1984");

//Create a function to remove a book from the library
function removeBook(title) {
    let index = library.findIndex(book => book.title === title);
    
// If the book is found, remove it
if (index !== -1) {
   library.splice(index, 1);
   console.log("Removed the '" + title + "' book");
} 
else {
  console.log("Given book is not found.");
}
}

// Call removeBook function to remove a book
removeBook("War and Peace");

// create a function to list unread books
function listUnread() {
    const listUnread = library.filter((book) => !book.readStatus);
    let mapunreadlist = listUnread.map ((listUnread) => {return listUnread})
    console.log("Unread Books:", mapunreadlist);
}

// Call listUnread function
listUnread();

// Create a function to find all books by a given author
function findBooksByAuthor(author) {
    const BooksByAuthor = library.filter((book) => book.author === author);
    if (BooksByAuthor.length !== 0) {
        console.log(`Books by ${author}:`, BooksByAuthor); 
    } 
    else {
        console.log("Given author is not found.");
    }
}

// Call findBooksByAuthor function
findBooksByAuthor("Herman Melville");

// Create a function to check book availability
function bookExists(title) {
    let bookAvailable = library.some(book => book.title === title);
    if (bookAvailable == true) {
        console.log(`Book '${title}' is exists in the library:`);
    }
    else {
        console.log(`Book '${title}' is not exists in the library:`);
    }
}

// Call bookExists function
bookExists("The Lord of the Rings");
bookExists("War and Peace");