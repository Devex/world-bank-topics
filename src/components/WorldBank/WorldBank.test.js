import React from 'react';
import { render, screen } from '@testing-library/react';
import WorldBank from './WorldBank';

describe('<WorldBank />', () => {
  test('renders correctly component', () => {
    render(<WorldBank />);
    const titleElement = screen.getByRole('heading', {name: 'World Bank Challenge'});
    expect(titleElement).toBeInTheDocument();
  });
});
