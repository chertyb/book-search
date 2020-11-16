import React from 'react';
import './Home.css';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Message from '../Components/Message';
import BookDisplay from '../Components/BookDisplay';
import fetchBooks, { maxResults, formatBooksfromAPI } from '../Utils/Books';

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

  searchBooks(isNewSearch) {
    const { currentIndex, books, searchInput } = this.state;
    if (!searchInput) {
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
          this.setState({
            books: [...currentBooks, ...nextBooks],
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
          && <Message message="Loading..." />}
        {error
          && <Message message={error} />}
        <BookDisplay books={books} loadMore={this.searchBooks} totalBooks={totalBooks} />
      </div>
    );
  }
}

export default Home;
