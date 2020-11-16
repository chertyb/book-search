import React from 'react';
import ReactDom from 'react-dom';
import { mount } from '../enzyme';
import Home from './Home';
import Input from '../Components/Input';
import Button from '../Components/Button';
import BookDisplay from '../Components/BookDisplay';

describe('Home', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Home />, div);
    expect(div).toMatchSnapshot();
    ReactDom.unmountComponentAtNode(div);
  });

  it('should display Input component', () => {
    const wrapper = mount(<Home />);
    expect(wrapper.find(Input).length).toEqual(1);
  });

  it('should change state after input value change', () => {
    const newValue = 'Harry Potter';
    const wrapper = mount(<Home />);
    const input = wrapper.find(Input);
    input.simulate('change', { target: { value: newValue } });
    expect(wrapper.state().searchInput).toEqual(newValue);
  });

  it('should display Button component', () => {
    const wrapper = mount(<Home />);
    expect(wrapper.find(Button).length).toEqual(1);
  });

  it('should display BookDisplay component', () => {
    const wrapper = mount(<Home />);
    expect(wrapper.find(BookDisplay).length).toEqual(1);
  });
});
