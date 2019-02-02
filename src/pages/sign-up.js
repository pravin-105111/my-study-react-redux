import React, {Component} from 'react';

import SignUpContainer from '../redux/container/sign-up-container';

class SignUp extends Component {
    routeToConfirm = () => {
        this.props.history.push('/sign-up-confirm');
    }

    render() {
        return (
            <SignUpContainer 
            routeToConfirm={this.routeToConfirm}/>
        )
    }
}
export default SignUp;