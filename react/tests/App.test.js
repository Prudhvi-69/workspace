import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../reactapp/src/App';

// Test Case 1: Dynamic rendering with map() function
test('renders studio list using map function with initial data', () => {
  render(<App />);
  expect(screen.getByText('Studio Ghibli')).toBeInTheDocument();
  expect(screen.getByText('🎮 Spirited Away Mobile')).toBeInTheDocument();
  expect(screen.getByText('📱 iOS')).toBeInTheDocument();
});

// Test Case 2: Conditional rendering with && operator for empty state
test('shows no studios message when database is empty', () => {
  render(<App />);
  const filterCheckbox = screen.getByRole('checkbox');
  fireEvent.click(filterCheckbox);
  const releasedButtons = screen.getAllByText('✅ Released');
  releasedButtons.forEach(button => fireEvent.click(button));
  expect(screen.getByText('No studios found in database 🎮')).toBeInTheDocument();
});

// Test Case 3: useState Hook manages studio collection state
test('useState adds new studio game when form submitted', () => {
  render(<App />);
  const studioInput = screen.getByPlaceholderText('Studio name...');
  const gameInput = screen.getByPlaceholderText('Mobile game...');
  const platformInput = screen.getByPlaceholderText('Platform (iOS/Android)...');
  const addButton = screen.getByText('Add Studio Game');
  
  fireEvent.change(studioInput, { target: { value: 'Pierrot' } });
  fireEvent.change(gameInput, { target: { value: 'Naruto Mobile' } });
  fireEvent.change(platformInput, { target: { value: 'Android' } });
  fireEvent.click(addButton);
  
  expect(screen.getByText('Pierrot')).toBeInTheDocument();
});

// Test Case 4: Class component state management with this.state and setState
test('class component download counter increments using setState', () => {
  render(<App />);
  const downloadButton = screen.getByText(/Download Game/);
  fireEvent.click(downloadButton);
  fireEvent.click(downloadButton);
  fireEvent.click(downloadButton);
  fireEvent.click(downloadButton);
  expect(screen.getByText('Game Downloads: 4')).toBeInTheDocument();
});

// Test Case 5: Event handling for onClick and onChange events
test('event handlers work correctly for user interactions', () => {
  render(<App />);
  const releaseButton = screen.getAllByText('⏳ In Development')[0];
  fireEvent.click(releaseButton);
  expect(screen.getByText('✅ Released')).toBeInTheDocument();
  
  const studioInput = screen.getByPlaceholderText('Studio name...');
  fireEvent.change(studioInput, { target: { value: 'Bones' } });
  expect(studioInput.value).toBe('Bones');
});

// Test Case 6: Ternary operator conditional rendering in toggle
test('ternary operator displays different text based on filter state', () => {
  render(<App />);
  expect(screen.getByText('📋 Showing all studio games')).toBeInTheDocument();
  
  const filterCheckbox = screen.getByRole('checkbox');
  fireEvent.click(filterCheckbox);
  expect(screen.getByText('✅ Showing released games only')).toBeInTheDocument();
});