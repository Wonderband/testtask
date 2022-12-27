import { Component } from 'react';

export class Button extends Component {
  render() {
    return (
      <button
        id={this.props.id}
        type="button"
        className={`button ${this.props.isActive ? 'active' : ''}`}
        onClick={this.props.onClick}
      >
        {this.props.isActive ? 'following' : 'follow'}
      </button>
    );
  }
}
