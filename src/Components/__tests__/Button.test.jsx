import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from '../../enzyme';
import Button from '../Button';

describe('Button component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Button />, div);
    expect(div).toMatchSnapshot();
    ReactDom.unmountComponentAtNode(div);
  });

  it('should display props value', () => {
    const text = 'Search';
    const wrapper = shallow(<Button text={text} />);
    expect(wrapper.text()).toEqual(text);
  });
});
