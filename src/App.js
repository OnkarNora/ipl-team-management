import './App.css';
import React,{useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/app/Login';
import TeamListingPage from './Components/app/TeamListingPage';
import PlayersListingPage from './Components/app/PlayersListingPage';
import Register from './Components/app//Register';
import AddPlayer from './Components/app/AddPlayer';
import AddTeam from './Components/app//AddTeam';
import {fetchPlayersDB, fetchTeamsDB} from './Database';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth} from './firebase';
import { fetchTeams, fetchPlayers } from './actions/index';
import { useDispatch } from 'react-redux';
import AddPlayerToTeam from './Components/app/AddPlayerToTeam';

function App() {

	const [user] = useAuthState(auth);
	const dispatch = useDispatch();

	useEffect(() => {

		fetchTeamsDB(user).then(async (teams) => {
			
			dispatch(fetchTeams(teams));
		});

		fetchPlayersDB(user).then(async (teams) => {

			dispatch(fetchPlayers(teams));
		});
		
	}, []);

	return (
		<>
			<div className="App">
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route path="/newPlayer" element={<AddPlayer />} />
					<Route path="/newTeam" element={<AddTeam />} />
					<Route path="/register" element={<Register />} />
					<Route path="/teamlistingpage" element={<TeamListingPage />} />
					<Route path="/players/:teamName/addPlayers" element={<AddPlayerToTeam />} />
					<Route path="/players/:teamName" element={<PlayersListingPage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
