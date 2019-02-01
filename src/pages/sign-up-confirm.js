import React, {Component} from 'react';

class SignUpConfirm extends Component {
    routeToSignIn = () => {
        this.props.history.push('/sign-in');
    }

    render() {
        return (
            <div className="App">
            <p>Thank You for Sign Up !</p>
            <p><a href="#" onClick={this.routeToSignIn}>Go Back to Login</a></p>
            </div>
        )
    }
}
export default SignUpConfirm;