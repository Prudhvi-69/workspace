import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../reactapp/src/App';

// Test Case 1: Dynamic rendering with map() function
test('renders convention list using map function with initial data', () => {
  render(<App />);
  expect(screen.getByText('Anime Expo')).toBeInTheDocument();
  expect(screen.getByText('📍 Los Angeles')).toBeInTheDocument();
  expect(screen.getByText('📱 AX Mobile Guide')).toBeInTheDocument();
});

// Test Case 2: Conditional rendering with && operator for empty state
test('shows no conventions message when directory is empty', () => {
  render(<App />);
  const filterCheckbox = screen.getByRole('checkbox');
  fireEvent.click(filterCheckbox);
  const featuredButtons = screen.getAllByText('⭐ Featured');
  featuredButtons.forEach(button => fireEvent.click(button));
  expect(screen.getByText('No conventions found in directory 🎭')).toBeInTheDocument();
});

// Test Case 3: useState Hook manages convention collection state
test('useState adds new convention when form submitted', () => {
  render(<App />);
  const conventionInput = screen.getByPlaceholderText('Convention name...');
  const locationInput = screen.getByPlaceholderText('Location...');
  const appInput = screen.getByPlaceholderText('Mobile app name...');
  const downloadsInput = screen.getByPlaceholderText('Downloads count...');
  const addButton = screen.getByText('Add Convention');
  
  fireEvent.change(conventionInput, { target: { value: 'Sakura-Con' } });
  fireEvent.change(locationInput, { target: { value: 'Seattle' } });
  fireEvent.change(appInput, { target: { value: 'Sakura Mobile' } });
  fireEvent.change(downloadsInput, { target: { value: '9500' } });
  fireEvent.click(addButton);
  
  expect(screen.getByText('Sakura-Con')).toBeInTheDocument();
});

// Test Case 4: Class component state management with this.state and setState
test('class component app install counter increments using setState', () => {
  render(<App />);
  const installButton = screen.getByText(/Install App/);
  fireEvent.click(installButton);
  fireEvent.click(installButton);
  fireEvent.click(installButton);
  fireEvent.click(installButton);
  fireEvent.click(installButton);
  fireEvent.click(installButton);
  fireEvent.click(installButton);
  expect(screen.getByText('App Installs: 7')).toBeInTheDocument();
});

// Test Case 5: Event handling for onClick and onChange events
test('event handlers work correctly for user interactions', () => {
  render(<App />);
  const featuredButton = screen.getAllByText('📋 Regular')[0];
  fireEvent.click(featuredButton);
  expect(screen.getByText('⭐ Featured')).toBeInTheDocument();
  
  const conventionInput = screen.getByPlaceholderText('Convention name...');
  fireEvent.change(conventionInput, { target: { value: 'AnimeNYC' } });
  expect(conventionInput.value).toBe('AnimeNYC');
});

// Test Case 6: Ternary operator conditional rendering in toggle
test('ternary operator displays different text based on filter state', () => {
  render(<App />);
  expect(screen.getByText('📋 Showing all conventions')).toBeInTheDocument();
  
  const filterCheckbox = screen.getByRole('checkbox');
  fireEvent.click(filterCheckbox);
  expect(screen.getByText('⭐ Showing featured conventions only')).toBeInTheDocument();
});