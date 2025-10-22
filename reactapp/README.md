# 🎬 Anime Studio Mobile Game Tracker 🎮

A React application for tracking anime studios and their mobile game development projects.

## Features Implemented

### React Concepts Covered:
- **Dynamic Rendering**: Uses `map()` to render studio game database
- **Conditional Rendering**: Uses `&&` operator and ternary operators
- **useState Hook**: Manages studio collection and form inputs
- **Class Components**: GameCounter uses `this.state` and `setState`
- **Event Handling**: onClick, onChange, and onSubmit events

### App Functionality:
- Add anime studios with their mobile game projects
- Toggle release status for each game
- Filter to show only released games
- Game download counter with analytics (class component)
- Empty state handling for filtered results

## Components Structure:
- `App.js` - Main component with useState hooks
- `StudioList.js` - Displays studios using map() and conditional rendering
- `GameCounter.js` - Class component with state management
- `PlatformToggle.js` - Toggle component with ternary operators

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