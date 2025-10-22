import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../reactapp/src/App';

// Mock fetch
global.fetch = jest.fn();

// Test Case 1: Fetch API GET request - fetches and displays Tamil songs
test('fetches and displays Tamil songs using fetch GET', async () => {
  const mockData = [
    { id: 1, title: 'Vennilave Melody', userId: 1 },
    { id: 2, title: 'Kadhal Folk Song', userId: 2 }
  ];
  
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockData
  });
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText(/Vennilave Paadal/)).toBeInTheDocument();
  });
});

// Test Case 2: Fetch API POST request - adds new Tamil song
test('adds new Tamil song using fetch POST request', async () => {
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
  
  const titleInput = screen.getByPlaceholderText(/Song title/);
  const artistInput = screen.getByPlaceholderText(/Artist name/);
  const movieInput = screen.getByPlaceholderText(/Movie name/);
  const yearInput = screen.getByPlaceholderText(/Release year/);
  const durationInput = screen.getByPlaceholderText(/Duration/);
  const genreSelect = screen.getByDisplayValue('');
  const submitButton = screen.getByText(/Add to Library/);
  
  fireEvent.change(titleInput, { target: { value: 'Munbe Vaa' } });
  fireEvent.change(artistInput, { target: { value: 'A.R. Rahman' } });
  fireEvent.change(movieInput, { target: { value: 'Sillunu Oru Kaadhal' } });
  fireEvent.change(yearInput, { target: { value: '2006' } });
  fireEvent.change(durationInput, { target: { value: '240' } });
  fireEvent.change(genreSelect, { target: { value: 'Melody' } });
  fireEvent.click(submitButton);
  
  await waitFor(() => {
    expect(screen.getByText('Munbe Vaa')).toBeInTheDocument();
  });
});

// Test Case 3: Fetch API PUT request - toggles favorite status
test('toggles song favorite status using fetch PUT request', async () => {
  const mockGetData = [
    { id: 1, title: 'Kadhal Rojave', userId: 1 }
  ];
  
  fetch
    .mockResolvedValueOnce({
      ok: true,
      json: async () => mockGetData
    })
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({ favorite: true })
    });
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText(/Kadhal Paadal/)).toBeInTheDocument();
  });
  
  const favoriteButton = screen.getByText(/Add ❤️/);
  fireEvent.click(favoriteButton);
  
  await waitFor(() => {
    expect(screen.getByText(/Favorite status updated/)).toBeInTheDocument();
  });
});

// Test Case 4: Fetch API DELETE request - removes song
test('deletes Tamil song using fetch DELETE request', async () => {
  const mockGetData = [
    { id: 1, title: 'Uyire Uyire', userId: 1 }
  ];
  
  fetch
    .mockResolvedValueOnce({
      ok: true,
      json: async () => mockGetData
    })
    .mockResolvedValueOnce({
      ok: true
    });
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText(/Uyire Paadal/)).toBeInTheDocument();
  });
  
  const deleteButton = screen.getByText(/Delete/);
  fireEvent.click(deleteButton);
  
  await waitFor(() => {
    expect(screen.getByText(/பாடல் நீக்கப்பட்டது/)).toBeInTheDocument();
  });
});

// Test Case 5: Loading state with Tamil musical animation
test('displays Tamil loader during API requests', async () => {
  fetch.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));
  
  render(<App />);
  
  expect(screen.getByText(/Loading Tamil songs/)).toBeInTheDocument();
  expect(screen.getByText(/பாடல்கள் ஏற்றப்படுகின்றன/)).toBeInTheDocument();
});

// Test Case 6: Error handling for failed requests
test('handles and displays error when API request fails', async () => {
  fetch.mockRejectedValueOnce(new Error('Network Error'));
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText(/Failed to load Tamil songs/)).toBeInTheDocument();
  });
});