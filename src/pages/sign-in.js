import React, { Component } from 'react';

class SignIn extends Component {
    routeToInfo = () => {
        this.props.history.push('/info');
    }

    routeToSignUp = () => {
        this.props.history.push('/sign-up');
    }

    render() {
        return (
            <div className="App">
                <div>
                    <button onClick={this.routeToInfo}>Login</button>
                </div>
                <div>
                    <button onClick={this.routeToSignUp}>Sign Up</button>
                </div>
            </div>
        )
    }
}
export default SignIn;