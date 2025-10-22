import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import App from '../../reactapp/src/App';

// Mock axios
jest.mock('axios');
const mockedAxios = axios;

// Test Case 1: Axios GET request - fetches and displays villain data
test('fetches and displays DC villains using axios GET', async () => {
  const mockData = {
    data: [
      { id: 1, name: 'Joker Chaos', email: 'gotham@arkham.dc', body: 'Evil scheme to destroy Gotham City' },
      { id: 2, name: 'Lex Luthor', email: 'metropolis@dc.com', body: 'Plan to defeat Superman' }
    ]
  };
  
  mockedAxios.get.mockResolvedValueOnce(mockData);
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText(/Joker Villain/)).toBeInTheDocument();
  });
});

// Test Case 2: Axios POST request - adds new villain
test('adds new villain using axios POST request', async () => {
  const mockGetData = { data: [] };
  const mockPostData = { data: { id: 101 } };
  
  mockedAxios.get.mockResolvedValueOnce(mockGetData);
  mockedAxios.post.mockResolvedValueOnce(mockPostData);
  
  render(<App />);
  
  const nameInput = screen.getByPlaceholderText(/Villain name/);
  const realNameInput = screen.getByPlaceholderText(/Real name/);
  const cityInput = screen.getByPlaceholderText(/Operating city/);
  const threatSelect = screen.getByDisplayValue('Low Threat');
  const schemeTextarea = screen.getByPlaceholderText(/Criminal scheme/);
  const submitButton = screen.getByText(/Add to Database/);
  
  fireEvent.change(nameInput, { target: { value: 'The Riddler' } });
  fireEvent.change(realNameInput, { target: { value: 'Edward Nygma' } });
  fireEvent.change(cityInput, { target: { value: 'Gotham' } });
  fireEvent.change(threatSelect, { target: { value: '3' } });
  fireEvent.change(schemeTextarea, { target: { value: 'Riddle-based crime spree' } });
  fireEvent.click(submitButton);
  
  await waitFor(() => {
    expect(screen.getByText('The Riddler')).toBeInTheDocument();
  });
});

// Test Case 3: Axios PATCH request - updates villain status
test('updates villain capture status using axios PATCH request', async () => {
  const mockGetData = {
    data: [{ id: 1, name: 'Penguin Crime', email: 'gotham@arkham.dc', body: 'Umbrella-based crimes' }]
  };
  
  mockedAxios.get.mockResolvedValueOnce(mockGetData);
  mockedAxios.patch.mockResolvedValueOnce({});
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText(/Penguin Villain/)).toBeInTheDocument();
  });
  
  const captureButton = screen.getByText('Capture');
  fireEvent.click(captureButton);
  
  await waitFor(() => {
    expect(screen.getByText(/Villain captured/)).toBeInTheDocument();
  });
});

// Test Case 4: Axios DELETE request - removes villain
test('deletes villain using axios DELETE request', async () => {
  const mockGetData = {
    data: [{ id: 1, name: 'Bane Destruction', email: 'gotham@arkham.dc', body: 'Break the Bat' }]
  };
  
  mockedAxios.get.mockResolvedValueOnce(mockGetData);
  mockedAxios.delete.mockResolvedValueOnce({});
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText(/Bane Villain/)).toBeInTheDocument();
  });
  
  const deleteButton = screen.getByText('Eliminate');
  fireEvent.click(deleteButton);
  
  await waitFor(() => {
    expect(screen.getByText(/Villain eliminated from database/)).toBeInTheDocument();
  });
});

// Test Case 5: Loading state with Bat-Signal animation
test('displays DC loader during API requests', async () => {
  mockedAxios.get.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));
  
  render(<App />);
  
  expect(screen.getByText(/Accessing Arkham database/)).toBeInTheDocument();
});

// Test Case 6: Error handling for failed requests
test('handles and displays error when API request fails', async () => {
  mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText(/Failed to access Arkham Asylum database/)).toBeInTheDocument();
  });
});