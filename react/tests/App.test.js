import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../reactapp/src/App';

// Test Case 1: Dynamic rendering with map() function
test('renders voice actor list using map function with initial data', () => {
  render(<App />);
  expect(screen.getByText('Masako Nozawa')).toBeInTheDocument();
  expect(screen.getByText('🎭 Voices: Goku')).toBeInTheDocument();
  expect(screen.getByText('📱 iPhone 15 Pro')).toBeInTheDocument();
});

// Test Case 2: Conditional rendering with && operator for empty state
test('shows no actors message when review database is empty', () => {
  render(<App />);
  const filterCheckbox = screen.getByRole('checkbox');
  fireEvent.click(filterCheckbox);
  const verifiedButtons = screen.getAllByText('✅ Verified');
  verifiedButtons.forEach(button => fireEvent.click(button));
  expect(screen.getByText('No voice actor reviews found 🎭')).toBeInTheDocument();
});

// Test Case 3: useState Hook manages actor review collection state
test('useState adds new voice actor review when form submitted', () => {
  render(<App />);
  const actorInput = screen.getByPlaceholderText('Voice actor name...');
  const characterInput = screen.getByPlaceholderText('Character voiced...');
  const phoneInput = screen.getByPlaceholderText('Phone model...');
  const ratingInput = screen.getByPlaceholderText('Rating (1-5)...');
  const addButton = screen.getByText('Add Review');
  
  fireEvent.change(actorInput, { target: { value: 'Yuki Kaji' } });
  fireEvent.change(characterInput, { target: { value: 'Eren Yeager' } });
  fireEvent.change(phoneInput, { target: { value: 'OnePlus 12' } });
  fireEvent.change(ratingInput, { target: { value: '4' } });
  fireEvent.click(addButton);
  
  expect(screen.getByText('Yuki Kaji')).toBeInTheDocument();
});

// Test Case 4: Class component state management with this.state and setState
test('class component review like counter increments using setState', () => {
  render(<App />);
  const likeButton = screen.getByText(/Like Review/);
  fireEvent.click(likeButton);
  fireEvent.click(likeButton);
  fireEvent.click(likeButton);
  fireEvent.click(likeButton);
  fireEvent.click(likeButton);
  expect(screen.getByText('Review Likes: 5')).toBeInTheDocument();
});

// Test Case 5: Event handling for onClick and onChange events
test('event handlers work correctly for user interactions', () => {
  render(<App />);
  const verifyButton = screen.getAllByText('⏳ Pending')[0];
  fireEvent.click(verifyButton);
  expect(screen.getByText('✅ Verified')).toBeInTheDocument();
  
  const actorInput = screen.getByPlaceholderText('Voice actor name...');
  fireEvent.change(actorInput, { target: { value: 'Rie Kugimiya' } });
  expect(actorInput.value).toBe('Rie Kugimiya');
});

// Test Case 6: Ternary operator conditional rendering in toggle
test('ternary operator displays different text based on filter state', () => {
  render(<App />);
  expect(screen.getByText('📋 Showing all actor reviews')).toBeInTheDocument();
  
  const filterCheckbox = screen.getByRole('checkbox');
  fireEvent.click(filterCheckbox);
  expect(screen.getByText('✅ Showing verified reviews only')).toBeInTheDocument();
});