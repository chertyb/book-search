import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from '../../enzyme';
import Book from '../Book';
import { defaultBookShape } from '../../Shape/BookShape';

describe('Book component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Book />, div);
    expect(div).toMatchSnapshot();
    ReactDom.unmountComponentAtNode(div);
  });

  it('should display default props value', () => {
    const wrapper = shallow(<Book />);
    expect(wrapper.find('p[title="Title"]').text()).toEqual(`Title: ${defaultBookShape.id}`);
    expect(wrapper.find('p[title="Authors"]').text()).toEqual(`Authors: ${defaultBookShape.authors}`);
    expect(wrapper.find('p[title="Categories"]').text()).toEqual(`Categories: ${defaultBookShape.categories}`);
    expect(wrapper.find('p[title="Description"]').text()).toEqual(`Description: ${defaultBookShape.description}`);
    expect(wrapper.find('img').prop('src')).toEqual(defaultBookShape.id);
  });

  it('should display custom props value', () => {
    const book = {
      id: 'id',
      title: 'title',
      authors: 'authors',
      categories: 'categories',
      description: 'description',
      thumbnail: 'thumbnail',
    };
    const wrapper = shallow(<Book data={book} />);
    expect(wrapper.find('p[title="Title"]').text()).toEqual(`Title: ${book.title}`);
    expect(wrapper.find('p[title="Authors"]').text()).toEqual(`Authors: ${book.authors}`);
    expect(wrapper.find('p[title="Categories"]').text()).toEqual(`Categories: ${book.categories}`);
    expect(wrapper.find('p[title="Description"]').text()).toEqual(`Description: ${book.description}`);
    expect(wrapper.find('img').prop('src')).toEqual(book.thumbnail);
  });
});
