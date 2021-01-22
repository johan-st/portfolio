import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('renders my name', () => {
  render(<App />);
  const h1 = screen.getByText(/Johan Strand/i);
  expect(h1).toBeInTheDocument();
});
