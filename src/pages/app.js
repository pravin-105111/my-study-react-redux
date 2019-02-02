import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  routeToSignIn = () => {
    this.props.history.push('/sign-in');
}
routeToSignUp = () => {
  this.props.history.push('/sign-up');
}
  render() {
    return (
      <div>
        <p>
          <a href="#" onClick={this.routeToSignIn}>Sign In</a>
          </p>
        <p>
          <a href="#" onClick={this.routeToSignUp}>Sign Up</a>
          </p>
      </div>
    );
  }
}

export default App;
