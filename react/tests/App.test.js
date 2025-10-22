import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../reactapp/src/App';

// Test Case 1: Dynamic rendering with map() and initial data
test('renders anime list using map function with initial data', () => {
  render(<App />);
  expect(screen.getByText('Naruto')).toBeInTheDocument();
  expect(screen.getByText('📱 iPhone 14')).toBeInTheDocument();
  expect(screen.getByText('One Piece')).toBeInTheDocument();
});

// Test Case 2: Conditional rendering with && operator (empty state)
test('shows no anime message when filtered list is empty', () => {
  render(<App />);
  const filterCheckbox = screen.getByRole('checkbox');
  fireEvent.click(filterCheckbox);
  const watchedButtons = screen.getAllByText('✅ Watched');
  watchedButtons.forEach(button => fireEvent.click(button));
  expect(screen.getByText('No anime found in collection 😢')).toBeInTheDocument();
});

// Test Case 3: useState Hook - adding new anime
test('useState manages anime collection state when adding new item', () => {
  render(<App />);
  const animeInput = screen.getByPlaceholderText('Anime name...');
  const phoneInput = screen.getByPlaceholderText('Mobile phone...');
  const addButton = screen.getByText('Add to Collection');
  
  fireEvent.change(animeInput, { target: { value: 'Dragon Ball Z' } });
  fireEvent.change(phoneInput, { target: { value: 'OnePlus 11' } });
  fireEvent.click(addButton);
  
  expect(screen.getByText('Dragon Ball Z')).toBeInTheDocument();
});

// Test Case 4: Class component state (this.state, setState)
test('class component counter increments using setState', () => {
  render(<App />);
  const counterButton = screen.getByText(/Count Mobile Taps/);
  fireEvent.click(counterButton);
  fireEvent.click(counterButton);
  expect(screen.getByText('Counter Clicks: 2')).toBeInTheDocument();
});

// Test Case 5: Event handling (onClick, onChange)
test('event handlers work for onClick and onChange events', () => {
  render(<App />);
  const watchButton = screen.getAllByText('⏳ Not Watched')[0];
  fireEvent.click(watchButton);
  expect(screen.getByText('✅ Watched')).toBeInTheDocument();
  
  const animeInput = screen.getByPlaceholderText('Anime name...');
  fireEvent.change(animeInput, { target: { value: 'Test Anime' } });
  expect(animeInput.value).toBe('Test Anime');
});

// Test Case 6: Ternary operator conditional rendering
test('ternary operator shows different text based on toggle state', () => {
  render(<App />);
  expect(screen.getByText('📋 Showing all anime')).toBeInTheDocument();
  
  const filterCheckbox = screen.getByRole('checkbox');
  fireEvent.click(filterCheckbox);
  expect(screen.getByText('📺 Showing watched anime only')).toBeInTheDocument();
});