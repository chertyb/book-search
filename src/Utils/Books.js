const baseUrl = 'https://www.googleapis.com/books/v1';
export const maxResults = 10;

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
    thumbnail: book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : '',
  }));
  return formattedBooks;
}

// result.totalItems

function fetchBooks(searchInput, startIndex) {
  return fetch(`${baseUrl}/volumes?q=${searchInput}&maxResults=${maxResults}&startIndex=${startIndex}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong...');
    })
    // .then((result) => console.log(result));
    .then((result) => (result || undefined));
}

export default fetchBooks;
