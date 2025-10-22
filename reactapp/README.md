# 🎤 Anime Voice Actor Phone Review Tracker 📱

A React application for tracking anime voice actors and their mobile phone reviews with ratings.

## Features Implemented

### React Concepts Covered:
- **Dynamic Rendering**: Uses `map()` to render voice actor review database
- **Conditional Rendering**: Uses `&&` operator and ternary operators
- **useState Hook**: Manages actor collection and form inputs
- **Class Components**: ReviewCounter uses `this.state` and `setState`
- **Event Handling**: onClick, onChange, and onSubmit events

### App Functionality:
- Add voice actors with character, phone model, and ratings
- Toggle verification status for each review
- Filter to show only verified reviews
- Review like counter with metrics (class component)
- Star rating display system
- Empty state handling for filtered results

## Components Structure:
- `App.js` - Main component with useState hooks
- `ActorList.js` - Displays actors using map() and conditional rendering
- `ReviewCounter.js` - Class component with state management
- `RatingToggle.js` - Toggle component with ternary operators

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
6 comprehensive test cases covering all React concepts and functionality.