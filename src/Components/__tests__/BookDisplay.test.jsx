import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from '../../enzyme';
import Book from '../Book';
import BookDisplay from '../BookDisplay';
import { defaultBookShape } from '../../Shape/BookShape';

describe('BookDisplay component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<BookDisplay />, div);
    expect(div).toMatchSnapshot();
    ReactDom.unmountComponentAtNode(div);
  });

  it('should display books', () => {
    const books = [defaultBookShape, defaultBookShape, defaultBookShape];
    const wrapper = shallow(<BookDisplay books={books} totalBooks={books.length} />);
    expect(wrapper.find(Book).length).toEqual(books.length);
  });

  it('should load more books when reaching display bottom', () => {
    const loadMore = jest.fn();
    const books = [defaultBookShape, defaultBookShape, defaultBookShape];
    const wrapper = shallow(<BookDisplay
      books={books}
      totalBooks={books.length * 2}
      loadMore={loadMore}
    />);
    const mockEvent = { target: { scrollTop: 100, scrollHeight: 500, clientHeight: 400 } };
    wrapper.find('div').simulate('scroll', mockEvent);
    expect(loadMore).toHaveBeenCalled();
  });
  it('should not load more books when reaching total books', () => {
    const loadMore = jest.fn();
    const books = [defaultBookShape, defaultBookShape, defaultBookShape];
    const wrapper = shallow(<BookDisplay
      books={books}
      totalBooks={books.length}
      loadMore={loadMore}
    />);
    const mockEvent = { target: { scrollTop: 500, scrollHeight: 500, clientHeight: 400 } };
    wrapper.find('div').simulate('scroll', mockEvent);
    expect(loadMore).not.toHaveBeenCalled();
  });
});
