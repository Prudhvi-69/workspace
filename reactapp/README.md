# 🎌 Anime Mobile Collection Manager 📱

A React application that demonstrates core React concepts through an anime and mobile phone collection manager.

## Features Implemented

### React Concepts Covered:
- **Dynamic Rendering**: Uses `map()` to render anime lists
- **Conditional Rendering**: Uses `&&` operator and ternary operators
- **useState Hook**: Manages collection, form inputs, and filter state
- **Class Components**: MobileCounter uses `this.state` and `setState`
- **Event Handling**: onClick, onChange, and onSubmit events

### App Functionality:
- Add anime with associated mobile phones to collection
- Toggle watched status for each anime
- Filter to show only watched anime
- Counter with click tracking (class component)
- Empty state handling with conditional messages

## Components Structure:
- `App.js` - Main component with useState hooks
- `AnimeList.js` - Displays list using map() and conditional rendering
- `MobileCounter.js` - Class component with state management
- `AnimeToggle.js` - Toggle component with ternary operators

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
6 comprehensive test files covering:
1. Main App functionality
2. AnimeList component rendering
3. MobileCounter class component state
4. AnimeToggle conditional rendering
5. Event handling (onClick, onChange, onSubmit)
6. useState hook state management