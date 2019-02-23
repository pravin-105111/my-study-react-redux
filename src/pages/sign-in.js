import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, renderInputField } from '../components/form/pk-form';

class SignIn extends Component {
    routeToInfo = () => {
        this.props.history.push('/info');
    }

    routeToSignUp = () => {
        this.props.history.push('/sign-up');
    }

    render() {
        return (
            <form>
                <div className="App">
                    <div className="form-group">
                        <Field
                            component={renderInputField}
                            name="username"
                            type="text"
                            label="Username"
                            validate={required}
                        />
                    </div>
                    <div className="form-group">
                        <Field
                            component={renderInputField}
                            name="password"
                            label="Password"
                            type="password"
                            validate={required}
                        />
                    </div>
                    <div className="form-group">
                        <button onClick={this.routeToInfo} className="btn btn-primary">Login</button>
                    </div>
                    <div className="form-group">
                        <button onClick={this.routeToSignUp} className="btn btn-primary">Sign Up</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default reduxForm({
    form: 'signin'
})(SignIn);