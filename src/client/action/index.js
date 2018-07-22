import {
    UPDATE, ESTABLISHMENT, FILTER, LOAD, INFO, COORDINATE, TITLE, FETCH, EVENTS
} from '../constants'

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

export const fetchEstablishments = () => async (dispatch, getState, api) => {

    const res = await api.get('/establishment');
    dispatch({
        type: FETCH + ESTABLISHMENT,
        payload: res.data
    });
};

export const fetchEvents = () => async (dispatch, getState, api) => {

    const res = await api.get('/events');
    dispatch({
        type: FETCH + EVENTS,
        payload: res.data
    });
};


