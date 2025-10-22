import React, { Component } from 'react';

class SpecsCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specViews: 0,
      showDetails: true
    };
  }

  handleSpecView = () => {
    this.setState(prevState => ({
      specViews: prevState.specViews + 1
    }));
  };

  toggleDetails = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  };

  render() {
    const { characterCount } = this.props;
    const { specViews, showDetails } = this.state;

    return (
      <div className="counter-section">
        <h3>📊 Database Analytics</h3>
        {showDetails && (
          <div>
            <p>Total Characters: <strong>{characterCount}</strong></p>
            <p>Spec Views: <strong>{specViews}</strong></p>
            <button onClick={this.handleSpecView}>
              📱 View Specs: {specViews}
            </button>
          </div>
        )}
        <button onClick={this.toggleDetails}>
          {showDetails ? '🙈 Hide Analytics' : '👁️ Show Analytics'}
        </button>
      </div>
    );
  }
}

export default SpecsCounter;