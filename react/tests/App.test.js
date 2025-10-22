import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../reactapp/src/App';

// Mock fetch
global.fetch = jest.fn();

// Test Case 1: Fetch API GET request - fetches and displays hero data
test('fetches and displays Marvel heroes using fetch GET', async () => {
  const mockData = [
    { id: 1, name: 'Tony Stark', address: { city: 'New York' }, company: { name: 'Avengers' } },
    { id: 2, name: 'Steve Rogers', address: { city: 'Brooklyn' }, company: { name: 'S.H.I.E.L.D.' } }
  ];
  
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockData
  });
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText(/Tony Hero/)).toBeInTheDocument();
  });
});

// Test Case 2: Fetch API POST request - adds new hero
test('adds new hero using fetch POST request', async () => {
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
  
  const nameInput = screen.getByPlaceholderText(/Hero name/);
  const realNameInput = screen.getByPlaceholderText(/Real name/);
  const missionInput = screen.getByPlaceholderText(/Mission/);
  const powerInput = screen.getByPlaceholderText(/Power level/);
  const teamSelect = screen.getByDisplayValue('');
  const submitButton = screen.getByText(/Register Hero/);
  
  fireEvent.change(nameInput, { target: { value: 'Spider-Man' } });
  fireEvent.change(realNameInput, { target: { value: 'Peter Parker' } });
  fireEvent.change(missionInput, { target: { value: 'Protect Queens' } });
  fireEvent.change(powerInput, { target: { value: '85' } });
  fireEvent.change(teamSelect, { target: { value: 'Avengers' } });
  fireEvent.click(submitButton);
  
  await waitFor(() => {
    expect(screen.getByText('Spider-Man')).toBeInTheDocument();
  });
});

// Test Case 3: Fetch API PUT request - updates hero status
test('updates hero status using fetch PUT request', async () => {
  const mockGetData = [
    { id: 1, name: 'Bruce Banner', address: { city: 'New York' }, company: { name: 'Avengers' } }
  ];
  
  fetch
    .mockResolvedValueOnce({
      ok: true,
      json: async () => mockGetData
    })
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({ status: 'Inactive' })
    });
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText(/Bruce Hero/)).toBeInTheDocument();
  });
  
  const deactivateButton = screen.getByText('Deactivate');
  fireEvent.click(deactivateButton);
  
  await waitFor(() => {
    expect(screen.getByText(/Hero status updated to Inactive/)).toBeInTheDocument();
  });
});

// Test Case 4: Loading state with S.H.I.E.L.D. animation
test('displays Marvel loader during API requests', async () => {
  fetch.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));
  
  render(<App />);
  
  expect(screen.getByText(/Connecting to S.H.I.E.L.D. database/)).toBeInTheDocument();
});

// Test Case 5: Error handling for failed requests
test('handles and displays error when API request fails', async () => {
  fetch.mockRejectedValueOnce(new Error('Network Error'));
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText(/Failed to connect to S.H.I.E.L.D. database/)).toBeInTheDocument();
  });
});

// Test Case 6: Success state handling for POST requests
test('displays success message when hero is registered successfully', async () => {
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
  
  const nameInput = screen.getByPlaceholderText(/Hero name/);
  const realNameInput = screen.getByPlaceholderText(/Real name/);
  const missionInput = screen.getByPlaceholderText(/Mission/);
  const powerInput = screen.getByPlaceholderText(/Power level/);
  const teamSelect = screen.getByDisplayValue('');
  const submitButton = screen.getByText(/Register Hero/);
  
  fireEvent.change(nameInput, { target: { value: 'Captain Marvel' } });
  fireEvent.change(realNameInput, { target: { value: 'Carol Danvers' } });
  fireEvent.change(missionInput, { target: { value: 'Protect Earth' } });
  fireEvent.change(powerInput, { target: { value: '95' } });
  fireEvent.change(teamSelect, { target: { value: 'Avengers' } });
  fireEvent.click(submitButton);
  
  await waitFor(() => {
    expect(screen.getByText(/New hero successfully registered with S.H.I.E.L.D./)).toBeInTheDocument();
  });
});