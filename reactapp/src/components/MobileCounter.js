import React, { Component } from 'react';

class MobileCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      isVisible: true
    };
  }

  handleCounterClick = () => {
    this.setState(prevState => ({
      clickCount: prevState.clickCount + 1
    }));
  };

  toggleVisibility = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
  };

  render() {
    const { animeCount } = this.props;
    const { clickCount, isVisible } = this.state;

    return (
      <div className="counter-section">
        <h3>📊 Collection Stats</h3>
        {isVisible && (
          <div>
            <p>Total Anime-Mobile Pairs: <strong>{animeCount}</strong></p>
            <p>Counter Clicks: <strong>{clickCount}</strong></p>
            <button onClick={this.handleCounterClick}>
              📱 Count Mobile Taps: {clickCount}
            </button>
          </div>
        )}
        <button onClick={this.toggleVisibility}>
          {isVisible ? '🙈 Hide Stats' : '👁️ Show Stats'}
        </button>
      </div>
    );
  }
}

export default MobileCounter;