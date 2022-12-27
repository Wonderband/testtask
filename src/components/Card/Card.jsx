import { Component } from 'react';

import hansel from '../../img/hansel.png';
import logo from '../../img/logo.png';
import { Stats } from 'components/Stats/Stats';
import { Button } from 'components/Button/Button';

export class Card extends Component {
  render() {
    return (
      <div className="card">
        <img className="logo" src={logo} alt="nologo" />
        <div className="divider"></div>
        <div className="avatar">
          <img className="face" src={hansel} alt="boy" />
        </div>
        <Stats
          id={this.props.id}
          followers={this.props.followers}
          tweets={this.props.tweets}
        />
        <Button
          id={this.props.id}
          isActive={this.props.isActive}
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}
