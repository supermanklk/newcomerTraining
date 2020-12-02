import { render, screen } from '@testing-library/react';
import App from './LuckDraw';
import LuckDraw from "./LuckDraw";

test('renders learn react link', () => {
  render(<LuckDraw />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
