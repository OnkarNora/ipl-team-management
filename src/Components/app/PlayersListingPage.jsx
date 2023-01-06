import React from 'react';
import { useParams,Link } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { auth} from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from '../Nav/NavigationBar';
import {  Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';

function PlayersListingPage() {

	const {teamName} = useParams();


	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();
	const [playersList, setPlayersList] = useState([]);

	const players = useSelector((state)=> state.PlayerReducer);
	// console.log('players are ; ',players);

	useEffect(() => {
		if (loading) { return; }
		if (!user) { navigate('/'); }
		const team_players = players.filter((player)=>{return player.team_name===teamName;});


		setPlayersList(team_players.map((item,id)=>{
			return (<tr key={id} >
				<td>{id+1}</td>
				<td>{item['name']}</td>
				<td>{item['age']}</td>
				<td>{item['nationality']}</td>
				<td>{item['role']}</td>

			</tr>);
		}));
		
		
	}, [user, loading, players]);
	return (
		<>
			<Navbar />
			<div>
				<Table striped bordered hover variant="dark">
					<thead>
						<tr>
							<th>No.</th>
							<th>Player Name</th>
							<th>Age</th>
							<th>Nationality</th>
							<th>Role</th>

						</tr>
					</thead>
					<tbody>
						{playersList}
					</tbody>    
				</Table>
				<Link className="btn btn-primary" to={'/players/'+teamName+'/addPlayers'} >Add a Player to the Team</Link>
			</div>

		</>
	);
}

export default PlayersListingPage;