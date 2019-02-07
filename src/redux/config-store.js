import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

import SignUpReducer from '../redux/reducers/sign-up-reducer';
import AddressReducer from '../redux/reducers/address-reducer';

const rootReducer = combineReducers({
    form: formReducer,
    signUp: SignUpReducer,
    address: AddressReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;