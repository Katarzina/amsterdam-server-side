import { combineReducers } from 'redux'
import establishment from './establishment'
import events from './events'
import details from './details'
//import users from './users'

const rootReducer = combineReducers({
	establishment,
	details,
	events,
    //users
});

export default rootReducer;
