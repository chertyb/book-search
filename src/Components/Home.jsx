import React from 'react';
import Input from './Input';
import Button from './Button';
import Message from './Message';
import BookDisplay from './BookDisplay';
import fetchBooks, { maxResults, removeDuplicates, formatBooksfromAPI } from '../Utils/Books';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      books: [],
      isLoading: false,
      error: null,
      currentIndex: 0,
      totalBooks: 0,
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.searchBooks = this.searchBooks.bind(this);
  }

  async searchBooks(isNewSearch) {
    const { currentIndex, books, searchInput } = this.state;
    if (searchInput === '') {
      this.setState({ error: 'Please enter a query', books: [] });
    } else {
      this.setState({ isLoading: true, error: null });
      // if new search, empty display so index 0 and empty books
      const newIndex = isNewSearch ? 0 : currentIndex;
      const currentBooks = newIndex ? books : [];

      fetchBooks(searchInput, currentIndex)
        .then((result) => {
          const totalBooks = result.totalItems ? result.totalItems : 0;
          const nextBooks = result.items ? formatBooksfromAPI(result.items) : [];
          // Google Book API does not always return same list with same request
          // so we remove duplicates
          const filteredBooks = removeDuplicates([...currentBooks, ...nextBooks]);
          this.setState({
            books: filteredBooks,
            isLoading: false,
            currentIndex: currentIndex + maxResults,
            totalBooks,
          });
        })
        .catch((error) => this.setState({ error: error.toString(), isLoading: false }));
    }
  }

  handleSearchInput(e) {
    this.setState({ searchInput: e.target.value });
  }

  handleSearchButton() {
    this.searchBooks(true);
  }

  render() {
    const {
      searchInput, isLoading, error, books, totalBooks,
    } = this.state;
    return (
      <div>
        <h1>Book Search App</h1>
        <Input value={searchInput} handleInputChange={this.handleSearchInput} />
        <Button text="Search" handleClick={this.handleSearchButton} />
        {isLoading
          && <Message message="Loading..." type="loading" />}
        {error
          && <Message message={error} type="error" />}
        <BookDisplay books={books} loadMore={this.searchBooks} totalBooks={totalBooks} />
      </div>
    );
  }
}

export default Home;
