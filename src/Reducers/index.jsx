import PlayerReducer from './PlayerReducer';
import TeamReducer from './TeamReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers ({
	PlayerReducer,
	TeamReducer,
});

export default rootReducer;