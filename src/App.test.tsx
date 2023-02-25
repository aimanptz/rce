import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { useGetData } from './data';

test('renders learn react link', () => {
  render(<App />);
  const pageData = useGetData('IndexPage')

  const textElement = screen.getByText(pageData.options[1].title);
  expect(textElement).toBeInTheDocument();
});
