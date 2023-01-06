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

export const addPlayerToTeam = (data) =>{ // data here is in format {name:"player's name who will get added", team:"team name to which player gets added"}
	return {
		type: 'ADD_PLAYER_TO_TEAM',
		payload: data
	};
};