# 🎭 Anime Character Phone Specs Tracker 📱

A React application for tracking anime characters and their preferred mobile phone specifications and brands.

## Features Implemented

### React Concepts Covered:
- **Dynamic Rendering**: Uses `map()` to render character database
- **Conditional Rendering**: Uses `&&` operator and ternary operators
- **useState Hook**: Manages character collection and form inputs
- **Class Components**: SpecsCounter uses `this.state` and `setState`
- **Event Handling**: onClick, onChange, and onSubmit events

### App Functionality:
- Add anime characters with phone brand and specifications
- Toggle premium status for each character
- Filter to show only premium phone users
- Spec view counter with analytics (class component)
- Empty state handling for filtered results

## Components Structure:
- `App.js` - Main component with useState hooks
- `CharacterList.js` - Displays characters using map() and conditional rendering
- `SpecsCounter.js` - Class component with state management
- `BrandToggle.js` - Toggle component with ternary operators

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