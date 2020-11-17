const baseUrl = 'https://www.googleapis.com/books/v1';
export const maxResults = 40;

export function formatBooksfromAPI(books) {
  if (!books) {
    return [];
  }
  const errorMsg = 'Not available';
  const formattedBooks = books.map((book) => ({
    id: book.id,
    title: book.volumeInfo.title ? book.volumeInfo.title : errorMsg,
    authors: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : errorMsg,
    categories: book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : errorMsg,
    description: book.volumeInfo.description ? book.volumeInfo.description : errorMsg,
    thumbnail: book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : '',
  }));
  return formattedBooks;
}

async function fetchBooks(searchInput, startIndex) {
  try {
    const response = await fetch(`${baseUrl}/volumes?q=${searchInput}&maxResults=${maxResults}&startIndex=${startIndex}`);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error('Something went wrong...');
  }
}

export function removeDuplicates(books) {
  return [...new Map(books.map((book) => [book.id, book])).values()];
}

export default fetchBooks;
