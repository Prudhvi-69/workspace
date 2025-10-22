import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import App from '../../reactapp/src/App';

// Mock axios
jest.mock('axios');
const mockedAxios = axios;

// Test Case 1: API GET request with Axios - fetches and displays food data
test('fetches and displays Star Wars cantina menu using axios GET', async () => {
  const mockData = {
    data: [
      { id: 1, title: 'Bantha Tatooine Special' },
      { id: 2, title: 'Ewok Endor Delight' }
    ]
  };
  
  mockedAxios.get.mockResolvedValueOnce(mockData);
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText(/Bantha Cantina Special/)).toBeInTheDocument();
  });
});

// Test Case 2: API POST request - adds new food item
test('adds new cantina dish using axios POST request', async () => {
  const mockGetData = { data: [] };
  const mockPostData = { data: { id: 101 } };
  
  mockedAxios.get.mockResolvedValueOnce(mockGetData);
  mockedAxios.post.mockResolvedValueOnce(mockPostData);
  
  render(<App />);
  
  const nameInput = screen.getByPlaceholderText(/Dish name/);
  const planetInput = screen.getByPlaceholderText(/Origin planet/);
  const priceInput = screen.getByPlaceholderText(/Price in credits/);
  const submitButton = screen.getByText(/Add to Cantina Menu/);
  
  fireEvent.change(nameInput, { target: { value: 'Jedi Soup' } });
  fireEvent.change(planetInput, { target: { value: 'Coruscant' } });
  fireEvent.change(priceInput, { target: { value: '25' } });
  fireEvent.click(submitButton);
  
  await waitFor(() => {
    expect(screen.getByText('Jedi Soup')).toBeInTheDocument();
  });
});

// Test Case 3: Loading state handling
test('displays loading spinner during API requests', async () => {
  mockedAxios.get.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));
  
  render(<App />);
  
  expect(screen.getByText(/Connecting to the cantina database/)).toBeInTheDocument();
});

// Test Case 4: Error handling for failed GET requests
test('handles and displays error when GET request fails', async () => {
  mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText(/Failed to fetch Star Wars cantina menu/)).toBeInTheDocument();
  });
});

// Test Case 5: Error handling for failed POST requests
test('handles and displays error when POST request fails', async () => {
  const mockGetData = { data: [] };
  mockedAxios.get.mockResolvedValueOnce(mockGetData);
  mockedAxios.post.mockRejectedValueOnce(new Error('Server Error'));
  
  render(<App />);
  
  const nameInput = screen.getByPlaceholderText(/Dish name/);
  const planetInput = screen.getByPlaceholderText(/Origin planet/);
  const priceInput = screen.getByPlaceholderText(/Price in credits/);
  const submitButton = screen.getByText(/Add to Cantina Menu/);
  
  fireEvent.change(nameInput, { target: { value: 'Sith Stew' } });
  fireEvent.change(planetInput, { target: { value: 'Korriban' } });
  fireEvent.change(priceInput, { target: { value: '30' } });
  fireEvent.click(submitButton);
  
  await waitFor(() => {
    expect(screen.getByText(/Failed to add food item/)).toBeInTheDocument();
  });
});

// Test Case 6: Success state handling for POST requests
test('displays success message when POST request succeeds', async () => {
  const mockGetData = { data: [] };
  const mockPostData = { data: { id: 102 } };
  
  mockedAxios.get.mockResolvedValueOnce(mockGetData);
  mockedAxios.post.mockResolvedValueOnce(mockPostData);
  
  render(<App />);
  
  const nameInput = screen.getByPlaceholderText(/Dish name/);
  const planetInput = screen.getByPlaceholderText(/Origin planet/);
  const priceInput = screen.getByPlaceholderText(/Price in credits/);
  const submitButton = screen.getByText(/Add to Cantina Menu/);
  
  fireEvent.change(nameInput, { target: { value: 'Rebel Rations' } });
  fireEvent.change(planetInput, { target: { value: 'Yavin' } });
  fireEvent.change(priceInput, { target: { value: '15' } });
  fireEvent.click(submitButton);
  
  await waitFor(() => {
    expect(screen.getByText(/New cantina dish added successfully/)).toBeInTheDocument();
  });
});