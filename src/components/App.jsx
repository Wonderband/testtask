import { Component } from 'react';
import { Card } from './Card/Card';
import '../index.css';
import data from '../data/users.json';

export default class App extends Component {
  state = {
    data: data.users.map(user => {
      return { id: user.id, isActive: false, followers: user.followers };
    }),
  };

  componentDidMount() {
    const stats = JSON.parse(localStorage.getItem('stats'));
    if (stats) this.setState({ data: stats });
  }

  componentDidUpdate() {
    localStorage.setItem('stats', JSON.stringify(this.state.data));
  }

  toggleStatus = e => {
    console.log(e.target.id);
    console.log(this.state.data[e.target.id - 1]);
    const idNumber = this.state.data[e.target.id - 1].id;
    console.log(idNumber);
    this.setState(prevState => {
      return {
        data: prevState.data.map(el =>
          el.id === idNumber
            ? {
                id: el.id,
                isActive: !el.isActive,
                followers: el.isActive ? el.followers - 1 : el.followers + 1,
              }
            : el
        ),
      };
    });
  };

  render() {
    return (
      <div className="container">
        <ul className="usersList">
          {data.users.map((user, idx) => {
            return (
              <li key={user.id}>
                <Card
                  id={user.id}
                  isActive={this.state.data[idx].isActive}
                  followers={this.state.data[idx].followers}
                  onClick={this.toggleStatus}
                  tweets={user.tweets}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
