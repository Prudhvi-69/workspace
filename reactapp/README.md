# 👨🍳 Gourmet Food Recipe API Manager 🍽️

A React application demonstrating comprehensive API integration with food recipe management system.

## API Features Implemented

### Core API Concepts:
- **Axios GET Requests**: Fetches recipe database from mock API
- **Axios POST Requests**: Adds new recipes to cookbook
- **Axios DELETE Requests**: Removes recipes from database
- **Error Handling**: Comprehensive error handling for all API operations
- **Loading States**: Cooking animation during API calls
- **Success States**: Confirmation messages for completed operations

### App Functionality:
- Fetch recipe collection from mock API (GET requests)
- Add new recipes to cookbook (POST requests)
- Delete recipes from database (DELETE requests)
- Display cooking-themed loading animations
- Handle and display API errors with food-themed messages
- Show success messages for completed operations
- Recipe rating and difficulty system
- Availability status tracking

## API Integration Details:
- **GET Endpoint**: `https://jsonplaceholder.typicode.com/posts`
- **POST Endpoint**: `https://jsonplaceholder.typicode.com/posts`
- **DELETE Endpoint**: `https://jsonplaceholder.typicode.com/posts/{id}`
- **Error Handling**: Network errors, server errors, timeout handling
- **Loading States**: Animated cooking pots with steam effects
- **Data Transformation**: Maps API responses to recipe data structure

## Components Structure:
- `App.js` - Main component with comprehensive API integration
- `RecipeList.js` - Displays recipes with delete functionality
- `RecipeForm.js` - Form for POST requests with validation
- `CookingLoader.js` - Loading state with cooking animations

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
3. DELETE requests with recipe removal
4. Loading state with cooking animations
5. Error handling for failed requests
6. Success state handling

## Theme: Gourmet Food Recipe Management
Pure food-themed interface with warm colors, cooking animations, and comprehensive recipe management features.