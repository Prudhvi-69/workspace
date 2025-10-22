# 🎪 Anime Convention Mobile App Showcase Tracker 📱

A React application for tracking anime conventions and their mobile app showcases with download metrics.

## Features Implemented

### React Concepts Covered:
- **Dynamic Rendering**: Uses `map()` to render convention directory
- **Conditional Rendering**: Uses `&&` operator and ternary operators
- **useState Hook**: Manages convention collection and form inputs
- **Class Components**: AppCounter uses `this.state` and `setState`
- **Event Handling**: onClick, onChange, and onSubmit events

### App Functionality:
- Add anime conventions with location, mobile app, and download counts
- Toggle featured status for each convention (Featured/Regular)
- Filter to show only featured conventions
- App install counter with analytics (class component)
- Download count formatting (15.0K format)
- Animated CSS effects and gradients
- Empty state handling for filtered results

## Components Structure:
- `App.js` - Main component with useState hooks
- `ConventionList.js` - Displays conventions using map() and conditional rendering
- `AppCounter.js` - Class component with state management
- `EventToggle.js` - Toggle component with ternary operators

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

## Series Complete:
This is the final app (6/6) in the Anime + Mobile themed React project series!