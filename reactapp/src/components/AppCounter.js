import React, { Component } from 'react';

class AppCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appInstalls: 0,
      showStats: true
    };
  }

  handleInstall = () => {
    this.setState(prevState => ({
      appInstalls: prevState.appInstalls + 1
    }));
  };

  toggleStats = () => {
    this.setState(prevState => ({
      showStats: !prevState.showStats
    }));
  };

  render() {
    const { conventionCount } = this.props;
    const { appInstalls, showStats } = this.state;

    return (
      <div className="counter-section">
        <h3>📊 Convention Analytics</h3>
        {showStats && (
          <div>
            <p>Total Conventions: <strong>{conventionCount}</strong></p>
            <p>App Installs: <strong>{appInstalls}</strong></p>
            <button onClick={this.handleInstall}>
              📲 Install App: {appInstalls}
            </button>
          </div>
        )}
        <button onClick={this.toggleStats}>
          {showStats ? '🙈 Hide Analytics' : '👁️ Show Analytics'}
        </button>
      </div>
    );
  }
}

export default AppCounter;