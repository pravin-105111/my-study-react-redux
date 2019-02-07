import React, { Component } from 'react';
import { Field } from 'redux-form';
import { statesLists } from '../util/state-city-constant';

class Address extends Component {

    componentDidUpdate() {
        let { zipCode, locationState, city, zipChanged } = this.props;

        if (zipCode && locationState && city) {
            zipChanged('stateName', locationState);
            zipChanged('zip', zipCode);
            zipChanged('district', city);
        }
    }

    getZipDetails = event => {
        if (event.target.value && event.target.value.length === 6) {
            this.props.getZipCityDetails(event.target.value);
        }

    }

    render() {
        let { routeToConfirm } = this.props;

        return (
            <div className="App">
                <label>State:</label>
                <div>
                    <Field
                        component="select"
                        name="stateName"
                    >
                        <option value="">Select a state...</option>
                        {statesLists.map(state =>
                            <option value={state}>{state}</option>
                        )}
                    </Field>
                </div>
                <label>District:</label>
                <div>
                    <Field
                        component='input'
                        name='district'
                        type='text' />
                </div>
                <div>
                    <label>Zip Code</label>
                    <div>
                        <Field
                            component='input'
                            name='zip'
                            type='text'
                            onChange={this.getZipDetails}
                        />
                    </div>
                </div>
                <button onClick={routeToConfirm}>Sign Up</button>
            </div>
        )
    }
}

export default Address;