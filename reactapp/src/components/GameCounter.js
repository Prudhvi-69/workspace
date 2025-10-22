import React, { Component } from 'react';

class GameCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameDownloads: 0,
      showStats: true
    };
  }

  handleDownload = () => {
    this.setState(prevState => ({
      gameDownloads: prevState.gameDownloads + 1
    }));
  };

  toggleStats = () => {
    this.setState(prevState => ({
      showStats: !prevState.showStats
    }));
  };

  render() {
    const { studioCount } = this.props;
    const { gameDownloads, showStats } = this.state;

    return (
      <div className="counter-section">
        <h3>📊 Game Studio Analytics</h3>
        {showStats && (
          <div>
            <p>Total Studios: <strong>{studioCount}</strong></p>
            <p>Game Downloads: <strong>{gameDownloads}</strong></p>
            <button onClick={this.handleDownload}>
              🎮 Download Game: {gameDownloads}
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

export default GameCounter;