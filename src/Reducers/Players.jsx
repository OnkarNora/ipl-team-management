import { addNewPlayer, addNewPlayerToTeam, removePlayerFromTeam } from '../Database';

const initialState = [
	// {
	// 	name:'msdhoni',
	// 	teamName:'csk',
	// 	age:'40',
	// 	nationality:'indian',
	// 	role:'captian'
	// },
];
const Players = (state = initialState, action) => {
	switch (action.type) {

	case 'ADD_PLAYER':
	{
		addNewPlayer(action.payload).then((value) => { console.log(value); });
		return [...state, action.payload];
	}

	case 'FETCH_PLAYERS': return action.payload;

	case 'ADD_PLAYER_TO_TEAM':
	{
		addNewPlayerToTeam(action.payload).then((value) => { console.log(value); });
		state[state.findIndex(s => s.name === action.payload.name)].team_id = action.payload.team_id;
		return state;
	}

	case 'REMOVE_PLAYER_FROM_TEAM':
	{
		removePlayerFromTeam(action.payload).then((value) => { console.log(value); });
		state[state.findIndex(s => s.name === action.payload.name)].team_id = '';
		return state;
	}

	default: return state;
	}
};
export default Players;