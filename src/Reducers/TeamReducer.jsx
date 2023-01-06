import { addNewTeam } from '../Database.js';

const initialState = [

];

const TeamReducer = (state = initialState, action) => {
	switch (action.type) {

	case 'ADD_TEAM': {
		addNewTeam(action.payload).then((value) => { console.log(value); });
		return [...state, action.payload];
	}

	case 'FETCH_TEAMS': return action.payload;

	default: return state;
	}
};
export default TeamReducer;