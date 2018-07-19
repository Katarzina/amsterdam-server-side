import {
    UPDATE, ESTABLISHMENT, FILTER, LOAD, INFO, COORDINATE, TITLE, FETCH, USERS
} from '../constants'
import axios from 'axios'

const A = (type) => (payload) => ({ type, payload });

export const updateArrayEstablishment = A(UPDATE + ESTABLISHMENT);

export const updateFilterEstablishment = A(UPDATE + FILTER + ESTABLISHMENT)

export const loadInfoEstablishment = A(LOAD + INFO)

export const loadCoordinate = A(LOAD + COORDINATE)

export const updateTitle = A(UPDATE + FILTER + TITLE)

export const receiveQuery = (type, payload) => ({
    type: type,
    payload
})

export const fetchEstablishments = () => async (dispatch) => {

    const res = await axios.get('http://localhost:3004/establishment');
    dispatch({
        type: FETCH + USERS,
        payload: res.data
    });
};


