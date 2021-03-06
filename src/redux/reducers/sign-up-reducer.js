import axios from 'axios';

export const GET_STATES_LIST = 'GET_STATES_LIST';
export const GET_STATES_LIST_SUCCESS = 'GET_STATES_LIST_SUCCES';
export const GET_STATES_LIST_ERROR = 'GET_STATES_LIST_ERROR';

export const getAllStatesAndDistricts = () => {
    return function getStates(dispatch) {
        dispatch(fetchStateList());
        const ROOT_URL = `https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/master/states-and-districts.json`;
        return axios({
            method: 'GET',
            url: ROOT_URL
        })
            .then(response => {
                dispatch(fetchStateListSuccess(response))
            })
            .catch(error => {
                dispatch(fetchStateListFailed(error))
            });
    }
}

export const fetchStateList = () => {
    return {
        type: GET_STATES_LIST
    }
}

export const fetchStateListSuccess = response => {
    return {
        type: GET_STATES_LIST_SUCCESS,
        response
    }
}

export const fetchStateListFailed = error => {
    return {
        type: GET_STATES_LIST_ERROR,
        error
    }
}

const initialStates = {
    states: []
}
export default function (state = initialStates, action = '') {
    console.log('response', action.response);
    switch (action.type) {
        case GET_STATES_LIST_SUCCESS:
            return {
                ...state, statesAndCity: action.response.data.states
            };
        case GET_STATES_LIST_ERROR:
            return {
                ...state, error: action.error
            }
        default:
            return state;
    }
}