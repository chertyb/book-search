import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from '../../enzyme';
import Input from '../Input';

describe('Input component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Input />, div);
    expect(div).toMatchSnapshot();
    ReactDom.unmountComponentAtNode(div);
  });

  it('should display props value', () => {
    const value = 'Harry Potter';
    const wrapper = shallow(<Input value={value} />);
    expect(wrapper.prop('value')).toEqual(value);
  });
});
