import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

import SignUpReducer from '../redux/sign-up-reducer';

const rootReducer = combineReducers({
    form: formReducer,
    signUp: SignUpReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;