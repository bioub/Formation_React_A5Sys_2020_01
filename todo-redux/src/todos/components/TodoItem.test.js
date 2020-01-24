import React from 'react';
import { render } from "@testing-library/react";
import { TodoItem } from './TodoItem';

test('TodoItem', () => {
  const item = {
    id: 123,
    title: 'Acheter du pain',
    completed: false,
  };
  const { getByText } = render(<TodoItem todo={item} />);
  const spanElement = getByText(/acheter du pain/i);
  expect(spanElement).toBeInTheDocument();
});