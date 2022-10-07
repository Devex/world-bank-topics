import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders correctly component', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', {name: 'Welcome to Devex hiring challenge'});
  expect(titleElement).toBeInTheDocument();
});
