import { connect } from 'react-redux';
import {change} from 'redux-form';

import { getAllStatesAndDistricts } from '../reducers/sign-up-reducer';
import { getZipCityDetails } from '../reducers/address-reducer';
import SignUpDetails from '../../components/sign-up-details';

const mapStateToProps = state => {
    return {
        statesAndCity: state.signUp.statesAndCity,
        locationState: state.address.zipCityList[0] && state.address.zipCityList[0].state_name,
        zipCode: state.address.zipCityList[0] && state.address.zipCityList[0].pincode,
        city: state.address.zipCityList[0] && state.address.zipCityList[0].district,
    };
}

const mapDispatchToProps = dispatch => ({
    getAllStatesAndDistricts: () => dispatch(getAllStatesAndDistricts()),
    getZipCityDetails: zipCode => dispatch(getZipCityDetails(zipCode)),
    zipChanged: (key, value) => dispatch(change('signup', key, value))
})

const signUpForm = connect(mapStateToProps, mapDispatchToProps)(SignUpDetails);
export default signUpForm;