import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  const h2Element = wrapper.find('h1');
  expect(h2Element.text()).toBe('Todo List');
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/todo list/i);
  // expect(linkElement).toBeInTheDocument();
});
