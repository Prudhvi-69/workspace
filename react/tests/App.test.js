import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../reactapp/src/App';

// Test Case 1: Dynamic rendering with map() function
test('renders merchandise list using map function with initial data', () => {
  render(<App />);
  expect(screen.getByText('Naruto Phone Case')).toBeInTheDocument();
  expect(screen.getByText('🎌 Naruto')).toBeInTheDocument();
  expect(screen.getByText('🏪 Mobile Plaza')).toBeInTheDocument();
});

// Test Case 2: Conditional rendering with && operator for empty state
test('shows no merchandise message when store inventory is empty', () => {
  render(<App />);
  const filterCheckbox = screen.getByRole('checkbox');
  fireEvent.click(filterCheckbox);
  const inStockButtons = screen.getAllByText('✅ In Stock');
  inStockButtons.forEach(button => fireEvent.click(button));
  expect(screen.getByText('No merchandise found in stores 🏪')).toBeInTheDocument();
});

// Test Case 3: useState Hook manages merchandise collection state
test('useState adds new merchandise when form submitted', () => {
  render(<App />);
  const itemInput = screen.getByPlaceholderText('Merchandise item...');
  const animeInput = screen.getByPlaceholderText('Anime series...');
  const storeInput = screen.getByPlaceholderText('Mobile store...');
  const priceInput = screen.getByPlaceholderText('Price ($)...');
  const addButton = screen.getByText('Add Merchandise');
  
  fireEvent.change(itemInput, { target: { value: 'Demon Slayer Headphones' } });
  fireEvent.change(animeInput, { target: { value: 'Demon Slayer' } });
  fireEvent.change(storeInput, { target: { value: 'Anime Mobile Hub' } });
  fireEvent.change(priceInput, { target: { value: '35.99' } });
  fireEvent.click(addButton);
  
  expect(screen.getByText('Demon Slayer Headphones')).toBeInTheDocument();
});

// Test Case 4: Class component state management with this.state and setState
test('class component purchase counter increments using setState', () => {
  render(<App />);
  const purchaseButton = screen.getByText(/Make Purchase/);
  fireEvent.click(purchaseButton);
  fireEvent.click(purchaseButton);
  fireEvent.click(purchaseButton);
  fireEvent.click(purchaseButton);
  fireEvent.click(purchaseButton);
  fireEvent.click(purchaseButton);
  expect(screen.getByText('Total Purchases: 6')).toBeInTheDocument();
});

// Test Case 5: Event handling for onClick and onChange events
test('event handlers work correctly for user interactions', () => {
  render(<App />);
  const stockButton = screen.getAllByText('❌ Out of Stock')[0];
  fireEvent.click(stockButton);
  expect(screen.getByText('✅ In Stock')).toBeInTheDocument();
  
  const itemInput = screen.getByPlaceholderText('Merchandise item...');
  fireEvent.change(itemInput, { target: { value: 'Jujutsu Kaisen Power Bank' } });
  expect(itemInput.value).toBe('Jujutsu Kaisen Power Bank');
});

// Test Case 6: Ternary operator conditional rendering in toggle
test('ternary operator displays different text based on filter state', () => {
  render(<App />);
  expect(screen.getByText('📋 Showing all merchandise')).toBeInTheDocument();
  
  const filterCheckbox = screen.getByRole('checkbox');
  fireEvent.click(filterCheckbox);
  expect(screen.getByText('✅ Showing in-stock items only')).toBeInTheDocument();
});