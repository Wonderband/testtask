import { Component } from 'react';

export class Stats extends Component {
  render() {
    return (
      <div className="stats">
        <p className="headline">{this.props.tweets} tweets</p>
        <p>
          {new Intl.NumberFormat('en').format(this.props.followers)} followers
        </p>
      </div>
    );
  }
}
