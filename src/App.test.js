import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const paragraphElement = screen.getByText(/Using this project to experiment with Hooks, unit testing, and other React-specific code/i);
  expect(paragraphElement).toBeInTheDocument();
});
