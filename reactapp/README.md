# 🦸 Marvel Heroes Mission API Tracker ⚡

A React application demonstrating comprehensive API integration with Marvel-themed hero management system.

## API Features Implemented

### Core API Concepts:
- **Fetch API GET Requests**: Fetches hero registry from mock API
- **Fetch API POST Requests**: Registers new heroes with S.H.I.E.L.D.
- **Fetch API PUT Requests**: Updates hero status (Active/Inactive)
- **Error Handling**: Comprehensive error handling for all API operations
- **Loading States**: S.H.I.E.L.D. shield spinner animation
- **Success States**: Confirmation messages for completed operations

### App Functionality:
- Fetch hero registry from mock API (GET requests)
- Register new heroes with S.H.I.E.L.D. (POST requests)
- Update hero status Active/Inactive (PUT requests)
- Display Marvel-themed loading animations
- Handle and display API errors with Marvel references
- Show success messages for completed operations
- Hero power level tracking (1-100)
- Marvel team assignment system

## API Integration Details:
- **GET Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **POST Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **PUT Endpoint**: `https://jsonplaceholder.typicode.com/users/{id}`
- **Error Handling**: Network errors, server errors, response validation
- **Loading States**: S.H.I.E.L.D. shield spinner with superhero colors
- **Data Transformation**: Maps API responses to Marvel hero data structure

## Components Structure:
- `App.js` - Main component with comprehensive Fetch API integration
- `HeroList.js` - Displays heroes with status update functionality
- `MissionForm.js` - Form for POST requests with Marvel team selection
- `MarvelLoader.js` - Loading state with S.H.I.E.L.D. shield animation

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
2. POST requests with hero registration
3. PUT requests with status updates
4. Loading state with S.H.I.E.L.D. animations
5. Error handling for failed requests
6. Success state handling

## Theme: Marvel Heroes & S.H.I.E.L.D. Management
Pure Marvel aesthetic with superhero colors, S.H.I.E.L.D. branding, and comprehensive hero management features.