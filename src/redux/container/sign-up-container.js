import { connect } from 'react-redux';
import { getAllStates } from '../sign-up-reducer';
import SignUpDetails from '../../components/sign-up-details';

const mapStateToProps = state => {
    return {
        gitData: state.signUp.gitData
    };
}

const mapDispatchToProps = dispatch => ({
    getAllStates: username => dispatch(getAllStates(username))
})

const signUpForm = connect(mapStateToProps, mapDispatchToProps)(SignUpDetails);
export default signUpForm;