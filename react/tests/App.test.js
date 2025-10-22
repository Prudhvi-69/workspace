import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import App from '../../reactapp/src/App';

// Mock axios
jest.mock('axios');
const mockedAxios = axios;

// Test Case 1: Axios GET request - fetches and displays recipe data
test('fetches and displays recipe cookbook using axios GET', async () => {
  const mockData = {
    data: [
      { id: 1, title: 'Chocolate Italian Masterpiece' },
      { id: 2, title: 'Vanilla French Delight' }
    ]
  };
  
  mockedAxios.get.mockResolvedValueOnce(mockData);
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText(/Chocolate Deluxe Recipe/)).toBeInTheDocument();
  });
});

// Test Case 2: Axios POST request - adds new recipe
test('adds new recipe using axios POST request', async () => {
  const mockGetData = { data: [] };
  const mockPostData = { data: { id: 101 } };
  
  mockedAxios.get.mockResolvedValueOnce(mockGetData);
  mockedAxios.post.mockResolvedValueOnce(mockPostData);
  
  render(<App />);
  
  const nameInput = screen.getByPlaceholderText(/Recipe name/);
  const cuisineInput = screen.getByPlaceholderText(/Cuisine type/);
  const difficultySelect = screen.getByDisplayValue('Easy');
  const timeInput = screen.getByPlaceholderText(/Cooking time/);
  const submitButton = screen.getByText(/Add to Cookbook/);
  
  fireEvent.change(nameInput, { target: { value: 'Pasta Carbonara' } });
  fireEvent.change(cuisineInput, { target: { value: 'Italian' } });
  fireEvent.change(difficultySelect, { target: { value: '2' } });
  fireEvent.change(timeInput, { target: { value: '30' } });
  fireEvent.click(submitButton);
  
  await waitFor(() => {
    expect(screen.getByText('Pasta Carbonara')).toBeInTheDocument();
  });
});

// Test Case 3: Axios DELETE request - removes recipe
test('deletes recipe using axios DELETE request', async () => {
  const mockGetData = {
    data: [{ id: 1, title: 'Test Recipe' }]
  };
  
  mockedAxios.get.mockResolvedValueOnce(mockGetData);
  mockedAxios.delete.mockResolvedValueOnce({});
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText(/Test Deluxe Recipe/)).toBeInTheDocument();
  });
  
  const deleteButton = screen.getByText(/Delete/);
  fireEvent.click(deleteButton);
  
  await waitFor(() => {
    expect(screen.getByText(/Recipe removed from cookbook/)).toBeInTheDocument();
  });
});

// Test Case 4: Loading state with cooking animation
test('displays cooking loader during API requests', async () => {
  mockedAxios.get.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));
  
  render(<App />);
  
  expect(screen.getByText(/Cooking up your recipes/)).toBeInTheDocument();
});

// Test Case 5: Error handling for failed requests
test('handles and displays error when API request fails', async () => {
  mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText(/Failed to fetch recipes from the kitchen database/)).toBeInTheDocument();
  });
});

// Test Case 6: Success state handling for POST requests
test('displays success message when recipe is added successfully', async () => {
  const mockGetData = { data: [] };
  const mockPostData = { data: { id: 102 } };
  
  mockedAxios.get.mockResolvedValueOnce(mockGetData);
  mockedAxios.post.mockResolvedValueOnce(mockPostData);
  
  render(<App />);
  
  const nameInput = screen.getByPlaceholderText(/Recipe name/);
  const cuisineInput = screen.getByPlaceholderText(/Cuisine type/);
  const timeInput = screen.getByPlaceholderText(/Cooking time/);
  const submitButton = screen.getByText(/Add to Cookbook/);
  
  fireEvent.change(nameInput, { target: { value: 'Beef Stew' } });
  fireEvent.change(cuisineInput, { target: { value: 'American' } });
  fireEvent.change(timeInput, { target: { value: '120' } });
  fireEvent.click(submitButton);
  
  await waitFor(() => {
    expect(screen.getByText(/New recipe added to the cookbook successfully/)).toBeInTheDocument();
  });
});