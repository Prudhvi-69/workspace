import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../reactapp/src/App';

// Test Case 1: Dynamic rendering with map() function
test('renders character list using map function with initial data', () => {
  render(<App />);
  expect(screen.getByText('Goku')).toBeInTheDocument();
  expect(screen.getByText('📺 Dragon Ball')).toBeInTheDocument();
  expect(screen.getByText('📱 Samsung - 256GB, 12GB RAM')).toBeInTheDocument();
});

// Test Case 2: Conditional rendering with && operator for empty state
test('shows no characters message when database is empty', () => {
  render(<App />);
  const filterCheckbox = screen.getByRole('checkbox');
  fireEvent.click(filterCheckbox);
  const premiumButtons = screen.getAllByText('⭐ Premium');
  premiumButtons.forEach(button => fireEvent.click(button));
  expect(screen.getByText('No characters found in database 🔍')).toBeInTheDocument();
});

// Test Case 3: useState Hook manages character collection state
test('useState adds new character to database when form submitted', () => {
  render(<App />);
  const nameInput = screen.getByPlaceholderText('Character name...');
  const animeInput = screen.getByPlaceholderText('Anime series...');
  const brandInput = screen.getByPlaceholderText('Phone brand...');
  const specsInput = screen.getByPlaceholderText('Phone specs...');
  const addButton = screen.getByText('Add Character');
  
  fireEvent.change(nameInput, { target: { value: 'Vegeta' } });
  fireEvent.change(animeInput, { target: { value: 'Dragon Ball Z' } });
  fireEvent.change(brandInput, { target: { value: 'OnePlus' } });
  fireEvent.change(specsInput, { target: { value: '1TB, 24GB RAM' } });
  fireEvent.click(addButton);
  
  expect(screen.getByText('Vegeta')).toBeInTheDocument();
});

// Test Case 4: Class component state management with this.state and setState
test('class component spec counter increments using setState', () => {
  render(<App />);
  const specButton = screen.getByText(/View Specs/);
  fireEvent.click(specButton);
  fireEvent.click(specButton);
  fireEvent.click(specButton);
  expect(screen.getByText('Spec Views: 3')).toBeInTheDocument();
});

// Test Case 5: Event handling for onClick and onChange events
test('event handlers work correctly for user interactions', () => {
  render(<App />);
  const premiumButton = screen.getAllByText('📱 Standard')[0];
  fireEvent.click(premiumButton);
  expect(screen.getByText('⭐ Premium')).toBeInTheDocument();
  
  const nameInput = screen.getByPlaceholderText('Character name...');
  fireEvent.change(nameInput, { target: { value: 'Sasuke' } });
  expect(nameInput.value).toBe('Sasuke');
});

// Test Case 6: Ternary operator conditional rendering in toggle
test('ternary operator displays different text based on filter state', () => {
  render(<App />);
  expect(screen.getByText('📋 Showing all characters')).toBeInTheDocument();
  
  const filterCheckbox = screen.getByRole('checkbox');
  fireEvent.click(filterCheckbox);
  expect(screen.getByText('⭐ Showing premium users only')).toBeInTheDocument();
});