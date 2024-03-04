// CounterFunctionalComponent.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FunctionalComponent from './functionalComponent.js'

describe('CounterFunctionalComponent', () => {
  test('renders and increments the counter', () => {
    render(<FunctionalComponent />);
    const counterText = screen.getByText(/counter:/i);
    expect(counterText).toBeInTheDocument();
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    expect(screen.getByText(/counter: 1/i)).toBeInTheDocument();
  });

  test('renders and decrements the counter', () => {
    render(<FunctionalComponent />);
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);
    expect(screen.getByText(/counter: -1/i)).toBeInTheDocument();
  });

  test('renders and resets the counter after a decrement', () => {
    render(<FunctionalComponent />);
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);
    const resetButton = screen.getByText('Reset');
    fireEvent.click(resetButton);
    expect(screen.getByText(/counter: 0/i)).toBeInTheDocument();
  });

  test('renders and resets the counter after an increment', () => {
    render(<FunctionalComponent />);
    const inecrementButton = screen.getByText('Increment');
    fireEvent.click(inecrementButton);
    const resetButton = screen.getByText('Reset');
    fireEvent.click(resetButton);
    expect(screen.getByText(/counter: 0/i)).toBeInTheDocument();
  });
});
