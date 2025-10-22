import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../reactapp/src/App';

// Mock fetch
global.fetch = jest.fn();

// Test Case 1: Fetch API GET request - fetches and displays restaurant data
test('fetches and displays Matrix restaurant network using fetch GET', async () => {
  const mockData = [
    { id: 1, name: 'Neo', address: { city: 'Zion' }, company: { name: 'The One' } },
    { id: 2, name: 'Morpheus', address: { city: 'Nebuchadnezzar' }, company: { name: 'Red Pill' } }
  ];
  
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockData
  });
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText(/Neo Digital Diner/)).toBeInTheDocument();
  });
});

// Test Case 2: Fetch API POST request - adds new restaurant
test('adds new restaurant using fetch POST request', async () => {
  const mockGetData = [];
  const mockPostData = { id: 101 };
  
  fetch
    .mockResolvedValueOnce({
      ok: true,
      json: async () => mockGetData
    })
    .mockResolvedValueOnce({
      ok: true,
      json: async () => mockPostData
    });
  
  render(<App />);
  
  const nameInput = screen.getByPlaceholderText(/Restaurant name/);
  const locationInput = screen.getByPlaceholderText(/Matrix location/);
  const specialtyInput = screen.getByPlaceholderText(/Digital specialty/);
  const submitButton = screen.getByText(/Upload to Matrix/);
  
  fireEvent.change(nameInput, { target: { value: 'Trinity Cafe' } });
  fireEvent.change(locationInput, { target: { value: 'Level 3 - Construct' } });
  fireEvent.change(specialtyInput, { target: { value: 'Blue Pill Smoothies' } });
  fireEvent.click(submitButton);
  
  await waitFor(() => {
    expect(screen.getByText('Trinity Cafe')).toBeInTheDocument();
  });
});

// Test Case 3: Loading state handling with Matrix animation
test('displays Matrix loader during API requests', async () => {
  fetch.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));
  
  render(<App />);
  
  expect(screen.getByText(/Accessing Matrix database/)).toBeInTheDocument();
});

// Test Case 4: Error handling for failed GET requests
test('handles and displays error when GET request fails', async () => {
  fetch.mockRejectedValueOnce(new Error('Network Error'));
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText(/Connection to the Matrix failed/)).toBeInTheDocument();
  });
});

// Test Case 5: Error handling for failed POST requests
test('handles and displays error when POST request fails', async () => {
  fetch
    .mockResolvedValueOnce({
      ok: true,
      json: async () => []
    })
    .mockResolvedValueOnce({
      ok: false,
      status: 500
    });
  
  render(<App />);
  
  const nameInput = screen.getByPlaceholderText(/Restaurant name/);
  const locationInput = screen.getByPlaceholderText(/Matrix location/);
  const specialtyInput = screen.getByPlaceholderText(/Digital specialty/);
  const submitButton = screen.getByText(/Upload to Matrix/);
  
  fireEvent.change(nameInput, { target: { value: 'Agent Smith Diner' } });
  fireEvent.change(locationInput, { target: { value: 'Level 99 - Mainframe' } });
  fireEvent.change(specialtyInput, { target: { value: 'Virus Soup' } });
  fireEvent.click(submitButton);
  
  await waitFor(() => {
    expect(screen.getByText(/Failed to upload restaurant data/)).toBeInTheDocument();
  });
});

// Test Case 6: Success state handling for POST requests
test('displays success message when POST request succeeds', async () => {
  const mockGetData = [];
  const mockPostData = { id: 102 };
  
  fetch
    .mockResolvedValueOnce({
      ok: true,
      json: async () => mockGetData
    })
    .mockResolvedValueOnce({
      ok: true,
      json: async () => mockPostData
    });
  
  render(<App />);
  
  const nameInput = screen.getByPlaceholderText(/Restaurant name/);
  const locationInput = screen.getByPlaceholderText(/Matrix location/);
  const specialtyInput = screen.getByPlaceholderText(/Digital specialty/);
  const submitButton = screen.getByText(/Upload to Matrix/);
  
  fireEvent.change(nameInput, { target: { value: 'Oracle Kitchen' } });
  fireEvent.change(locationInput, { target: { value: 'Level 1 - Apartment 101' } });
  fireEvent.change(specialtyInput, { target: { value: 'Prophecy Cookies' } });
  fireEvent.click(submitButton);
  
  await waitFor(() => {
    expect(screen.getByText(/New restaurant successfully jacked into the Matrix/)).toBeInTheDocument();
  });
});