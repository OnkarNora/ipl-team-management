import Players from './Players';
import Teams from './Teams';

import { combineReducers } from 'redux';

const rootReducer = combineReducers ({
	Players,
	Teams,
});

export default rootReducer;