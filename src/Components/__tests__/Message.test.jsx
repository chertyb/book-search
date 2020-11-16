import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from '../../enzyme';
import Message from '../Message';

describe('Message component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Message />, div);
    expect(div).toMatchSnapshot();
    ReactDom.unmountComponentAtNode(div);
  });

  it('should display props value', () => {
    const message = 'Error msg';
    const wrapper = shallow(<Message message={message} />);
    expect(wrapper.text()).toEqual(message);
  });
});
