import { Component } from 'react'
import boy from '../img/boy.png';
import logo from '../img/logo.png';
import '../index.css';

export default class App extends Component {

  state = {
    isActive: false, 
    followers: 100500,
  }

  componentDidMount() { 
    const stats = JSON.parse(localStorage.getItem('stats'));   
    if (stats)
      this.setState({ isActive: stats.state, followers: stats.followers });   
  }

  componentDidUpdate() { 
    localStorage.setItem('stats', JSON.stringify({
      'state': this.state.isActive,
      'followers': this.state.followers,
      }));       
  }   

  toggleStatus = (e) => {    
    this.setState(prevState => ({
      isActive: !prevState.isActive,
      followers: !prevState.isActive ? prevState.followers + 1 : prevState.followers - 1,
    }));  
  }

  render() {
    return (       
      <div className="container">
        <div className="card">
          <img className="logo" src={logo} alt="nologo" />
          <div className="divider"></div>
          <img className="circle" src={boy} alt="boy" />
          <div className="stats">
            <p className="headline">777 tweets</p>
            <p>{Math.floor(this.state.followers / 1000)},{this.state.followers % 1000} followers</p>
          </div>
          <button type="button" className={`button ${this.state.isActive ? 'active' : ''}`}
            onClick={this.toggleStatus}>{this.state.isActive ? 'following' : 'follow'}
          </button>
        </div>
      </div>     
    );
  }
}


