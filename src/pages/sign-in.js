import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

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
                    <div>
                        <label>Username:</label>
                        <div>
                            <Field
                                component="input"
                                name="username"
                                type="text"
                                placeholder="username"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Password:</label>
                        <div>
                            <Field
                                component="input"
                                name="password"
                                type="password"
                            />
                        </div>
                    </div>
                    <div>
                        <button onClick={this.routeToInfo}>Login</button>
                    </div>
                    <div>
                        <button onClick={this.routeToSignUp}>Sign Up</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default reduxForm({
    form: 'signin'
})(SignIn);