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
});
