import React, { Component } from 'react';
import { Field } from 'redux-form';
import { required, renderInputField } from '../components/form/pk-form';
//import RenderSelect from '../components/form/render-select';
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
        //let { zipCode, locationState, city } = this.props;
        //let isEnabled = zipCode && zipCode.length > 5 && locationState && city;

        return (
            <div className="container">
                <div className="row">
                    <Field
                        className="col"
                        component={renderInputField}
                        name='addressLin1'
                        type='text'
                        label='Street Line 1'
                        onChange={this.getZipDetails}
                        validate={required}
                    />
                    <Field
                        className="col"
                        component={renderInputField}
                        name='addressLin2'
                        type='text'
                        label='Street Line 2'
                        validate={required} />
                </div>
                <div className="row">
                    <Field
                        className="col"
                        component={renderInputField}
                        name='zip'
                        type='text'
                        label='Zip Code'
                        onChange={this.getZipDetails}
                        validate={required}
                    />
                    <Field
                        className="col"
                        component={renderInputField}
                        name='district'
                        type='text'
                        label='District'
                        validate={required} />
                    <div>
                        <label>State:</label>
                        <div  >
                            <Field
                                className="col"
                                component="select"
                                name="stateName"
                            >
                                <option value="">Select a state...</option>
                                {statesLists.map(state =>
                                    <option value={state}>{state}</option>
                                )}
                            </Field>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Address;