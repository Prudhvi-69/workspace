import React, { Component } from 'react';

class StoreCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchases: 0,
      showSales: true
    };
  }

  handlePurchase = () => {
    this.setState(prevState => ({
      purchases: prevState.purchases + 1
    }));
  };

  toggleSales = () => {
    this.setState(prevState => ({
      showSales: !prevState.showSales
    }));
  };

  render() {
    const { merchCount } = this.props;
    const { purchases, showSales } = this.state;

    return (
      <div className="counter-section">
        <h3>📊 Store Analytics</h3>
        {showSales && (
          <div>
            <p>Total Merchandise: <strong>{merchCount}</strong></p>
            <p>Total Purchases: <strong>{purchases}</strong></p>
            <button onClick={this.handlePurchase}>
              🛒 Make Purchase: {purchases}
            </button>
          </div>
        )}
        <button onClick={this.toggleSales}>
          {showSales ? '🙈 Hide Analytics' : '👁️ Show Analytics'}
        </button>
      </div>
    );
  }
}

export default StoreCounter;