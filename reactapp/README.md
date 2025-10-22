# 🎵 Tamil Songs Music Library API 🎶

A React application demonstrating comprehensive API integration with Tamil music library management system.

## API Features Implemented

### Core API Concepts:
- **Fetch API GET Requests**: Fetches Tamil song library from mock API
- **Fetch API POST Requests**: Adds new Tamil songs to library
- **Fetch API PUT Requests**: Updates song favorite status
- **Fetch API DELETE Requests**: Removes songs from library
- **Error Handling**: Comprehensive error handling for all API operations
- **Loading States**: Musical note animations during API calls
- **Success States**: Bilingual confirmation messages (Tamil + English)

### App Functionality:
- Fetch Tamil song library from mock API (GET requests)
- Add new Tamil songs to library (POST requests)
- Toggle favorite status for songs (PUT requests)
- Delete songs from library (DELETE requests)
- Display Tamil-themed loading animations with musical notes
- Handle and display API errors with music-themed messages
- Show bilingual success messages in Tamil and English
- Song duration formatting (MM:SS)
- Tamil music genre classification

## API Integration Details:
- **GET Endpoint**: `https://jsonplaceholder.typicode.com/albums`
- **POST Endpoint**: `https://jsonplaceholder.typicode.com/albums`
- **PUT Endpoint**: `https://jsonplaceholder.typicode.com/albums/{id}`
- **DELETE Endpoint**: `https://jsonplaceholder.typicode.com/albums/{id}`
- **Error Handling**: Network errors, server errors, response validation
- **Loading States**: Animated musical notes with Tamil colors
- **Data Transformation**: Maps album API data to Tamil song structure

## Components Structure:
- `App.js` - Main component with comprehensive Fetch API integration
- `SongList.js` - Displays songs with favorite and delete functionality
- `SongForm.js` - Form for POST requests with Tamil genre selection
- `TamilLoader.js` - Loading state with animated musical notes

## Tamil Music Features:
- **Genres**: Melody (மெலடி), Kuthu (குத்து), Folk (நாட்டுப்புற), Classical (கிளாசிக்கல்), Devotional (பக்தி), Love (காதல்)
- **Bilingual Interface**: Tamil and English text throughout
- **Cultural Elements**: Tamil movie integration, artist names, traditional genres
- **Duration Tracking**: Song length in minutes and seconds
- **Favorite System**: Heart-based favorite marking

## Running the App:
```bash
cd reactapp
npm install
npm start
```

## Running Tests:
```bash
npm test
```

## Test Coverage:
6 comprehensive test cases covering:
1. GET requests with Fetch API
2. POST requests with Tamil song addition
3. PUT requests with favorite status updates
4. DELETE requests with song removal
5. Loading state with musical animations
6. Error handling for failed requests

## Theme: Tamil Music Library & Cultural Heritage
Pure Tamil aesthetic with vibrant colors, bilingual text, and comprehensive music library management celebrating Tamil musical culture.