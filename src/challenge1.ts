// Define the Book type
type Book = {
  title: string;
  author: string;
  year: number;
};

// Book collection
const books: Book[] = [];

// Add a new book
function addBook(title: string, author: string, year: number): void {
  const newBook: Book = { title, author, year };
  books.push(newBook);

  console.log(`Book added: "${title}" by ${author} (${year})`);
}

// List all books
function listBooks(): void {
  console.log("All Books:");
  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

// Search for a book by title (optional, partial, case-sensitive)
function searchBook(title?: string): void {
  if (!title) {
    console.log("Please provide a title to search.");
    return;
  }

  const results = books.filter((book) =>
    book.title.includes(title)
  );

  console.log(`Search Results for "${title}":`);

  if (results.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }

  results.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

// ❗❗❗ INI HARUS BARIS TERAKHIR FILE
export { addBook, listBooks, searchBook };
