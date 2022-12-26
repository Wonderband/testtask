import { Component } from 'react';
// import { Helmet } from 'react-helmet';
import boy from '../img/boy.png';
import logo from '../img/logo.png';
import '../index.css';

// import './App.css';

export default class App extends Component {

  state = {
    isActive: true, 
    followers: 100500,
  }

  componentDidMount() { 
    const status = localStorage.getItem('status');
    // console.log(status);
  
    this.setState({ isActive: status? true: false  });
    console.log(this.state);
  }

  componentDidUpdate(_, prevState) { 
    if (this.state.isActive === prevState.isActive) return;
    if (this.state.isActive)
      this.setState(prevState => ({ followers: prevState.followers + 1 }));
    else
      this.setState(prevState => ({ followers: prevState.followers - 1 }));
    localStorage.setItem('status', this.state.isActive, 'followers', this.state.followers)
  }

  toggleStatus = (e) => { 
    console.log(this.state);
    this.setState(prevState =>  ({isActive: !prevState.isActive }));
  }

  render() {
    return (
      <>
        
        <div className="container">
          <div className="card">
            <img className="logo" src={logo} alt="nologo" />
            <div className="divider"></div>
            <img className="circle" src={boy} alt="boy" />
            <div className="stats">
              <p className="headline">777 tweets</p>
              <p>{`${100},${500} followers`}</p>
            </div>
            <button type="button" className={`button ${this.state.isActive ? 'active' : ''}`}
            onClick={ this.toggleStatus}>follow</button>
          </div>
        </div>          
      </>
    );
  }
}


