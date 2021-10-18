import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Banner header text', () => {
  render(<App />);
  expect(screen.getByRole('heading')).toHaveTextContent('Banners');
});
