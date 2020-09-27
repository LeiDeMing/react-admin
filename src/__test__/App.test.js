import React from 'react';
import { render } from '@testing-library/react';
import BasicLayout from '../layouts/BasicLayout';

test('renders learn react link', () => {
  const { getByText } = render(<BasicLayout />);
  const linkElement = getByText(/BasicLayout/i);
  expect(linkElement).toBeInTheDocument();
});
