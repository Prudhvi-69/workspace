# 🛍️ Anime Merchandise Mobile Store Tracker 📱

A React application for tracking anime merchandise availability in mobile stores with pricing.

## Features Implemented

### React Concepts Covered:
- **Dynamic Rendering**: Uses `map()` to render merchandise inventory
- **Conditional Rendering**: Uses `&&` operator and ternary operators
- **useState Hook**: Manages merchandise collection and form inputs
- **Class Components**: StoreCounter uses `this.state` and `setState`
- **Event Handling**: onClick, onChange, and onSubmit events

### App Functionality:
- Add anime merchandise with series, store, and pricing
- Toggle stock status for each item (In Stock/Out of Stock)
- Filter to show only in-stock merchandise
- Purchase counter with store analytics (class component)
- Price display with currency formatting
- Empty state handling for filtered results

## Components Structure:
- `App.js` - Main component with useState hooks
- `MerchList.js` - Displays merchandise using map() and conditional rendering
- `StoreCounter.js` - Class component with state management
- `StockToggle.js` - Toggle component with ternary operators

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