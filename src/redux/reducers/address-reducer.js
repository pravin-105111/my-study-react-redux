import axios from 'axios';

export const GET_ZIP_CITY = 'GET_ZIP_CITY';
export const GET_ZIP_CITY_SUCCESS = 'GET_ZIP_CITY_SUCCESS';
export const GET_ZIP_CITY_ERROR = 'GET_ZIP_CITY_ERROR';

export const getZipCityDetails = zipCode => {
    return function getZipDetails(dispatch) {
        dispatch(fetchZipCity);

        const ROOT_URL = `https://pincode.saratchandra.in/api/pincode/${zipCode}`;
        return axios({
            method: 'GET',
            url: ROOT_URL
        }).then(
            response => {
                dispatch(fetchZipCitySuccess(response))
            }).catch(error => {
                dispatch(fetchZipCityFailed(error))
            });
    }
}



export const fetchZipCity = () => {
    return {
        type: GET_ZIP_CITY
    }
}

export const fetchZipCitySuccess = response => {
    return {
        type: GET_ZIP_CITY_SUCCESS,
        response
    }
}

export const fetchZipCityFailed = error => {
    return {
        type: GET_ZIP_CITY_ERROR,
        error
    }
}

const initialStates = {
    zipCityList: {}
}

export default function reducer(state = initialStates, action = '') {
    switch(action.type) {
        case GET_ZIP_CITY:
        return {
            ...state
        };
        case GET_ZIP_CITY_SUCCESS:
        return {
            ...state, zipCityList: action.response.data.data
        };
        case GET_ZIP_CITY_ERROR:
        return {
            ...state, error: action.response
        };
        default:
        return state;
    }
}