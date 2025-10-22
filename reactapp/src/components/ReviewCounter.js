import React, { Component } from 'react';

class ReviewCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewLikes: 0,
      showMetrics: true
    };
  }

  handleLike = () => {
    this.setState(prevState => ({
      reviewLikes: prevState.reviewLikes + 1
    }));
  };

  toggleMetrics = () => {
    this.setState(prevState => ({
      showMetrics: !prevState.showMetrics
    }));
  };

  render() {
    const { actorCount } = this.props;
    const { reviewLikes, showMetrics } = this.state;

    return (
      <div className="counter-section">
        <h3>📊 Review Metrics</h3>
        {showMetrics && (
          <div>
            <p>Total Voice Actors: <strong>{actorCount}</strong></p>
            <p>Review Likes: <strong>{reviewLikes}</strong></p>
            <button onClick={this.handleLike}>
              👍 Like Review: {reviewLikes}
            </button>
          </div>
        )}
        <button onClick={this.toggleMetrics}>
          {showMetrics ? '🙈 Hide Metrics' : '👁️ Show Metrics'}
        </button>
      </div>
    );
  }
}

export default ReviewCounter;