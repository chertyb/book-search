import React from 'react';
import ReactDom from 'react-dom';
import { mount } from '../../enzyme';
import Home from '../Home';
import Input from '../Input';
import Button from '../Button';
import Message from '../Message';
import BookDisplay from '../BookDisplay';
import Book from '../Book';
import { defaultBookShape } from '../../Shape/BookShape';

describe('Home', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Home />);
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Home />, div);
    expect(div).toMatchSnapshot();
    ReactDom.unmountComponentAtNode(div);
  });

  it('should display empty Input component', () => {
    const input = wrapper.find(Input);
    expect(input.length).toEqual(1);
    expect(input.prop('value')).toEqual('');
  });

  it('should change state after input value change', () => {
    const newValue = 'Harry Potter';
    const input = wrapper.find(Input);
    input.simulate('change', { target: { value: newValue } });
    expect(wrapper.state().searchInput).toEqual(newValue);
  });

  it('should display Button component', () => {
    expect(wrapper.find(Button).length).toEqual(1);
  });

  it('should display empty BookDisplay component', () => {
    const bookDisplay = wrapper.find(BookDisplay);
    expect(bookDisplay.length).toEqual(1);
    expect(bookDisplay.length).toEqual(1);
  });

  it('should display 0 books', () => {
    expect(wrapper.find(Book).exists()).toEqual(false);
  });

  it('should display error message when search button clicked with no input', () => {
    wrapper.setState({ searchInput: '' });
    wrapper.find(Button).simulate('click');
    expect(wrapper.find(Message).length).toEqual(1);
    expect(wrapper.find(Message).prop('type')).toEqual('error');
  });

  it('should display loading message when search button clicked with input', () => {
    wrapper.setState({ searchInput: 'Harry Potter' });
    wrapper.find(Button).simulate('click');
    expect(wrapper.find(Message).length).toEqual(1);
    expect(wrapper.find(Message).prop('type')).toEqual('loading');
  });

  it('should display fetched books', () => {
    wrapper.setState({ books: [{ ...defaultBookShape, id: 'id1' }, { ...defaultBookShape, id: 'id2' }] });
    expect(wrapper.find(Book).length).toEqual(2);
  });
});
