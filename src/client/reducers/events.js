import {
    EVENTS, FETCH
} from '../constants';
import get from "lodash/get";
import {createSelector} from 'reselect';

const initialState = {}
export default (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case FETCH + EVENTS:
            return {
                ...state,
                eventsSelect: payload
            }
        default:
            return state;
    }
};

export const stateSelector = (state) => get(state, 'events', {});
export const selectedEventSelector = createSelector(stateSelector, (reducer) => get(reducer, 'eventsSelect', {}));



