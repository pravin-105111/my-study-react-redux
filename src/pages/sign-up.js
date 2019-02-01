import React, {Component} from 'react';

class SignUp extends Component {
    routeToConfirm = () => {
        this.props.history.push('/sign-up-confirm');
    }
    render() {
        return (
            <div className="App"> 
            <button onClick={this.routeToConfirm}>Sign Up</button>
            </div>
        )
    }
}
export default SignUp;