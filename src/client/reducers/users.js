import {
    REQUEST, UPDATE, ESTABLISHMENT, TITLE, FILTER, CITY, FETCH, USERS
} from '../constants';
import {createSelector} from 'reselect'

const initialState = {
}

export default (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case FETCH + USERS:
            return {
                ...state,
                users: payload,
            }
        default:
            return state;
    }
};

//export const stateSelector = (state) => state['establishment'];
//export const currentSelector = createSelector(stateSelector, (establishment) => establishment['establishmentSelect']);


