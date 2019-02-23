import React, {Component} from 'react';
import { reduxForm } from 'redux-form';

import AddressContainer from '../redux/container/address-container';

class SignUp extends Component {
    routeToConfirm = () => {
        this.props.history.push('/sign-up-confirm');
    }

    render() {
        return (
            <form className="py-lg-3">
            <AddressContainer />
             <div className="App py-lg-3">
                    <button  onClick={this.routeToConfirm} className="btn btn-primary"
                        >Sign Up</button>
                </div>
            </form>
        )
    }
}
export default reduxForm({
    form: 'signup'
})(SignUp);