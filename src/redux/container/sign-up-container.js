import { connect } from 'react-redux';
import {formValueSelector} from 'redux-form';

import { getAllStatesAndDistricts } from '../sign-up-reducer';
import SignUpDetails from '../../components/sign-up-details';

const selector = formValueSelector('signup');
const mapStateToProps = state => {
    return {
        statesAndCity: state.signUp.statesAndCity,
        stateName: selector(state, 'stateName')
    };
}

const mapDispatchToProps = dispatch => ({
    getAllStatesAndDistricts: () => dispatch(getAllStatesAndDistricts())
})

const signUpForm = connect(mapStateToProps, mapDispatchToProps)(SignUpDetails);
export default signUpForm;