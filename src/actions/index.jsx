export const fetchTeams = (data) =>{
	return {
		type: 'FETCH_TEAMS',
		payload: data,
	};
};

export const fetchPlayers = (data) =>{
	return {
		type: 'FETCH_PLAYERS',
		payload: data,
	};
};

export const addTeam = (data) =>{
	return {
		type: 'ADD_TEAM',
		payload: data
	};
};

export const addPlayer = (data) =>{
	return {
		type: 'ADD_PLAYER',
		payload: data
	};
};

export const addPlayerToTeam = (data) =>{ 
	return {
		type: 'ADD_PLAYER_TO_TEAM',
		payload: data
	};
};

export const removePlayerFromTeam = (data) =>{ 
	return {
		type: 'REMOVE_PLAYER_FROM_TEAM',
		payload: data
	};

};
export const removeTeam = (data) =>{ 
	return {
		type: 'REMOVE_TEAM',
		payload: data
	};
};