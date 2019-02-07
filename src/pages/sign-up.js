import React, {Component} from 'react';
import { reduxForm } from 'redux-form';

import AddressContainer from '../redux/container/address-container';

class SignUp extends Component {
    routeToConfirm = () => {
        this.props.history.push('/sign-up-confirm');
    }

    render() {
        return (
            <form>
            <AddressContainer 
            routeToConfirm={this.routeToConfirm}/>
            </form>
        )
    }
}
export default reduxForm({
    form: 'signup'
})(SignUp);