import React, { Component } from 'react';
import { Field } from 'redux-form';
import { required, renderInputField } from '../components/form/pk-form';
import RenderSelect from '../components/form/render-select';
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
        let { zipCode, locationState, city, routeToConfirm } = this.props;
        let isEnabled = zipCode && zipCode.length > 5 && locationState && city;

        return (
            <div className="App">
                <Field name="username"
                    className="form-group"
                    type="text"
                    component={renderInputField}
                    label="Username"
                    validate={required}
                />
                <Field
                    className="form-group"
                    component={RenderSelect}
                    name="stateName"
                    label="State"
                    validate={required}
                    option={statesLists}
                >
                </Field>
                <Field
                    className="form-group"
                    component={renderInputField}
                    name='district'
                    type='text'
                    label='District'
                    validate={required} />
                <Field
                    className="form-group"
                    component={renderInputField}
                    name='zip'
                    type='text'
                    label='Zip Code'
                    onChange={this.getZipDetails}
                    validate={required}
                />
                <div className="form-group">
                    <button onClick={routeToConfirm} className="btn btn-primary"
                        disabled={!isEnabled}>Sign Up</button>
                </div>

            </div>
        )
    }
}

export default Address;