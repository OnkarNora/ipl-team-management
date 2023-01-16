import { addNewTeam, removeTeam } from '../Database.js';

const initialState = [

];

const Teams = (state = initialState, action) => {
	switch (action.type) {

	case 'ADD_TEAM': {
		addNewTeam(action.payload).then((value) => { console.log(value,'added : ',action.payload); });
		return [...state, action.payload];
	}

	case 'REMOVE_TEAM': {
		removeTeam(action.payload).then((value) => { console.log(value,'removeed : ',action.payload); });
		state = state.filter((val)=>{return val.team_id != action.payload;});
		return state;
	}

	case 'FETCH_TEAMS': return action.payload;

	default: return state;
	}
};
export default Teams;