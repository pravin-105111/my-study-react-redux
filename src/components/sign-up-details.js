import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SignUpDetails extends Component {
    componentDidMount() {
        this.props.getAllStatesAndDistricts();
    }

    render() {
        let { statesAndCity, routeToConfirm, stateName } = this.props;
        console.log('gitData===', stateName);
        let states = statesAndCity && statesAndCity.map(st => { return st.state });
        console.log('state==', states);

        let districts = stateName && statesAndCity && statesAndCity.filter(st=> st.state===stateName).map(st => { return st.districts });
        
        console.log('dist==', districts);
        return (
            <div className="App">
                <div>
                    <label>State:</label>
                    <div>
                        <Field
                            component="select"
                            name="stateName"
                        >
                        <option value="">Select a state...</option>
                        {states && states.map(state => 
                        <option value={state}>{state}</option>
                        )}
                        </Field>
                    </div>
                    <label>District:</label>
                    <div>
                        <Field
                            component="select"
                            name="district"
                        >
                        <option value="">Select a district...</option>
                        {districts && districts[0].map(dist => 
                        <option value={dist}>{dist}</option>
                        )}
                        </Field>
                    </div>
                </div>
                <button onClick={routeToConfirm}>Sign Up</button>
            </div>
        )
    }
}

export default reduxForm({
    form: 'signup'
})(SignUpDetails);