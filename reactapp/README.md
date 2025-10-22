# 🔴 Matrix Code Restaurant Network 🍽️

A React application demonstrating API integration with Matrix-themed restaurant management system.

## API Features Implemented

### Core API Concepts:
- **Fetch API**: Uses native Fetch for GET and POST requests
- **Backend Integration**: Integrates with JSONPlaceholder mock API
- **Error Handling**: Comprehensive error handling for API responses
- **Loading States**: Matrix rain animation during API calls
- **Success States**: Success messages for completed operations

### App Functionality:
- Fetch restaurant network from mock API (GET requests)
- Add new restaurants to Matrix network (POST requests)
- Display Matrix-themed loading animations
- Handle and display API errors with Matrix references
- Show success messages for completed operations
- Refresh network functionality

## API Integration Details:
- **GET Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **POST Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Error Handling**: Network errors, server errors, response validation
- **Loading States**: Matrix rain animation with green digital aesthetic
- **Data Transformation**: Maps API responses to Matrix restaurant data

## Components Structure:
- `App.js` - Main component with Fetch API integration logic
- `RestaurantList.js` - Displays fetched data with Matrix styling
- `OrderForm.js` - Form for POST requests with Matrix theme
- `MatrixLoader.js` - Loading state with animated Matrix rain

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
2. POST requests with form submission
3. Loading state with Matrix animations
4. GET request error handling
5. POST request error handling
6. Success state handling

## Theme: Matrix Digital Restaurant Network
Pure Matrix aesthetic with green digital rain, monospace fonts, and cyberpunk restaurant management.