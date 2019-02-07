import { connect } from 'react-redux';
import {change} from 'redux-form';

import { getAllStatesAndDistricts } from '../reducers/sign-up-reducer';
import { getZipCityDetails } from '../reducers/address-reducer';
import Address from '../../components/address';

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

const addressForm = connect(mapStateToProps, mapDispatchToProps)(Address);
export default addressForm;