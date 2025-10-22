# 🌟 Star Wars Cantina Food Delivery API 🍽️

A React application demonstrating API integration with Star Wars themed food delivery system.

## API Features Implemented

### Core API Concepts:
- **Fetch API & Axios**: Uses Axios for GET and POST requests
- **Backend Integration**: Integrates with JSONPlaceholder mock API
- **Error Handling**: Comprehensive error handling for API responses
- **Loading States**: Loading spinners and user feedback
- **Success States**: Success messages for completed operations

### App Functionality:
- Fetch cantina menu from mock API (GET requests)
- Add new dishes to cantina menu (POST requests)
- Display loading states during API calls
- Handle and display API errors gracefully
- Show success messages for completed operations
- Refresh menu functionality

## API Integration Details:
- **GET Endpoint**: `https://jsonplaceholder.typicode.com/posts`
- **POST Endpoint**: `https://jsonplaceholder.typicode.com/posts`
- **Error Handling**: Network errors, server errors, timeout handling
- **Loading States**: Spinner animations and status messages
- **Data Transformation**: Maps API responses to Star Wars food items

## Components Structure:
- `App.js` - Main component with API integration logic
- `FoodList.js` - Displays fetched data with conditional rendering
- `OrderForm.js` - Form for POST requests with validation
- `LoadingSpinner.js` - Loading state component

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
1. GET requests with Axios
2. POST requests with form submission
3. Loading state handling
4. GET request error handling
5. POST request error handling
6. Success state handling

## Theme: Star Wars + Food Delivery
Combines galactic cantina atmosphere with modern food delivery API functionality.